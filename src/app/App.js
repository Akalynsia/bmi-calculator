"use client";
import React, { useState } from "react";

const App = () => {
  const [height, setHeight] = useState(160);
  const [weight, setWeight] = useState(60);
  const [bmi, setBMI] = useState(0);

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(bmiValue);
  };
  return (
    <div className="App">
      <h1>BMI Calculator</h1>
      <div>
        <label>
          Height: {height} cm
          <input
            type="range"
            min="100"
            max="250"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Height: {weight} kg
          <input
            type="range"
            min="30"
            max="200"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
      </div>
      <button onClick={calculateBMI}>calculate BMI</button>
      {bmi > 0 && <p>Your BMI is: {bmi}</p>}
    </div>
  );
};

export default App;
