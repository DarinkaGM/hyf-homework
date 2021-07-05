import React, { useState, useEffect } from "react";
import Context from "./Context";

function FetchUsers() {
  const users = React.useContext(Context);
  const [userInput, setUserInput] = useState([]);
  useEffect(() => {
    if (!users) return;
    fetch(`https://api.github.com/search/users?q=${users}`)
      .then((res) => res.json())
      .then((data) => setUserInput(data.items))
  }, [users]);
  if (!users) {
    return "Input error";
  }
  if (!userInput) return "Error";
  if (userInput.length === 0) return "No users found";
  
  return userInput.map((users) => <h3>{users.login}</h3>);
}

export default FetchUsers;