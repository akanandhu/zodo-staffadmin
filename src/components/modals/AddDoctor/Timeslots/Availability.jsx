import { Button, Row, Col, Form } from "react-bootstrap";
import { useWeeks } from "../../../../hooks/timeslot/useWeeks";
import PropTypes from "prop-types";
import { useAddAvailability } from "../../../../hooks/timeslot/useAddAvailability";
import { useGetWeekAvailabilities } from "../../../../hooks/timeslot/useGetWeekAvailabilities";
import useRemoveAvailability from "../../../../hooks/timeslot/useRemoveAvailability";
import { useEffect, useState } from "react";

function Availability(props) {
  const { selectedDoctor } = props;
  // const queryClient = useQueryClient();
  const { mutateAsync } = useAddAvailability();
  // const { mutate: updateAvailability } = useUpdateAvailability();
  const { mutate: deleteAvailability } = useRemoveAvailability();
  const [slotTimes, setSlotTimes] = useState({});

  const { data: weeks } = useWeeks();
  if (!weeks) {
    return <div>Loading weeks...</div>;
  }
  const week_ids = weeks?.map((week) => week.id);
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
  const { data: availability } = useGetWeekAvailabilities(
    selectedDoctor,
    week_ids
  );
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

  const handleAddSlot = async (data) => {
    const weekId = data?.id;
    // Find the index of the weekId in weekIds
    const weekIndex = week_ids.findIndex((id) => id === weekId);
    const currentWeekData = availability?.[weekIndex];
    if (!currentWeekData || !currentWeekData[0]) {
      console.warn("No availability data found for this week");
      return;
    }
    const availabilities = currentWeekData[0]?.availabilities || [];
    const lastSlot = availabilities[availabilities.length - 1];
    const defaultStart = lastSlot?.endTime
      ? formatTime(lastSlot.endTime)
      : "09:00";
    const defaultEnd = addMinutes(defaultStart, 30);
    const slotData = {
      doctor_id: selectedDoctor,
      type: "week",
      week_id: weekId,
      startTime: defaultStart,
      endTime: defaultEnd,
      not_available: false,
    };

    try {
      await mutateAsync(slotData);
    } catch (err) {
      console.error("Error adding slot", err);
    }
  };

  const handleRemoveSlot = (id) => {
    deleteAvailability(id);
  };

  const subtractMinutes = (time, minutesToSubtract) => {
    const [hours, minutes] = time.split(":").map(Number);
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes - minutesToSubtract);

    return `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    if (!availability) return;
    const initialSlotTimes = {};
    availability.forEach((week) => {
      const slots = week?.[0]?.availabilities || [];
      slots.forEach((slot) => {
        const id = slot.id;
        initialSlotTimes[id] = {
          start: formatTime(slot.startTime),
          end: formatTime(slot.endTime),
        };
      });
    });

    // Compare old and new to prevent unnecessary updates
    const isSame =
      JSON.stringify(slotTimes) === JSON.stringify(initialSlotTimes);
    if (!isSame) {
      setSlotTimes(initialSlotTimes);
    }
  }, [availability]);
  const handleChange = (day, index, field, value, slotId) => {
    setSlotTimes((prev) => ({
      ...prev,
      [slotId]: {
        ...(prev[slotId] || {}),
        [field]: value,
      },
    }));

    // // const updated = [...slots[day]];
    // // updated[index][field] = value;
    // // setSlots((prev) => ({ ...prev, [day]: updated }));

    // if (field === "start") {
    //   debounce(() => {
    //     const slotData = {
    //       // doctor_id: selectedDoctor, //required with type doctor
    //       // date: "2025-10-22", //required with type date
    //       // type: "date", //week date
    //       // week_id: data?.id, //required with type week
    //       startTime: value, //required not_available false
    //       // endTime: defaultEnd, //required not_available false
    //       // not_available: false,
    //     };
    //     updateAvailability({ id: id, data: slotData });
    //     // mutate(slotData);
    //   }, 500)();
    // }

    // // setSlots((prev) => {
    // //   const updated = [...prev[day]];
    // //   updated[index][field] = value;

    // //   if (field === "start") {
    // //     const [h, m] = value.split(":").map(Number);
    // //     const endMinutes = h * 60 + m + 30;
    // //     if (endMinutes <= 1440) {
    // //       const eh = String(Math.floor(endMinutes / 60)).padStart(2, "0");
    // //       const em = String(endMinutes % 60).padStart(2, "0");
    // //       updated[index].end = `${eh}:${em}`;
    // //     }
    // //   }
    // //   return { ...prev, [day]: updated };
    // // });
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
  // Sort ascending (oldest to newest)
  const sortedAsc = (data) => {
    return data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  };
  const renderStartForm = (item, day, index, id) => {
    const timeOptions = times.filter(
      (time) => time > subtractMinutes(item?.startTime, 30)
    );
    return (
      <Form.Select
        // value={defaultStartTime}
        // defaultValue={item?.endTime ? formatTime(item.endTime) : "09:00"}
        onChange={(e) =>
          handleChange(day.name, index, "start", e.target.value, id)
        }
      >
        {timeOptions?.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </Form.Select>
    );
  };

  const renderEndForm = (item, day, index, id) => {
    const timeOptions = times.filter(
      (time) => time > subtractMinutes(item?.endTime, 30)
    );

    return (
      <Form.Select
        onChange={(e) =>
          handleChange(day.name, index, "end", e.target.value, id)
        }
      >
        {timeOptions?.map((t) => (
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
                sortedAsc(slot.availabilities).map((item) => (
                  <Row key={index} className="align-items-center mb-2">
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
