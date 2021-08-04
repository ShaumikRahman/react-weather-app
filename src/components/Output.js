import { useState, useEffect } from "react";

const Output = ({ searchQuery }) => {
  const [query, setQuery] = useState('');
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [fetchList, setFetchList] = useState([]);
  const [error, setError] = useState(false);

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
    if (searchQuery.length > 0) {
      console.log("search query recieved");
      setQuery(searchQuery);
      console.log(searchQuery);
    } else {
      console.log("empty"); 
      setQuery("");
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
            if (data.cod !== "404") {
              console.log(data);
              setError(false);
              setCity(data.city.name);
              setCountry(data.city.country);
              setFetchList(data.list);
            } else {
              setError(true);
              setCity("");
              setCountry("");
              setFetchList([]);
            }
          });
      }
    } else {
      console.log("no search executed");
    }
  }, [query]);

  return (
    <div className="app__output">
      {error && (
        <div className="errorContainer">
          <h1>Invalid input</h1>
        </div>
      )}
      {city && (
        <div className="outputContainer">
          <div className="outputContainer__title">
            <h1>{city + ", " + country}</h1>
          </div>
          <div className="outputContainer__list">
            {fetchList &&
              fetchList.map((item) => {
                return (
                  <div key={item.dt} className="weatherItem">
                    <p className="weatherItem__text">
                      {" "}
                      {new Date(item.dt * 1000).getDate() +
                        " / " +
                        months[new Date(item.dt * 1000).getMonth()] +
                        " / " +
                        (new Date(item.dt * 1000).getHours() + 1) +
                        ":00 " +
                        Math.round(item.main.temp) +
                        "°C " +
                        item.weather[0].description}{" "}
                    </p>
                    <div
                      className="weatherItem__img"
                      style={{
                        backgroundImage: `url('http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png')`,
                      }}
                    ></div>
                  </div>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Output;
