import { useState, useEffect } from "react";
import arrow from "../img/arrow.png";

const OutputWeather = ({ searchQuery }) => {
  const [query, setQuery] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [dt, setDt] = useState(0);
  const [temp, setTemp] = useState(0);
  const [icon, setIcon] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState({});

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
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    if (searchQuery.length > 0) {
      setQuery(searchQuery);
    } else {
      setQuery("");
      setCity("");
    }
  }, [searchQuery]);

  useEffect(() => {
    if (query) {
      console.log("fetching data");
      let queryParts = {
        base: "https://api.openweathermap.org/data/2.5/weather?q=",
        units: "metric",
        key: "6c8756a49b801bc327f94d283e99889d",
      };  

      if (query.length > 0) {
        const weather =
          queryParts.base +
          query +
          "&units=" +
          queryParts.units +
          "&appid=" +
          queryParts.key;

        fetch(weather)
          .then((res) => res.json())
          .then((data) => {
            if (data.cod !== "404") {
              setError(false);
              console.log(data);
              setCity(data.name);
              setCountry(data.sys.country);
              setDt(data.dt);
              setTemp(data.main.temp);
              setIcon(data.weather[0].icon);
              setMin(data.main.temp_min);
              setMax(data.main.temp_max);
              setHumidity(data.main.humidity);
              setWind({
                speed: data.wind.speed,
                deg: data.wind.deg,
              });
            } else {
              setError(true);
              console.log(query);
              setCity("");
              setCountry("");
              setDt(0);
              setTemp("");
              setIcon("");
              setMin(0);
              setMax(0);
              setHumidity(0);
              setWind({
                speed: 0,
                deg: 0,
              });
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
          <div className="outputContainer__header">
            <p>{days[new Date(dt * 1000).getDay()] +
              " " +
              new Date(dt * 1000).getDate() +
              " " +
              months[new Date(dt * 1000).getMonth()] +
              " " +
              new Date(dt * 1000).getHours() +
              ":00"}</p>
          </div>
          <div className="outputContainer__main">
            <h1 className="temp">{`${Math.round(temp)}°C`}</h1>
            <div
              className="icon"
              style={{
                backgroundImage: `url('http://openweathermap.org/img/wn/${icon}@4x.png')`,
              }}
            ></div>
          </div>
          <div className="outputContainer__extra">
            <div className="minmax">
              <p>Min/Max</p>
              <p>{Math.round(min) + "°C | " + Math.round(max) + "°C"}</p>
            </div>
            <div className="humidity">
              <p>Humidity</p>
            <p>{`${humidity}%`}</p>
            </div>
            <div className="wind">
              <p>Wind</p>
              <div>
              <img src={arrow} alt="arrow" className="arrow" style={{transform: `rotate(${wind.deg}deg)`}}/>
              <p>{`${wind.speed} m/s`}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OutputWeather;
