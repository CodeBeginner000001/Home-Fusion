import { navlist } from "../contants/text";
const Navlist = () => {
  return (
    <div className="text-lg list-none items-center flex flex-col gap-y-10 md:flex-row md:gap-x-10 lg:gap-x-20">
      {navlist.map((item) => (
        <a
          href="#"
          key={item}
          className="cursor-pointer underlineAnimation text-wrap"
        >
          {item}
        </a>
      ))}
    </div>
  );
};

export default Navlist;
