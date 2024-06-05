import { useContext, useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { FavoriteContext, LocationContext } from "../context";


export default function FavoriteLocation() {
  const { favorites } = useContext(FavoriteContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const {setSelectedLocation} = useContext(LocationContext)
  return (
    <div>
      <nav className="relative">
        <div className="flex items-center gap-2 text-lg">
          <span>
           {favorites.length > 0 ? <GrFavorite color="red" /> : <GrFavorite />}
          </span>
          <button onClick={() => setIsFavorite(!isFavorite)} >Favorite</button>
        </div>

        <ul className="absolute top-7 left-0 w-48">
          {isFavorite &&
            favorites.map((item) => (
              <li
                className="hover:text-green-600 p-2 hover:bg-gray-200"
                key={item.location}
              >
                <button className="cursor-pointer" onClick={() => setSelectedLocation(item)}>
                  {item.location}
                </button>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
