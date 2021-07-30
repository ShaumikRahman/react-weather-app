import { useState, useEffect, useRef } from "react";

const Output = ({ searchQuery }) => {
  const [query, setQuery] = useState(searchQuery);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [fetchList, setFetchList] = useState([]);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    console.log("search query recieved");
    if (searchQuery.length > 0) {
      setQuery(searchQuery);
    } else {
      console.log("empty");
      setCity("");
      setCountry("");
      setFetchList([]);
    }
  }, [searchQuery]);

  useEffect(() => {
    if (query) {
      console.log("fetching data");
      let queryParts = {
        base: "https://api.openweathermap.org/data/2.5/forecast?q=",
        units: "metric",
        key: "6c8756a49b801bc327f94d283e99889d",
      };

      if (query.length > 0) {
        const forecast =
          queryParts.base +
          query +
          "&units=" +
          queryParts.units +
          "&appid=" +
          queryParts.key;

        fetch(forecast)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setCity(data.city.name);
            setCountry(data.city.country);
            setFetchList(data.list);
          });
      }
    } else {
      console.log("no search executed");
    }
  }, [query]);

  return (
    <div className="test">
      {city && (
        <div>
          <div>
            <h1>{city + ", " + country}</h1>
          </div>
          <div>
            {fetchList.length &&
              fetchList.map((item) => {
                return (
                  <p key={item.dt}>
                    {" "}
                    {new Date(item.dt * 1000).getDate() +
                      " / " +
                      months[new Date(item.dt * 1000).getMonth()] +
                      " at " +
                      (new Date(item.dt * 1000).getHours() + 1) +
                      ":00 " +
                      Math.round(item.main.temp) +
                      "°C " +
                      item.weather[0].description}
                  </p>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Output;
