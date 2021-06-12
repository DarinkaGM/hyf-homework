import React, { useState } from "react";
import "./App.css";
import FetchUsers from "./FetchUsers";
import Context from "./Context";

function App({setUsers}) {
  const [user, inputData] = useState("");
  const updateData = (e) => {
    inputData(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="github-searcher">
      <h1>Github user searcher</h1>
      <Context.Provider value={user}>
      <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          setUsers={setUsers} 
          onChange={updateData}
        ></input>
      </form>
    </>
      <FetchUsers />
      </Context.Provider>
    </div>

  );
}

export default App;