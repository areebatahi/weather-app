import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import "@fontsource/poppins";

const Weather = () => {
  const inputRef = useRef(null);
  const [weatherData, setWeatherData] = useState(null);
  const [background, setBackground] = useState(
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  );

  const getWeather = async () => {
    const cityName = inputRef.current.value;
    if (!cityName) {
      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "Please enter a city name!",
      });
      return;
    }

    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8ec477bf0b25bcd1dae01a2b3e7e75bd&units=metric`
      );
      setWeatherData(res.data);
      updateBackground(res.data.weather[0].main.toLowerCase());
    } catch (e) {
      console.error(e);
      Swal.fire({
        icon: "error",
        title: "City Not Found",
        text: "Please check the city name and try again.",
      });
    }
  };

  const updateBackground = (condition) => {
    let url = "https://images.unsplash.com/photo-1506744038136-46273834b3fb";
    if (condition.includes("cloud"))
      url = "https://images.unsplash.com/photo-1504457046782-d9e2aa1e510c";
    else if (condition.includes("rain"))
      url = "https://images.unsplash.com/photo-1501594907352-04cda38ebc29";
    else if (condition.includes("clear"))
      url = "https://images.unsplash.com/photo-1594007654729-407eedc4be2e";
    else if (condition.includes("snow"))
      url = "https://images.unsplash.com/photo-1608889175126-f32fcf7b11b9";
    else if (condition.includes("mist") || condition.includes("fog"))
      url = "https://images.unsplash.com/photo-1532274402917-5aadf881bdf4";
    setBackground(url);
  };

  const getIcon = (label) => {
    const icons = {
      "Feels Like": "https://cdn-icons-png.flaticon.com/512/869/869869.png",
      Humidity: "https://cdn-icons-png.flaticon.com/512/728/728093.png",
      Wind: "https://cdn-icons-png.flaticon.com/512/553/553416.png",
      Pressure: "https://cdn-icons-png.flaticon.com/512/483/483356.png",
      Condition: "https://cdn-icons-png.flaticon.com/512/1163/1163624.png",
    };
    return icons[label] || icons["Condition"];
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center transition-all duration-700 font-[Poppins]"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-black/60 backdrop-blur-md min-h-screen flex flex-col items-center justify-center px-4 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl w-full bg-white/10 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20"
        >
          <h1 className="text-4xl font-bold text-center mb-6">🌦️ Live Weather App</h1>

          <div className="flex gap-3 mb-6">
            <input
              ref={inputRef}
              type="text"
              placeholder="Search city..."
              className="flex-1 px-4 py-2 rounded-md text-black placeholder-gray-600 bg-white/90"
            />
            <button
              onClick={getWeather}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md font-bold"
            >
              Search
            </button>
          </div>

          {weatherData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h2 className="text-3xl font-semibold">
                  {weatherData.name}, {weatherData.sys.country}
                </h2>
                <p className="text-6xl font-extrabold mt-2">
                  {Math.round(weatherData.main.temp)}°C
                </p>
                <p className="capitalize text-sm text-gray-200 mt-1">
                  {weatherData.weather[0].description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <WeatherCard
                  label="Condition"
                  value={weatherData.weather[0].main}
                  icon={getIcon("Condition")}
                />
                <WeatherCard
                  label="Feels Like"
                  value={`${Math.round(weatherData.main.feels_like)}°C`}
                  icon={getIcon("Feels Like")}
                />
                <WeatherCard
                  label="Humidity"
                  value={`${weatherData.main.humidity}%`}
                  icon={getIcon("Humidity")}
                />
                <WeatherCard
                  label="Wind"
                  value={`${weatherData.wind.speed} m/s`}
                  icon={getIcon("Wind")}
                />
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

const WeatherCard = ({ icon, label, value }) => (
  <div className="flex items-center gap-3 bg-white/20 p-4 rounded-xl">
    <img src={icon} alt={label} className="w-12 h-12 object-contain" />
    <div>
      <p className="text-sm text-white/80">{label}</p>
      <p className="text-xl font-bold text-white">{value}</p>
    </div>
  </div>
);

export default Weather;
