// Import React and the custom component
import React from "react";
import SumComponent from "./SumComponent";

// Define the App component
function App() {
  // Return the JSX for the App component
  return (
    <div className="App">
      <h1>App Component</h1>
      <p>This is the App component that imports the Sum component.</p>
      {/* Render the Sum component */}
      <SumComponent />
    </div>
  );
}

// Export the App component
export default App;
