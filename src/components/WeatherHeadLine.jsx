import { CiCloud, CiCloudDrizzle, CiLocationOn } from "react-icons/ci";
import { getFormattedDate } from "../utils/date-utils";


export default function WeatherHeadLine({weather}) {
    
    return (
        <div className="flex flex-col gap-4 justify-center space-y-10" >
            <div>
                {weather.icon && <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="Weather Icon" />}
            </div>
            {/* <CiCloudDrizzle /> */}
            <h1 className="text-3xl font-semibold opacity-90">{weather.temperature}
                <span className="text-3xl font-semibold opacity-90">°C</span></h1>
           <div className="flex items-center gap-2">
           <span><CiLocationOn className="text-3xl" /></span>
           <h2 className="text-3xl font-semibold opacity-90 ">{weather.location}</h2>
           </div>
            <p> <span>{getFormattedDate(weather.time, 'date')}</span> <span>{getFormattedDate(weather.time, 'time')}
            </span></p>
        </div>
    );
}