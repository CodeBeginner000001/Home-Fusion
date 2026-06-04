import { useState } from "react";
import Navlist from "./Navlist";
const Hamburger = () => {
  let [menu, setMenu] = useState(false);
  const handleClick = () => {
    if(menu) {
      setTimeout(()=>{setMenu(!menu)},100)
    }else{
      setMenu(!menu);
    }
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
        <Navlist handleClick={handleClick} textColor="text-white"/>
      </nav>
    </>
  );
};

export default Hamburger;
