import ClearSky from "../assets/Background/clear-sky.jpg";
import Cloudy from "../assets/Background/few-clouds.jpg";
import Rainy from "../assets/Background/rainy-day.jpg";
import Snowy from "../assets/Background/snow.jpg";
import Thunderstorm from "../assets/Background/thunderstorm.jpg";
import SawerRain from "../assets/Background/shower-rain.jpg";
import brokenClouds from "../assets/Background/scattered-clouds.jpg";
import Haze from "../assets/Background/haze.jpg";
import overcastClouds from "../assets/Background/overcast clouds.webp";
import scatteredClouds from "../assets/Background/scattered-clouds.avif";
export const getBackground = (climate) => {
  switch (climate) {
    case "clear":
      return ClearSky;
    case "few clouds":
      return Cloudy;
    case "rain":
      return Rainy;
    case "snow":
      return Snowy;
    case "thunderstorm":
      return Thunderstorm;
    case "drizzle":
      return SawerRain;
    case "mist":
      return brokenClouds;
    case "haze":
      return Haze;
    case "overcast clouds":
      return overcastClouds;
    case "broken clouds":
      return brokenClouds;
    case "scattered clouds":
      return scatteredClouds;
    default:
      return ClearSky;
  }
};
