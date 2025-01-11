import React from "react";

const AgeResult = ({ age }) => {
  return (
    <div>
      {age ? (
        <h2>Your Age is: {age} years</h2>
      ) : (
        <h2>Please enter your date of birth to calculate your age.</h2>
      )}
    </div>
  );
};

export default AgeResult;
