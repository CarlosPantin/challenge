import React from 'react';
import './WeekAvailability.css'; 

const WeekAvailability = ({ selectedDays, onSave, weekName }) => {
  const toggleDay = (dayIndex) => {
    const updatedSelectedDays = [...selectedDays];
    updatedSelectedDays[dayIndex] = !updatedSelectedDays[dayIndex];
    onSave(updatedSelectedDays);
  };

  return (
    <div className="week-availability-container">
      <h2>{weekName}</h2>
      <div className="availability-grid">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, dayIndex) => (
          <div
            key={day}
            className={`day ${selectedDays[dayIndex] ? 'available' : 'not-available'}`}
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
