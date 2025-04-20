import { useState } from "react";
import Navlist from "./Navlist";
const Hamburger = () => {
  let [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!menu);
  };
  return (
    <>
      <button
        className={`hamburger ${menu ? "is-active" : ""}`}
        onClick={handleClick}
      >
        <div className="bar"></div>
      </button>
      <nav className={`mobile-nav ${menu ? "is-active" : ""}`}>
        <Navlist/>
      </nav>
    </>
  );
};

export default Hamburger;
