import { FaTemperatureHigh } from "react-icons/fa";
import Button from "./Button";
import ClimateRow from "./ClimateRow";
import { WiHumidity, WiStrongWind } from "react-icons/wi";
import { TbCloudPause } from "react-icons/tb";

export default function WeatherCondition({ weather }) {
    const { climate, maxTemp, minTemp, humidity, windSpeed, cloudPercent } = weather;
  return (
    <div className="flex items-center flex-col gap-4">
      <div className="self-end">
        {" "}
        <Button label="Favorite" />
      </div>
      <div>
        <h1 className="text-2xl uppercase font-semibold">
          The Climate is {`${climate}`}
        </h1>
        <ul className="flex flex-col gap-2 space-y-4 mt-8">
          <li>
            <ClimateRow
              label="MaxTemp"
              value={maxTemp}
              unit ={'°C'}
              iconComponents={<FaTemperatureHigh />}
            />
          </li>{" "}
          <li>
            <ClimateRow
              label="MinTemp"
              value={minTemp}
              unit ={'°C'}
              iconComponents={<FaTemperatureHigh  />}
            />
          </li>
          <li>
            <ClimateRow
              label="Humidity"
              value={humidity}
              unit ={'%'}
              iconComponents={<WiHumidity size={40} />}
            />
          </li>
          <li>
            <ClimateRow
              label="WindSpeed"
              value={windSpeed}
              unit ={'km/h'}
              iconComponents={<WiStrongWind size={40} />}
            />
          </li>
          <li>
            <ClimateRow
              label="cloudPercent"
              value={cloudPercent}
              unit ={'%'}
              iconComponents={<TbCloudPause size={40} />}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
