import React, { useState } from 'react';
import './App.css';

function App() {
  const [dob, setDob] = useState({ day: '', month: '', year: '' });
  const [ageOn, setAgeOn] = useState({ day: '', month: '', year: '' });
  const [age, setAge] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    const dobDate = new Date(dob.year, dob.month - 1, dob.day);
    const ageDate = new Date(ageOn.year, ageOn.month - 1, ageOn.day);

    // Validate dates
    if (dobDate > ageDate) {
      setError('Date of birth cannot be after the target date');
      setAge(null);
      return;
    }

    const ageInMilliseconds = ageDate - dobDate;
    const ageDateObj = new Date(ageInMilliseconds);

    const years = ageDateObj.getUTCFullYear() - 1970;
    const months = ageDateObj.getUTCMonth();
    const days = ageDateObj.getUTCDate() - 1;

    const weekDay = ageDate.toLocaleString('en-us', { weekday: 'long' });

    setAge({
      years,
      months,
      days,
      weekDay,
    });
    setError('');
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <div className="input-container">
        <div className="input-group">
          <label><strong>Date of Birth:</strong></label>
          <input
            type="number"
            placeholder="DD"
            value={dob.day}
            onChange={(e) => setDob({ ...dob, day: e.target.value })}
          />
          <input
            type="number"
            placeholder="MM"
            value={dob.month}
            onChange={(e) => setDob({ ...dob, month: e.target.value })}
          />
          <input
            type="number"
            placeholder="YYYY"
            value={dob.year}
            onChange={(e) => setDob({ ...dob, year: e.target.value })}
          />
        </div>
        <div className="input-group">
          <label><strong>Find Age on:</strong></label>
          <input
            type="number"
            placeholder="DD"
            value={ageOn.day}
            onChange={(e) => setAgeOn({ ...ageOn, day: e.target.value })}
          />
          <input
            type="number"
            placeholder="MM"
            value={ageOn.month}
            onChange={(e) => setAgeOn({ ...ageOn, month: e.target.value })}
          />
          <input
            type="number"
            placeholder="YYYY"
            value={ageOn.year}
            onChange={(e) => setAgeOn({ ...ageOn, year: e.target.value })}
          />
        </div>
      </div>
      <button onClick={handleCalculate}>Calculate</button>

      {error && <p className="error">{error}</p>}

      {age && (
        <div className="result">
          <h2>Your Age is:</h2>
          <p>{`${age.years} Years, ${age.months} Months, ${age.days} Days`}</p>
          <h3>Your Age on {ageOn.day}/{ageOn.month}/{ageOn.year}:</h3>
          <p>{age.weekDay}</p>
        </div>
      )}
    </div>
  );
}

export default App;
