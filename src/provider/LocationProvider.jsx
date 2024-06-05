import { useState } from "react";
import { LocationContext } from "../context";

export default function LocationProvider({children}) {
    const [selectedLocation, setSelectedLocation] = useState({
        latitude: 0,
        longitude: 0,
        location: '',
    });
    return (
        <LocationContext.Provider value={{selectedLocation, setSelectedLocation}}>
            {children}
        </LocationContext.Provider>
    );
}