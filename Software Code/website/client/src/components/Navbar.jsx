import Hamburger from "./hamburger";
import Navlist from "./Navlist";
const Navbar = () => {
  return (
    <div className="pt-8 font-roboto flex justify-between items-center text-white">
      <div className="cursor-pointer text-nowrap bg-gradient-to-b from-[#FF9238] from-20% to-white bg-clip-text text-transparent text-2xl s:text-3xl sm:text-4xl">
        HOME FUSION
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
