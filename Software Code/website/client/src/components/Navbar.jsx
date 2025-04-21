import Hamburger from "./Hamburger";
import Navlist from "./Navlist";
import { Link } from "react-router-dom"
const Navbar = ({brandColor}) => {
  return (
    <div className="pt-8 font-roboto flex justify-between items-center text-white">
      <div className={`cursor-pointer text-nowrap ${brandColor} text-2xl s:text-3xl sm:text-4xl`}>
        <Link to="/">Home Fusion</Link>
      </div>
      <div className="flex gap-x-6 md:gap-x-10 lg:gap-x-20 items-center">
        <div className="block md:hidden">
          <Hamburger/>
        </div>
        <div className="hidden md:flex">
          <Navlist/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
