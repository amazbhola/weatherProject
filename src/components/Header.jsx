import FavoriteLocation from "./FavoriteLocation";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
    return (
        <div className="flex justify-between md:w-full h-50 gap-2  items-center py-4">
            <Logo/>
            <div className="flex gap-4 items-center">
                <Search/>
                <FavoriteLocation/>
            </div>   
        </div>
    );
}