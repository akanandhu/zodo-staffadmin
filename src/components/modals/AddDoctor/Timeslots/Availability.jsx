import { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const durations = ["15min", "30min", "45min", "60min"];
const times = Array.from(
  { length: 24 },
  (_, i) => `${i.toString().padStart(2, "0")}:00`
);

const defaultSlot = { duration: "30min", start: "09:00", end: "12:00" };
function Availability() {
  const [slots, setSlots] = useState(() =>
    daysOfWeek.reduce((acc, day) => {
      acc[day] = [{ ...defaultSlot }];
      return acc;
    }, {})
  );

  const handleAddSlot = (day) => {
    setSlots((prev) => ({
      ...prev,
      [day]: [...prev[day], { ...defaultSlot }],
    }));
  };

  const handleRemoveSlot = (day, index) => {
    setSlots((prev) => ({
      ...prev,
      [day]: prev[day].filter((_, i) => i !== index),
    }));
  };

  const handleChange = (day, index, field, value) => {
    const updated = [...slots[day]];
    updated[index][field] = value;
    setSlots((prev) => ({ ...prev, [day]: updated }));
  };

  const handleSubmit = () => {
    console.log("Final Slot Data:", slots);
    // Submit logic here
  };
  return (
    <div className="container my-2">
      <h6 className="mb-3" style={{fontSize:'0.9em',fontWeight:'600'}}>June 2023, 10th to 17th</h6>
      {daysOfWeek.map((day) => (
        <div key={day} className="mb-4 border-bottom pb-3 d-flex">
          <div style={{ width: "10%" }}>
            <strong>{day}</strong>
          </div>

          <div className="w-75">
            {slots[day].map((slot, index) => (
              <Row key={index} className="align-items-center mb-2">
                <Col xs={3}>
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
                </Col>
                <Col xs={3}>
                  <Form.Select
                    value={slot.start}
                    onChange={(e) =>
                      handleChange(day, index, "start", e.target.value)
                    }
                  >
                    {times.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </Form.Select>
                </Col>
                <Col xs={3}>
                  <Form.Select
                    value={slot.end}
                    onChange={(e) =>
                      handleChange(day, index, "end", e.target.value)
                    }
                  >
                    {times.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </Form.Select>
                </Col>
                <Col xs={1}>
                  <button
                    className="btn-outline-danger rounded-circle"
                    style={{ width: "30px", height: "30px" }}
                    onClick={() => handleRemoveSlot(day, index)}
                    disabled={slots[day].length === 1}
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

export default Availability;
