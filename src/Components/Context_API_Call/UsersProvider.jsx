import { createContext, useState } from "react";

import useFetch from "../Hooks/CustomHooks/useFetch";

export const UsersContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const {
    GET: getUserData,
    data: getUserData_data,
    loading: getUserData_loading,
    error: getUserData_error,
  } = useFetch("posts/tags");

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

  console.log(
    "data:",
    getUserData_data,
    "loading:",
    getUserData_loading,
    " error:",
    getUserData_error
  );

  //   useEffect(() => {
  //     getData();
  //   }, []);

  const value = {
    getUserData_data,
    getData,
    getUserData,
  };

  return (
    <UsersContext.Provider value={value}> {children} </UsersContext.Provider>
  );
};
