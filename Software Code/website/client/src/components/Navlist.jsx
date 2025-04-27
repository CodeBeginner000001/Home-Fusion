import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { navlist } from "../../src/contants/text";

const Navlist = ({ handleClick,textColor }) => {
  return (
    <div className={`text-lg list-none items-center flex flex-col gap-y-10 md:flex-row md:gap-x-10 lg:gap-x-20 ${textColor}`}>
      {navlist.map((item) =>
        item.type === "scroll" ? (
          <ScrollLink
            key={item.label}
            to={item.label.toLowerCase().replace(/\s+/g, "")}
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer underlineAnimation text-wrap"
            onClick={handleClick}
          >
            {item.label}
          </ScrollLink>
        ) : (
          <RouterLink
            key={item.label}
            to={item.path}
            className="cursor-pointer underlineAnimation text-wrap"
            onClick={handleClick}
          >
            {item.label}
          </RouterLink>
        )
      )}
    </div>
  );
};

export default Navlist;
