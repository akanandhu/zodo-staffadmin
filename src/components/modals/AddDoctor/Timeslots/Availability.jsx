import { useEffect, useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";
import { useWeeks } from "../../../../hooks/timeslot/useWeeks";
import PropTypes from "prop-types";
import { debounce } from "lodash";
import { useAddAvailability } from "../../../../hooks/timeslot/useAddAvailability";
// const defaultSlot = { duration: "30min", start: "09:00", end: "9:30" };
// const times = Array.from(
//   { length: 24 },
//   (_, i) => `${i.toString().padStart(2, "0")}:00`
// );
function Availability(props) {
  const { selectedDoctor } = props;
  const { mutate } = useAddAvailability();
  const generateTimeOptions = () => {
    const times = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m = m + 30) {
        times.push(
          `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`
        );
      }
    }
    return times;
  };

  const times = generateTimeOptions();
  const { data: weeks, isLoading } = useWeeks();
  // const getAvailableStartTimes = (slots) => {
  //   const times = Array.from(
  //     { length: 24 },
  //     (_, i) => `${i.toString().padStart(2, "0")}:00`
  //   );

  //   const isUsed = (time) => {
  //     return slots.some(
  //       ({ startTime, endTime }) => time >= startTime && time < endTime
  //     );
  //   };

  //   return times.filter((time) => !isUsed(time));
  // };

  // Assuming useWeeks is used to fetch or manage weeks data, but not used in this component
  console.log(weeks, isLoading);

  const weekArray = weeks?.map((week) => week.name);
  console.log("Week Array:", weekArray);

  const [slots, setSlots] = useState({
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  });

  // useEffect(() => {
  //   if (weeks) {
  //     const initialSlots = weeks.reduce((acc, week) => {
  //       acc[week.name] = [{ ...defaultSlot }];
  //       return acc;
  //     }, {});
  //     setSlots(initialSlots);
  //     // setAvailableTimes(getAvailableStartTimes(initialSlots[weekArray[0]]));
  //   }
  // }, [weeks]);

  // const handleAddSlot = (data) => {
  //   const day = data.name;
  //   setSlots((prevData) => {
  //     const daySlots = prevData[day];
  //     const lastEnd = daySlots.length
  //       ? daySlots[daySlots.length - 1].end
  //       : "09:00";

  //     const [h, m] = lastEnd.split(":").map(Number);
  //     const totalMinutes = h * 60 + m;
  //     const nextStartMinutes = totalMinutes;
  //     const nextEndMinutes = totalMinutes + 30;

  //     // Don't add if nextEnd exceeds 24 hours
  //     if (nextEndMinutes > 24 * 60) return prevData;

  //     const nextStart = `${String(Math.floor(nextStartMinutes / 60)).padStart(
  //       2,
  //       "0"
  //     )}:${String(nextStartMinutes % 60).padStart(2, "0")}`;
  //     const nextEnd = `${String(Math.floor(nextEndMinutes / 60)).padStart(
  //       2,
  //       "0"
  //     )}:${String(nextEndMinutes % 60).padStart(2, "0")}`;

  //     return {
  //       ...prevData,
  //       [day]: [
  //         ...daySlots,
  //         { duration: "30min", start: nextStart, end: nextEnd },
  //       ],
  //     };
  //   });
  //   // const day = data.name;
  //   // setSlots((prev) => ({
  //   //   ...prev,
  //   //   [day]: [...prev[day], { ...defaultSlot }],
  //   // }));
  // };

  const handleAddSlot = (data) => {
    const day = data.name;
    console.log("Adding slot for day:", data);

    setSlots((prevData) => {
      const daySlots = prevData[day] || [];

      // 🟢 If no slots, add default slot
      if (daySlots.length === 0) {
        const defaultStart = "09:00";
        const defaultEnd = "09:30";

        console.log(selectedDoctor);

        const slotData = {
          doctor_id: selectedDoctor, //required with type doctor
          date: "2025-10-22", //required with type date
          type: "date", //week date
          week_id: data?.id, //required with type week
          startTime: defaultStart, //required not_available false
          endTime: defaultEnd, //required not_available false
          not_available: false,
        };
        console.log("Slot Data:", slotData);
        debounce(() => {
          mutate(slotData);
        }, 500)();

        return {
          ...prevData,
          [day]: [{ duration: "30min", start: defaultStart, end: defaultEnd }],
        };
      }

      // 🟢 If slots exist, calculate next slot based on last slot's `end`
      const lastEnd = daySlots[daySlots.length - 1].end;
      const [h, m] = lastEnd.split(":").map(Number);
      const totalMinutes = h * 60 + m;
      const nextStartMinutes = totalMinutes;
      const nextEndMinutes = totalMinutes + 30;

      // Don't add if nextEnd exceeds 24 hours
      if (nextEndMinutes > 24 * 60) return prevData;

      const nextStart = `${String(Math.floor(nextStartMinutes / 60)).padStart(
        2,
        "0"
      )}:${String(nextStartMinutes % 60).padStart(2, "0")}`;
      const nextEnd = `${String(Math.floor(nextEndMinutes / 60)).padStart(
        2,
        "0"
      )}:${String(nextEndMinutes % 60).padStart(2, "0")}`;

      return {
        ...prevData,
        [day]: [
          ...daySlots,
          { duration: "30min", start: nextStart, end: nextEnd },
        ],
      };
    });
  };
  useEffect(() => {
    console.log("SLOTS ", slots);
  }, [slots]);
  const handleRemoveSlot = (day, index) => {
    setSlots((prev) => ({
      ...prev,
      [day]: prev[day].filter((_, i) => i !== index),
    }));
  };

  const handleChange = (day, index, field, value) => {
    // const updated = [...slots[day]];
    // updated[index][field] = value;
    // setSlots((prev) => ({ ...prev, [day]: updated }));

    if (field === "start") {
      debounce(() => {

        // mutate(slotData);
      }, 500)();
    }

    setSlots((prev) => {
      const updated = [...prev[day]];
      updated[index][field] = value;

      if (field === "start") {
        const [h, m] = value.split(":").map(Number);
        const endMinutes = h * 60 + m + 30;
        if (endMinutes <= 1440) {
          const eh = String(Math.floor(endMinutes / 60)).padStart(2, "0");
          const em = String(endMinutes % 60).padStart(2, "0");
          updated[index].end = `${eh}:${em}`;
        }
      }

      return { ...prev, [day]: updated };
    });
  };

  const handleSubmit = () => {
    console.log("Final Slot Data:", slots);
    // Submit logic here
  };

  console.log("SLOTS:", slots);
  const convertToMinutes = (time) => {
    const [h, m] = time.split(":").map(Number);
    return h * 60 + m;
  };

  return (
    <div className="container my-2">
      <h6 className="mb-3" style={{ fontSize: "0.9em", fontWeight: "600" }}>
        June 2023, 10th to 17th
      </h6>
      {weeks?.map((day) => (
        <div key={day.id} className="mb-4 border-bottom pb-3 d-flex">
          <div style={{ width: "10%" }}>
            <strong>{day?.name}</strong>
          </div>

          <div className="w-75">
            {slots &&
              slots[day?.name]?.map((slot, index) => (
                <Row key={index} className="align-items-center mb-2">
                  {/* <Col xs={3}>
                  <Form.Select
                    value={slot.duration}
                    onChange={(e) =>
                      handleChange(day, index, "duration", e.target.value)
                    }
                  >
                    {durations.map((d) => (
                      <option key={d}>{d}</option>
                    ))}
                  </Form.Select>
                </Col> */}
                  <Col xs={3}>
                    <Form.Select
                      value={slot.start}
                      onChange={(e) =>
                        handleChange(day.name, index, "start", e.target.value)
                      }
                    >
                      {console.log("day",day)}
                      {times
                        .filter((time) => {
                          const currentMinutes = convertToMinutes(time);

                          // 1. Prevent using the same start time as other slots
                          const isUsed = slots[day.name].some(
                            (s, i) => i !== index && s.start === time
                          );
                          if (isUsed) return false;

                          // 2. Exclude time before or equal to previous slot's end
                          if (index > 0) {
                            const prevEnd = slots[day.name][index - 1].end;
                            const prevEndMin = convertToMinutes(prevEnd);
                            if (currentMinutes <= prevEndMin) return false;
                          }

                          return true;
                        })

                        .map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                    </Form.Select>
                  </Col>
                  <Col xs={3}>
                    <Form.Select
                      value={slot.end}
                      onChange={(e) =>
                        handleChange(day.name, index, "end", e.target.value)
                      }
                    >
                      {times
                        .filter((t) => {
                          const [sh, sm] = slot.start.split(":").map(Number);
                          const [eh, em] = t.split(":").map(Number);
                          const startMinutes = sh * 60 + sm;
                          const endMinutes = eh * 60 + em;
                          return endMinutes - startMinutes >= 30;
                        })
                        .map((t) => (
                          <option key={t}>{t}</option>
                        ))}
                    </Form.Select>
                  </Col>
                  <Col xs={1}>
                    <button
                      className="btn-outline-danger rounded-circle"
                      style={{ width: "30px", height: "30px" }}
                      onClick={() => handleRemoveSlot(day.name, index)}
                      // disabled={slots[day.name].length === 1}
                      title="Remove Slot"
                    >
                      −
                    </button>
                  </Col>
                </Row>
              ))}
            <button
              className="btn-outline-primary rounded-circle"
              style={{ width: "30px", height: "30px" }}
              type="button"
              size="sm"
              onClick={() => handleAddSlot(day)}
              title="Add Slot"
            >
              +
            </button>
          </div>
        </div>
      ))}

      <div className="d-flex justify-content-between mt-4">
        <Button
          variant="outline-primary"
          //   onClick={() => handleClose()}
          className="ps-5 pe-5"
        >
          Back
        </Button>
        <Button
          variant="primary"
          type="submit"
          className="ps-5 pe-5"
          onClick={handleSubmit}
        >
          {/* {isLoading && (
            <span
              className="spinner-border spinner-border-sm"
              aria-hidden="true"
            ></span>
          )} */}
          <span className="ps-2">Edit Now</span>
        </Button>
      </div>
    </div>
  );
}

// props validation
Availability.propTypes = {
  selectedDoctor: PropTypes.object,
};

export default Availability;
