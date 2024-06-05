import { useContext, useEffect, useState } from "react";
import Header from "./Header";
import WeatherBoard from "./WeatherBoard";
import { WeatherContext } from "../context";
import { getBackground } from "../utils/background";



export default function Main() {
  const { weather, Loading, Error } = useContext(WeatherContext);
  const [background, setBackground] = useState(null);
  useEffect(() => {
    const background = getBackground(weather?.climate);
    setBackground(background);
  }, [weather.climate]);  
  
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize:"cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100vw",
        height: "100vh",
        opacity: "0.8",
      }}
    >
      <div className="container mx-auto flex flex-col items-center">
        <Header />

        {Error && <div>{Error}</div>}
        {Loading.state ? (
          <div>{Loading.message}</div>
        ) : (
          weather && <WeatherBoard weather={weather} />
        )}
      </div>
    </div>
  );
}
