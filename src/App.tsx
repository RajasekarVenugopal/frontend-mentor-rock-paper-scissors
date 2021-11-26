import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Score from "./components/Score/Score";

function App() {
  return (
    <div className="App">
      <Score type="original" score={0} />
    </div>
  );
}

export default App;
