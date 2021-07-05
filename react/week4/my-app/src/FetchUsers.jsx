import React, { useState, useEffect } from "react";
import Context from "./Context";

function FetchUsers() {
  const users = React.useContext(Context);
  const [displayData, fetchData] = useState([]);
  useEffect(() => {
    if (!users) return;
    fetch(`https://api.github.com/search/users?q=${users}`)
      .then((res) => res.json())
      .then((data) => fetchData(data.items))
  }, [users]);
  if (!users) {
    return "Input error";
  }
  if (!displayData) return "Error";
  if (displayData.length === 0) return "No users found";
  
  return displayData.map((users) => <h3>{users.login}</h3>);
}

export default FetchUsers;