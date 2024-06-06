import { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCloudDoneSharp } from "react-icons/io5";
import { LocationContext } from "../context";
import { getLocation } from "../data/location";
import { useDebounce } from "../hooks";


export default function Search() {
    const [search, setSearch] = useState('')
    const {setSelectedLocation} = useContext(LocationContext)
    
    const  doSearch = useDebounce(async (search) => {
      const searchResult = await getLocation(search)
      const {display_name, lat, lon} = searchResult
      setSelectedLocation({location:display_name, latitude:lat, longitude:lon})
    }, 1000)
    const handleSearch = (e) => {
        setSearch(e.target.value)
        doSearch(e.target.value)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const searchResult = await getLocation(search)
        const {display_name, lat, lon} = searchResult
        setSelectedLocation({location:display_name, latitude:lat, longitude:lon})
        setSearch('')
    }
  return (
    <div className="relative">
      <form action="" >
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 rounded-full"
          value={search}
          onChange={handleSearch}
        />
        <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2">
          <CiSearch className="text-xl" />
        </button>
      </form>
    </div>
  );
}
