import { FavoriteContext } from "../context";

import { useLocalStorage } from "../hooks";
export default function FavoriteProvider({ children }) {
  const [favorites, setFavorite] = useLocalStorage("favorites", []);

  const addToFavorite = (latitude, longitude, location) => {
    setFavorite([...favorites, { latitude, longitude, location }]);
  };
  const removeFromFavorite = (location) => {
    setFavorite(
      favorites.filter((favorite) => favorite.location !== location)
    );
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorite, removeFromFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}
