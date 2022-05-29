import React, { useEffect, useState } from "react";

export const ContohApi = () => {
  const [Data, setData] = useState([]);

  useEffect(() => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "https://jsonplaceholder.typicode.com/todos",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        setData(response.Data);
      })
      .catch(function (error) {
        console.log(error);
      });
      
  }, []);

  const Maping = (data) => {
    let dataValue = data
    return dataValue?.map((value) => {
      return console.log(value);
    });
  };

  return (
    <div>
      {Maping(Data)}
    </div>
  );
};

export default ContohApi;
