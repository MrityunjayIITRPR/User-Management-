import React, { useEffect, useState } from "react";

const User = ({ usersList }) => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [showMore, setshowMore] = useState(false);
  const [searchText, setsearchText] = useState("");
  const [filterUserList, setfilterUserList] = useState([]);
  useEffect(() => {
    setfilterUserList(usersList);
  }, []);
  const handleClick = (event) => {
    setDarkTheme(!darkTheme);
  };
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
    <div className="w-fit mx-auto my-[5%]">
      <button
        className="mx-4 my-2 p-2 bg-slate-400 rounded-lg text-black text-2xl"
        onClick={handleClick}
      >
        Toggle Theme
      </button>
      <input
        type="text"
        value={searchText}
        onChange={handleSearch}
        placeholder="search"
        className="py-3 px-2 m-4 border border-black"
      />
      <div>
        <table
          className={`  ${
            darkTheme ? "text-white bg-black" : "text-black bg-slate-300"
          }`}
        >
          <tr className="w-[25px]">
            <th className="text-xl m-2 p-2 text-center">ID</th>
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
          {filterUserList.map((user) => (
            <tr className="py-10 my-2">
              <td className="text-lg py-2 m-2 px-2  border border-blue-200 rounded-lg">
                {user.id}
              </td>
              <td className="text-lg py-2 m-2 px-2  border border-blue-200 rounded-lg">
                {user.name}
              </td>
              <td className="text-lg py-2 m-2 px-2  border border-blue-200 rounded-lg">
                {user.email}
              </td>
              <td className="text-lg py-2 m-2 px-2  border border-blue-200 rounded-lg">
                {user.company?.name}
              </td>
              {showMore && (
                <>
                  <td className="text-lg py-2 m-2 px-2  border border-blue-200 rounded-lg">
                    {user?.address?.city}
                  </td>
                  <td className="text-lg py-2 m-2 px-2  border border-blue-200 rounded-lg">
                    {user.phone}
                  </td>
                </>
              )}
              <button
                className="border border-gray-50 rounded-2xl p-2 m-2"
                onClick={(e) => {
                  setshowMore(!showMore);
                }}
              >
                {showMore ? "Hide More Info" : "More Info"}
              </button>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default User;
