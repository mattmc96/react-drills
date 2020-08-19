import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <label>
          My Text Box
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
