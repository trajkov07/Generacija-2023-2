import { useState } from "react";
import { api } from "../constants/ApiConstants";
import "./../css/Weather.css";

export const LocalWeather = () => {
  const [weather, setWeather] = useState(undefined);
  const [loading, setLoading] = useState(false);

  function getWeatherInfo(city) {
    console.log(city);
    setLoading(true);
    fetch(`${api.base}/forecast?q=${city}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setWeather(res);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
        setLoading(false);
      });
  }

  return (
    <div className="local-weather">
      <br />
      <div className="header-buttons">
        <button onClick={() => getWeatherInfo("Skopje")} className="cityButton">
          Skopje
        </button>
        <button onClick={() => getWeatherInfo("Tetovo")} className="cityButton">
          Tetovo
        </button>
        <button onClick={() => getWeatherInfo("Veles")} className="cityButton">
          Veles
        </button>
        <button onClick={() => getWeatherInfo("Debar")} className="cityButton">
          Debar
        </button>
        <button
          onClick={() => getWeatherInfo("Strumica")}
          className="cityButton"
        >
          Strumica
        </button>
        <button
          onClick={() => getWeatherInfo("Gevgelija")}
          className="cityButton"
        >
          Gevgelija
        </button>
        <button
          onClick={() => getWeatherInfo("Delcevo")}
          className="cityButton"
        >
          Delcevo
        </button>
      </div>
      <div className="local-container">
        {weather &&
          loading === false &&
          weather.list.map((weatherList, i) => {
            return (
              <div key={i}>
                <div className="location-box">
                  <div className="location">
                    {weather.city.name}, {weather.city.country}
                  </div>
                  <div className="date">{weatherList.dt_txt}</div>
                  <div className="weather-box">
                    <div className="temp">
                      {Math.round(weatherList.main.temp)}°c
                    </div>
                    <div className="weather">{weatherList.weather[0].main}</div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      {loading && <div className="loader">Loading</div>}
    </div>

    //PAUZA DO 21:30
  );
};
