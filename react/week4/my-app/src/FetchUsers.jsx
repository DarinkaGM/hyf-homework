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
  
  return displayData.map((user) => <h3>{user.login}</h3>);
}

export default FetchUsers;