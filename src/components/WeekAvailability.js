import React from 'react';
import './WeekAvailability.css';

const WeekAvailability = ({ selectedDays, onSave, weekName }) => {
  const toggleDay = (dayIndex) => {
    const updatedSelectedDays = [...selectedDays];
    updatedSelectedDays[dayIndex] = !updatedSelectedDays[dayIndex];
    onSave(updatedSelectedDays); // Call the onSave function to update the selected days
  };

  return (
    <div className="center-container">
      <h2>{weekName} Availability</h2>
      <div className="availability-grid">
        {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, dayIndex) => (
          <div
            key={day}
            className={`day ${selectedDays[dayIndex] ? 'available' : ''}`}
            onClick={() => toggleDay(dayIndex)}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekAvailability;
