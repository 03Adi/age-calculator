import React, { useState } from "react";

const AgeForm = ({ calculateAge }) => {
  const [dob, setDob] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dob) {
      calculateAge(dob);
    } else {
      alert("Please enter your date of birth.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="dob">Enter Your Date of Birth:</label>
      <input
        type="date"
        id="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <button type="submit">Calculate Age</button>
    </form>
  );
};

export default AgeForm;
