import { createContext, useEffect, useState } from "react";

export const UsersContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/posts/tags");
      const jsonData = await response.json();
      if (jsonData?.length > 0) {
        setData(jsonData);
      }
    } catch (error) {
      console.log("ERROR ..............", error);
    }
  };

  //   useEffect(() => {
  //     getData();
  //   }, []);

  const value = {
    data,
    getData,
  };

  return (
    <UsersContext.Provider value={value}> {children} </UsersContext.Provider>
  );
};
