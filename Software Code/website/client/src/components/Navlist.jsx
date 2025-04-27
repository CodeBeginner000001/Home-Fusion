import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll"; // you can remove this if not used anymore
import { Link as RouterLink } from "react-router-dom";
import { navlist } from "../../src/contants/text";


const Navlist = ({ handleClick, textColor }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollOrNavigate = (targetId) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { targetId } });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const yOffset = -80; // same as your offset
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    if (handleClick) handleClick();
  };

  return (
    <div className={`text-lg list-none items-center flex flex-col gap-y-10 md:flex-row md:gap-x-10 lg:gap-x-20 ${textColor}`}>
      {navlist.map((item) =>
        item.type === "scroll" ? (
          <span
            key={item.label}
            className="cursor-pointer underlineAnimation text-wrap"
            onClick={() => handleScrollOrNavigate(item.label.toLowerCase().replace(/\s+/g, ""))}
          >
            {item.label}
          </span>
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
