import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context";

const useWeather = () => {
  const {selectedLocation} = useContext(LocationContext)
  
  const [weather, setWeather] = useState({
    location: "",
    temperature: "",
    maxTemp: "",
    minTemp: "",
    humidity: "",
    cloudPercent: "",
    windSpeed: "",
    latitude: "",
    longitude: "",
    time: "",
    climate: "",
    icon: "",
  });
  const [Loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [Error, setError] = useState(null);
  const fetchWeatherData = async (lat, lon) => {
    try {
      setLoading({
        ...Loading,
        state: true,
        message: "Weather Data Loading...",
      });
      
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      
      if (!response.ok) {
        const errorMessage = `Fetching Weather Data Failed: ${response.statusText}`;
        throw new Error(errorMessage);
      }

      const data = await response.json();
      
      setWeather({
        ...weather,
        location: data.name,
        temperature: data.main.temp,
        maxTemp: data.main.temp_max,
        minTemp: data.main.temp_min,
        humidity: data.main.humidity,
        cloudPercent: data.clouds.all,
        windSpeed: data.wind.speed,
        latitude: data.coord.lat,
        longitude: data.coord.lon,
        time: data.dt,
        climate: data.weather[0].description,
        icon: data.weather[0].icon,
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading({ ...Loading, state: false, message: "" });
    }
  };
  useEffect(() => {
    setLoading({
      ...Loading,
      state: true,
      message: "Finding your location...",
    });
    if(selectedLocation.latitude === 0 && selectedLocation.longitude === 0) {
      
      navigator.geolocation.getCurrentPosition((position) => {
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
      });
    }else{
      fetchWeatherData(selectedLocation.latitude, selectedLocation.longitude)
  }
  }, [selectedLocation]);
  return { weather, Loading, Error };
};

export default useWeather;
