import { Button, Row, Col, Form } from "react-bootstrap";
import { useWeeks } from "../../../../hooks/timeslot/useWeeks";
import PropTypes from "prop-types";
import { debounce } from "lodash";
import { useAddAvailability } from "../../../../hooks/timeslot/useAddAvailability";
import { useUpdateAvailability } from "../../../../hooks/timeslot/useUpdateAvailability";
import { useGetWeekAvailabilities } from "../../../../hooks/timeslot/useGetWeekAvailabilities";
import useRemoveAvailability from "../../../../hooks/timeslot/useRemoveAvailability";
import { useEffect, useState } from "react";
// const defaultSlot = { duration: "30min", start: "09:00", end: "9:30" };
// const times = Array.from(
//   { length: 24 },
//   (_, i) => `${i.toString().padStart(2, "0")}:00`
// );
function Availability(props) {
  const { selectedDoctor } = props;
  // const queryClient = useQueryClient();
  const { mutate } = useAddAvailability();
  const { mutate: updateAvailability } = useUpdateAvailability();
  const { mutate: deleteAvailability } = useRemoveAvailability();
  const [latest, setLatest] = useState();
  const [availableTimeSlots, setAvailableTimeslots] = useState([]);
  const generateTimeOptions = () => {
    const times = [];
    for (let h = 0; h < 24; h++) {
      for (let m = 0; m < 60; m = m + 30) {
        // for (let s = 0; s < 60; s++) {
        times.push(
          `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`
        );
        // }
      }
    }
    return times;
  };

  const times = generateTimeOptions();
  const { data: weeks } = useWeeks();
  const week_ids = weeks?.map((week) => week.id);
  const { data: availability } = useGetWeekAvailabilities(
    selectedDoctor,
    week_ids || []
  );

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

  // const [slots] = useState({
  //   Sunday: [],
  //   Monday: [],
  //   Tuesday: [],
  //   Wednesday: [],
  //   Thursday: [],
  //   Friday: [],
  //   Saturday: [],
  // });

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
  const addMinutes = (time, minutesToAdd) => {
    const [hours, minutes] = time.split(":").map(Number);
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes + minutesToAdd);

    return `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };

  const handleAddSlot = (data) => {
    console.log("Data", data);

    // console.log("Data",data.order - 1 );

    // const availabilities = availability[index][0]?.availabilities;
    // const availabilityIndex = availabilities.length - 1;
    const latestAvailabilities = latest?.find(
      (availability) => availability?.weekId === data?.id
    );
    console.log("Latest >>>>>>>", latestAvailabilities);

    const endTime = latestAvailabilities?.latestAvailability?.endTime
      ? formatTime(latestAvailabilities?.latestAvailability?.endTime)
      : null;
    const startTime = latestAvailabilities?.latestAvailability?.startTime
      ? formatTime(latestAvailabilities?.latestAvailability?.startTime)
      : null;
    const newStartTime = startTime ? addMinutes(startTime, 30) : null;
    const newEndTime = endTime ? addMinutes(endTime, 30) : null;
    const defaultStart = newStartTime ?? "09:00";
    const defaultEnd = newEndTime ?? "09:30";
    // console.log(defaultEnd, defaultStart, mutate);

    const slotData = {
      doctor_id: selectedDoctor, //required with type doctor
      // date: "2025-10-22", //required with type date
      type: "week", //week date
      week_id: data?.id, //required with type week
      startTime: defaultStart, //required not_available false
      endTime: defaultEnd, //required not_available false
      not_available: false,
    };
    console.log("Slot data ", slotData);
    if (defaultStart && defaultEnd) {
      mutate(slotData);
    }
    console.log(mutate);
  };
  // console.log(addAvailability);

  const handleRemoveSlot = (id) => {
    deleteAvailability(id);
  };

  useEffect(() => {
    const latestAv = availability.map((item) => {
      const weekId = item[0]?.id;
      const availabilityIndex = item[0]?.availabilities?.length - 1;
      const latestAvailability =
        item[0]?.availabilities[availabilityIndex] || {};
      return { weekId, latestAvailability };
    });

    const timeOptions = availability.map((item) => {
      const weekId = item[0]?.id;
      const availabilityIndex = item[0]?.availabilities?.length - 1;
      const latestAvailability =
        item[0]?.availabilities[availabilityIndex] || {};
      const startSlots = times;
      const endSlots = times.filter(
        (time) => time > latestAvailability?.startTime
      );
      return { weekId, startSlots, endSlots };
    });
    console.log("Time options ", timeOptions);
    setAvailableTimeslots((prev) => {
      const isEqual = JSON.stringify(prev) === JSON.stringify(timeOptions);
      if (!isEqual) return timeOptions;
      return prev;
    });
    setLatest((prev) => {
      const isEqual = JSON.stringify(prev) === JSON.stringify(latestAv);
      if (!isEqual) return latestAv;
      return prev;
    });
  }, [availability]);

  console.log("Availability", setLatest);

  const handleChange = (day, index, field, value, id) => {
    // const updated = [...slots[day]];
    // updated[index][field] = value;
    // setSlots((prev) => ({ ...prev, [day]: updated }));

    if (field === "start") {
      debounce(() => {
        const slotData = {
          // doctor_id: selectedDoctor, //required with type doctor
          // date: "2025-10-22", //required with type date
          // type: "date", //week date
          // week_id: data?.id, //required with type week
          startTime: value, //required not_available false
          // endTime: defaultEnd, //required not_available false
          // not_available: false,
        };
        updateAvailability({ id: id, data: slotData });
        // mutate(slotData);
      }, 500)();
    }

    // setSlots((prev) => {
    //   const updated = [...prev[day]];
    //   updated[index][field] = value;

    //   if (field === "start") {
    //     const [h, m] = value.split(":").map(Number);
    //     const endMinutes = h * 60 + m + 30;
    //     if (endMinutes <= 1440) {
    //       const eh = String(Math.floor(endMinutes / 60)).padStart(2, "0");
    //       const em = String(endMinutes % 60).padStart(2, "0");
    //       updated[index].end = `${eh}:${em}`;
    //     }
    //   }
    //   return { ...prev, [day]: updated };
    // });
  };

  const handleSubmit = () => {
    // Submit logic here
  };

  // const convertToMinutes = (time) => {
  //   const [h, m] = time.split(":").map(Number);
  //   return h * 60 + m;
  // };
  const formatTime = (timeString) => {
    return timeString.slice(0, 5); // "09:00:00" → "09:00"
  };
  console.log("Latest ", latest);

  const renderStartForm = (item, day, index, id) => {
    const availability = availableTimeSlots?.find(
      (item) => item.weekId === day.id
    );
    return (
      <Form.Select
        // value={item.startTime}
        defaultValue={formatTime(item.startTime)}
        onChange={(e) =>
          handleChange(day.name, index, "start", e.target.value, id)
        }
      >
        {availability?.startSlots?.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </Form.Select>
    );
  };

  const renderEndForm = (item, day, index, id) => {
    const availability = availableTimeSlots?.find(
      (item) => item.weekId === day.id
    );
    return (
      <Form.Select
        // value={item.startTime}
        defaultValue={formatTime(item.startTime)}
        onChange={(e) =>
          handleChange(day.name, index, "end", e.target.value, id)
        }
      >
        {availability?.endSlots?.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </Form.Select>
    );
  };

  return (
    <div className="container my-2">
      {weeks?.map((day, index) => (
        <div key={day.id} className="mb-4 border-bottom pb-3 d-flex">
          <div style={{ width: "10%" }}>
            <strong>{day?.name}</strong>
          </div>

          <div className="w-75">
            {availability[index] &&
              availability[index]?.map((slot) =>
                slot.availabilities.map((item) => (
                  <Row key={index} className="align-items-center mb-2">
                    {console.log("id of item " + item.id + " is ", item)}
                    {/* <Col xs={3}>
                      <Form.Select
                        value={item.duration}
                        onChange={(e) =>
                          handleChange(day, index, "duration", e.target.value)
                        }
                      >
                        {durations.map((d) => (
                          <option key={d}>{d}</option>
                        ))}
                      </Form.Select>
                    </Col> */}

                    {/* {slot.availabilities.map((item) => (
                    <div key={item.id}>{item.id}</div>
                  ))} */}
                    <Col xs={3}>
                      {renderStartForm(item, day, index, item?.id)}
                    </Col>
                    <Col xs={3}>
                      {renderEndForm(item, day, index, item?.id)}
                    </Col>
                    <Col xs={1}>
                      <button
                        className="btn-outline-danger rounded-circle"
                        style={{ width: "30px", height: "30px" }}
                        onClick={() => handleRemoveSlot(item.id)}
                        // disabled={slots[day.name].length === 1}
                        title="Remove Slot"
                      >
                        −
                      </button>
                    </Col>
                  </Row>
                ))
              )}
            <button
              className="btn-outline-primary rounded-circle"
              style={{ width: "30px", height: "30px" }}
              // type="button"
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
  selectedDoctor: PropTypes.string,
};

export default Availability;
