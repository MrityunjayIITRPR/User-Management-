import React, { useEffect, useState } from "react";
import User from "./Components/User";
const UserDashboard = () => {
  const [usersList, setUsersList] = useState([]);
  useEffect(() => {
    fetchUserDetails();
  }, []);
  const fetchUserDetails = async () => {
    const jsondata = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await jsondata.json();
    setUsersList(userData);
  };
  if (usersList?.length === 0)
    return (
      <div className="w-[100px] mx-auto my-[30%]">
        <h1>Loading Data...</h1>
      </div>
    );

  return (
    <div>
      <User usersList={usersList} />
    </div>
  );
};

export default UserDashboard;
