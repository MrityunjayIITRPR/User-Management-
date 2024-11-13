import React, { useEffect, useState } from "react";
import UserTable from "./Components/UserTable";
import ThemeContext from "./utils/ThemeContext";
const UserDashboard = () => {
  const [usersList, setUsersList] = useState([]);
  const [darkTheme, setDarkTheme] = useState([]);
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
    <ThemeContext.Provider value={{ darkTheme: darkTheme, setDarkTheme }}>
      <div>
        <div className="ml-[18%] my-[1%]">
          <h1 className="text-3xl font-bold items-center ml-10 text-cyan-700">
            Employee Details:
          </h1>
        </div>

        <UserTable usersList={usersList} />
      </div>
    </ThemeContext.Provider>
  );
};

export default UserDashboard;
