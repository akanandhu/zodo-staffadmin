import React, { useEffect, useState } from "react";
import { useAddAvailability } from "../../../../hooks/timeslot/useAddAvailability";
import { useGetWeekAvailabilities } from "../../../../hooks/timeslot/useGetWeekAvailabilities";
import { useWeeks } from "../../../../hooks/timeslot/useWeeks";
import PropTypes from "prop-types";

const formatTime = (time) => time?.slice(0, 5);
const addMinutes = (time, minutesToAdd) => {
  const [h, m] = time.split(":").map(Number);
  const date = new Date();
  date.setHours(h);
  date.setMinutes(m + minutesToAdd);
  return `${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}`;
};

function SlotManager({ selectedDoctor }) {
  const { data: weeks } = useWeeks();
  console.log("Weeks", weeks);
  if (!weeks) {
    return <div>Loading weeks...</div>;
  }
  const week_ids = weeks?.map((week) => week.id);
  const { data: weekAvailabilities, isLoading } = useGetWeekAvailabilities(
    selectedDoctor,
    week_ids
  );
  const { mutateAsync: addAvailability } = useAddAvailability();
  const [latestTimes, setLatestTimes] = useState({}); // Track latest endTime for each week

  // Initialize latest times
  useEffect(() => {
    if (weekAvailabilities?.length) {
      const latest = {};
      week_ids.forEach((id, index) => {
        const week = weekAvailabilities[index]?.[0];
        const slots = week?.availabilities || [];
        const lastSlot = slots[slots.length - 1];
        latest[id] = lastSlot?.endTime ? formatTime(lastSlot.endTime) : "09:00";
      });
      setLatestTimes(latest);
    }
  }, [weekAvailabilities]);

  const handleAddSlot = async (weekId) => {
    const latestEndTime = latestTimes?.[weekId] ?? "09:00";
    const newEndTime = addMinutes(latestEndTime, 30);

    const slotData = {
      doctor_id: selectedDoctor,
      type: "week",
      week_id: weekId,
      startTime: latestEndTime,
      endTime: newEndTime,
      not_available: false,
    };

    try {
      await addAvailability(slotData);
      setLatestTimes((prev) => ({
        ...prev,
        [weekId]: newEndTime,
      }));
    } catch (err) {
      console.error("Failed to add slot", err);
    }
  };

  return (
    <div className="container py-4">
      <h4 className="mb-4">Doctor Time Slots</h4>

      {isLoading ? (
        <p>Loading availability...</p>
      ) : (
        <div className="row">
          {week_ids.map((weekId, index) => {
            const weekData = weekAvailabilities?.[index]?.[0];
            const slots = weekData?.availabilities || [];

            return (
              <div className="col-md-6 mb-4" key={weekId}>
                <div className="card shadow-sm">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <strong>Week ID: {weekId}</strong>
                    <button
                      className="btn btn-sm btn-outline-success"
                      onClick={() => handleAddSlot(weekId)}
                    >
                      ➕ Add Slot
                    </button>
                  </div>
                  <ul className="list-group list-group-flush">
                    {slots.length > 0 ? (
                      slots.map((slot, i) => (
                        <li
                          className="list-group-item d-flex justify-content-between"
                          key={i}
                        >
                          <span>{formatTime(slot.startTime)}</span>
                          <span>→</span>
                          <span>{formatTime(slot.endTime)}</span>
                        </li>
                      ))
                    ) : (
                      <li className="list-group-item text-muted">
                        No slots available
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

SlotManager.propTypes = {
  selectedDoctor: PropTypes.string,
};

export default SlotManager;
