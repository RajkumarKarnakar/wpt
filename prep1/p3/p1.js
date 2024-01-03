// Import React and useState hook
import React, { useState } from "react";

// Define a custom component that accepts 2 numbers and displays sum
function SumComponent() {
  // Define the state variables for the numbers and the sum
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [sum, setSum] = useState(0);

  // Define a function to handle the input change and update the state
  function handleChange(event) {
    // Get the name and value of the input element
    const { name, value } = event.target;
    // Convert the value to a number
    const number = Number(value);
    // Update the state according to the name of the input element
    if (name === "number1") {
      setNumber1(number);
    } else if (name === "number2") {
      setNumber2(number);
    }
  }

  // Define a function to calculate and display the sum
  function handleSum() {
    // Calculate the sum of the numbers
    const result = number1 + number2;
    // Update the state for the sum
    setSum(result);
  }

  // Return the JSX for the component
  return (
    <div>
      <h1>Sum Component</h1>
      <p>Enter two numbers and click the button to see the sum.</p>
      <input
        type="number"
        name="number1"
        value={number1}
        onChange={handleChange}
      />
      <input
        type="number"
        name="number2"
        value={number2}
        onChange={handleChange}
      />
      <button onClick={handleSum}>Sum</button>
      <p>The sum is: {sum}</p>
    </div>
  );
}

// Export the component
export default SumComponent;
