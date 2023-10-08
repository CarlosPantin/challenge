import React from "react";
import "./UserAvailability.css";

const UserAvailability = ({
  selectedDays,
  selectedWeek,
  onPreviousWeek,
  onNextWeek,
  onSelectThisWeek,
}) => {
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const selectedDayNames = daysOfWeek.filter(
    (day, index) => selectedDays[index]
  );

  return (
    <div className="user-availability-container">
      <div className="button-container">
        {selectedWeek > 1 && (
          <button onClick={onPreviousWeek}>Previous Week</button>
        )}
      </div>
      <div className="button-container">
        {selectedWeek < 7 && <button onClick={onNextWeek}>Next Week</button>}
      </div>

      <div className="button-container">
        <button onClick={onSelectThisWeek}>This Week</button>
      </div>

      <h2>Available Days for Week {selectedWeek}</h2>

      {selectedDayNames.length === 0 ? (
        <p>No available days this week.</p>
      ) : (
        <ul className="user-availability-list">
          {selectedDayNames.map((day, index) => (
            <li key={index} className="user-availability-item">
              {day}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserAvailability;
