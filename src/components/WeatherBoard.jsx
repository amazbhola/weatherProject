import { useContext } from "react";
import { WeatherContext } from "../context";
import WeatherCondition from "./WeatherCondition";
import WeatherHeadLine from "./WeatherHeadLine";

export default function WeatherBoard({weather}) {

    return (
        <div className="col-span-1 grid md:grid-cols-2 gap-4 bg-gray-200 w-2/3 rounded shadow-2xl p-10 bg-opacity-30">
            <WeatherHeadLine weather={weather} />
            <WeatherCondition weather={weather}/>
        </div>
    );
}