import React from 'react';
import './UserAvailability.css'; // Import your CSS file with styles

const UserAvailability = ({ selectedDays, selectedWeek, onPreviousWeek, onNextWeek }) => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const selectedDayNames = daysOfWeek.filter((day, index) => selectedDays[index]);

  return (
    <div className="user-availability-container">
      <h2>Available Days for Week {selectedWeek}</h2>
      <div className="user-availability-buttons">
        <button onClick={onPreviousWeek}>Previous Week</button>
        <button onClick={onNextWeek}>Next Week</button>
      </div>
      <ul className="user-availability-list">
        {selectedDayNames.map((day, index) => (
          <li key={index} className="user-availability-item">
            {day}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAvailability;
