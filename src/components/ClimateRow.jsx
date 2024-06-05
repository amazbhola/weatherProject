import { FaTemperatureHigh } from "react-icons/fa";

export default function ClimateRow({ label, value, iconComponents, unit }) {
  return (
    <div className="flex items-center gap-2 justify-between text-xl">
      <h4>{label} : </h4>
      <div className="flex items-center gap-2">
        <span>{Math.round(value)} {unit}</span>
        <span>{iconComponents}</span>
      </div>
    </div>
  );
}
