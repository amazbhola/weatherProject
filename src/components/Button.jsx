import { useContext, useEffect, useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { FavoriteContext, WeatherContext} from "../context";
export default function Button({ label }) {
  const [ isFavorite, setIsFavorite ] = useState(false);
  
  const { favorites, addToFavorite, removeFromFavorite } = useContext(FavoriteContext)
  const {weather} = useContext(WeatherContext)
  const {latitude, longitude,location} = weather
  useEffect(() => {
    const found = favorites?.find(
      (fav) => fav.location === location
    )
    setIsFavorite(found)
  },[])
  const handleFavorite = () => {
    setIsFavorite(!isFavorite)
    if (!isFavorite) {
      addToFavorite(latitude, longitude, location)
    } else {
      removeFromFavorite(location)
    }

  }
  return (
    <>
      <button
       className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-900"
       onClick={handleFavorite}
       >
        <div className="flex items-center gap-2">
         {isFavorite ? <GrFavorite color="red" /> : <GrFavorite  />}
          {label}
        </div>
      </button>
    </>
  );
}
