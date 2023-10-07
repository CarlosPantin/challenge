import React from 'react';

const UserAvailability = ({ selectedDays }) => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const selectedDayNames = daysOfWeek.filter((day, index) => selectedDays[index]);

  return (
    <div className="user-availability">
      <h2>Available Days</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {selectedDayNames.map((day, index) => (
          <li key={index}>
            {day}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserAvailability;
