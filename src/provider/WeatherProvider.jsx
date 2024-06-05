import { WeatherContext} from "../context";
import { useWeather } from "../hooks";
export default function WeatherProvider({children}) {
    const {weather, Loading, Error} = useWeather();
    return (
        <WeatherContext.Provider value={{ weather, Loading, Error}}>{children}</WeatherContext.Provider>
         
    );
}