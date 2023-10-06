import React, { useState } from 'react';
import './App.css';
import WeekAvailability from './components/WeekAvailability';

function App() {
  const [selectedDaysWeek1, setSelectedDaysWeek1] = useState(Array(7).fill(false));
  const [selectedDaysWeek2, setSelectedDaysWeek2] = useState(Array(7).fill(false));
  const [selectedDaysWeek3, setSelectedDaysWeek3] = useState(Array(7).fill(false));
  const [selectedDaysWeek4, setSelectedDaysWeek4] = useState(Array(7).fill(false));
  const [selectedDaysWeek5, setSelectedDaysWeek5] = useState(Array(7).fill(false));
  const [selectedDaysWeek6, setSelectedDaysWeek6] = useState(Array(7).fill(false));
  const [selectedDaysWeek7, setSelectedDaysWeek7] = useState(Array(7).fill(false));

  const saveSelectedDaysWeek1 = (days) => {
    setSelectedDaysWeek1(days);
    console.log('Selected Days Week 1 in App.js:', days);
  };

  const saveSelectedDaysWeek2 = (days) => {
    setSelectedDaysWeek2(days);
    console.log('Selected Days Week 2 in App.js:', days);
  };

  const saveSelectedDaysWeek3 = (days) => {
    setSelectedDaysWeek3(days);
    console.log('Selected Days Week 3 in App.js:', days);
  };

  const saveSelectedDaysWeek4 = (days) => {
    setSelectedDaysWeek4(days);
    console.log('Selected Days Week 4 in App.js:', days);
  };

  const saveSelectedDaysWeek5 = (days) => {
    setSelectedDaysWeek5(days);
    console.log('Selected Days Week 5 in App.js:', days);
  };

  const saveSelectedDaysWeek6 = (days) => {
    setSelectedDaysWeek6(days);
    console.log('Selected Days Week 6 in App.js:', days);
  };

  const saveSelectedDaysWeek7 = (days) => {
    setSelectedDaysWeek7(days);
    console.log('Selected Days Week 7 in App.js:', days);
  };

  return (
    <div className="App">
      <h1>Availability App</h1>
      <div className="week-container">
        <WeekAvailability selectedDays={selectedDaysWeek1} onSave={saveSelectedDaysWeek1} weekName="Week 1" />
        <WeekAvailability selectedDays={selectedDaysWeek2} onSave={saveSelectedDaysWeek2} weekName="Week 2" />
        <WeekAvailability selectedDays={selectedDaysWeek3} onSave={saveSelectedDaysWeek3} weekName="Week 3" />
        <WeekAvailability selectedDays={selectedDaysWeek4} onSave={saveSelectedDaysWeek4} weekName="Week 4" />
        <WeekAvailability selectedDays={selectedDaysWeek5} onSave={saveSelectedDaysWeek5} weekName="Week 5" />
        <WeekAvailability selectedDays={selectedDaysWeek6} onSave={saveSelectedDaysWeek6} weekName="Week 6" />
        <WeekAvailability selectedDays={selectedDaysWeek7} onSave={saveSelectedDaysWeek7} weekName="Week 7" />
      </div>
    </div>
  );
}

export default App;
