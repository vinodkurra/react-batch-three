import React, { useEffect, useState } from "react";

const ApiCall = () => {
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>API RESPONSE LIST</h2>
      <div>
        {data.map((user, index) => {
          return <div key={`users-${index}`}>{user.name}</div>;
        })}
      </div>
    </div>
  );
};

export default ApiCall;
