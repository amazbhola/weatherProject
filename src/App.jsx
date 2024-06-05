import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import WeatherBoard from "./components/WeatherBoard";
import { FavoriteProvider, WeatherProvider, LocationProvider } from "./provider";

function App() {
  return (
    <div >
      <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
        <Main/>
        </FavoriteProvider>
      </WeatherProvider>
      </LocationProvider>
    </div>
  );
}

export default App;
