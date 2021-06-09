import React from "react";
import "./App.css";
import ToDoList from "./components/ToDoList";
import Timer from "./components/Timer";


function App() {

  return (
    <div className="App">
      <div className="App-header">
        <h2>To-Do list</h2>
        <ToDoList className="ToDoList"/>
      </div>
      <div className="Timer">
      <Timer />
      </div>
    </div>
    
  );
}

export default App;