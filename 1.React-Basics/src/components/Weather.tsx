import { useState, useEffect } from "react";

type Weather = {
  name: string;
  main: { temp: number };
  weather: { main: string }[];
};

function WeatherApp() {
  const [city, setCity] = useState("Karachi");
  const [weather, setWeather] = useState<Weather | null>(null);
  const API_KEY = "77bcb555224ed2a36e053665c9da7c89"; // replace safely

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    );
    const data = await res.json();
    setWeather(data);
  };


  return (
    <div className="container">
      {weather && (
        <>
          <h2>{weather.name}</h2>
         
          <h3>{(weather.main.temp - 273.15).toFixed(0)}°C</h3>
          <h4>{weather.weather[0].main}</h4>
        </>
      )}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchWeather();
        }}
      >
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
        />
        <button type="submit">Get</button>
      </form>
    </div>
  );
}

export default WeatherApp;