import React, { useState } from 'react';
import './App.css';
import WeekAvailability from './components/WeekAvailability';
import UserAvailability from './components/UserAvailability';

function App() {
  const numWeeks = 7; // Total number of weeks
  const [selectedWeek, setSelectedWeek] = useState(1);

  // State to manage selected days for each week
  const [selectedDays, setSelectedDays] = useState(
    Array(numWeeks).fill().map(() => Array(7).fill(false))
  );

  const selectPreviousWeek = () => {
    if (selectedWeek > 1) {
      setSelectedWeek(selectedWeek - 1);
    }
  };

  const selectNextWeek = () => {
    if (selectedWeek < numWeeks) {
      setSelectedWeek(selectedWeek + 1);
    }
  };

  const saveSelectedDays = (weekIndex, days) => {
    const updatedSelectedDays = [...selectedDays];
    updatedSelectedDays[weekIndex] = days;
    setSelectedDays(updatedSelectedDays);
    console.log(`Selected Days Week ${weekIndex + 1} in App.js:`, days);
   
  };

  return (
    <div className="App">
      <h1>My availability</h1>
      <div className="week-container">
        {Array.from({ length: numWeeks }, (_, weekIndex) => (
          <WeekAvailability
            key={`week-${weekIndex + 1}`}
            selectedDays={selectedDays[weekIndex]}
            onSave={(days) => saveSelectedDays(weekIndex, days)}
            weekName={`Week ${weekIndex + 1}`}
          />
        ))}
      </div>
      <h1>User Availability</h1>
      <UserAvailability
        selectedDays={selectedDays[selectedWeek - 1]} // Pass selected days for the chosen week
        selectedWeek={selectedWeek}
        onPreviousWeek={selectPreviousWeek}
        onNextWeek={selectNextWeek}
      />
    </div>
  );
}

export default App;
