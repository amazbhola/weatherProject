import { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCloudDoneSharp } from "react-icons/io5";
import { LocationContext } from "../context";
import { getLocation } from "../data/location";


export default function Search() {
    const [search, setSearch] = useState('')
    const {setSelectedLocation} = useContext(LocationContext)
    
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const searchResult = await getLocation(search)
        const {display_name, lat, lon} = searchResult
        setSelectedLocation({location:display_name, latitude:lat, longitude:lon})
        setSearch('')
    }
  return (
    <div className="relative">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 rounded-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2">
          <CiSearch className="text-xl" />
        </button>
      </form>
    </div>
  );
}
