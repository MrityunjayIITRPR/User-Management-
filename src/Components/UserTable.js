import React, { useContext, useEffect, useState } from "react";
import ToggleTheme from "./ToggleTheme";
import ThemeContext from "../utils/ThemeContext";

const UserTable = ({ usersList }) => {
  const [showMore, setshowMore] = useState(false);
  const [searchText, setsearchText] = useState("");
  const [filterUserList, setfilterUserList] = useState([]);
  const { darkTheme } = useContext(ThemeContext);
  useEffect(() => {
    setfilterUserList(usersList);
  }, []);

  const handleSearch = (e) => {
    setsearchText(e.target.value);
    const filterdList = usersList.filter((user) =>
      user.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setfilterUserList(filterdList);
    if (e.target.value === "") {
      setfilterUserList(usersList);
    }
  };
  return (
    <div className="w-fit ml-[20%] my-[3%]">
      <div className="flex">
        <ToggleTheme />
        <input
          type="text"
          value={searchText}
          onChange={handleSearch}
          placeholder="search"
          className="py-3 px-2 m-2 border border-black rounded-lg shadow-md"
        />
      </div>
      <div className="w-fit">
        <table
          className={`  ${
            darkTheme
              ? "text-white bg-black border border-gray-100"
              : "text-black  border border-black rounded-lg  table-auto border-collapse border-spacing-2"
          }`}
        >
          <thead>
            <tr className="w-[25px] border border-b-2">
              <th className="text-xl m-2 p-2 text-center ">ID</th>
              <th className="text-xl m-2 p-2 text-center ">Name</th>
              <th className="text-xl m-2 p-2 text-center">Email</th>
              <th className="text-xl m-2 p-2 text-center">Company Name</th>
              {showMore && (
                <>
                  <th className="text-xl m-2 p-2 text-center">Address</th>
                  <th className="text-xl m-2 p-2 text-center">Phone</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {filterUserList.map((user) => (
              <tr className="py-2 my-1 border border-b-2 shadow-" key={user.id}>
                <td className="text-lg py-2 m-2 px-2  border border-gray-100 rounded-lg">
                  {user.id}
                </td>
                <td className="text-lg py-1 m-2 px-2  border  border-gray-100 rounded-lg">
                  {user.name}
                </td>
                <td className="text-lg py-1 m-2 px-2  border border-gray-100 rounded-lg">
                  {user.email}
                </td>
                <td className="text-lg py-1 m-2 px-2  border border-gray-100 rounded-lg">
                  {user.company?.name}
                </td>
                {showMore && (
                  <>
                    <td className="text-lg py-1 m-2 px-2  border border-gray-100 rounded-lg">
                      {user?.address?.city}
                    </td>
                    <td className="text-lg py-1 m-2 px-2  border border-gray-100 rounded-lg">
                      {user.phone}
                    </td>
                  </>
                )}
                <td className="text-lg py-1 m-2 px-2  border border-gray-100 rounded-lg">
                  <button
                    className="border border-gray-50 rounded-2xl p-2 m-2"
                    onClick={(e) => {
                      setshowMore(!showMore);
                    }}
                  >
                    {showMore ? "Hide More Info" : "More Info"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
