import { useState } from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/Appliances/total_room_icon/index";
import { icon } from "../constants/Rooms";
export default function Total_room_button({ details, type }) {
  let [isOff, setIsOff] = useState(details.state);
  const handleClick = () => {
    setIsOff(!isOff);
  };
  return (
    <>
      <div className={`bg-white ${details.Appliances?"pl-6 400b:pl-10":"pl-6 items-center"} pr-10 py-8 rounded-4xl max-w-fit h-fit flex flex-col gap-y-6`}>
        <div>
          <p className="font-roboto font-bold text-base">
            {details.name ? details.name : details.roomName}
          </p>
          <p className="font-roboto text-[rgba(0,0,0,0.6)] text-[10px]">
            Configured
          </p>
        </div>
        <div>
          {details.Appliances ? (
            <div className="grid grid-cols-2 400b:grid-cols-3 gap-x-4 gap-y-3 items-center">
              {Object.entries(details.Appliances).map(([type, items]) => (
                <div
                  key={type}
                  className={"flex gap-x-2 px-4 pt-4 rounded flex-col items-center"}
                  style={{ background: icon(type).bg }}
                >
                  <img src={icon(type).icon2} alt={type} className="h-6 w-6" />
                  <p className="font-roboto text-[8px] text-[rgba(0,0,0,0.53)] text-nowrap">
                    {items.length} {type}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-amber-200 w-fit px-4 py-3 rounded-xl">
              <img src={details.icon} alt="door" className="h-8" />
            </div>
          )}
        </div>
        <div className="flex gap-x-4">
          <div
            className={`rounded-xl transition-colors ease-in-out duration-300 w-[100px] ${
              isOff ? "bg-[rgba(0,0,0,0.35)]" : "bg-[#FF9238]"
            }`}
            onClick={handleClick}
          >
            <div
              className={`h-8 bg-[#D9D9D9] w-[50px] transition-all duration-500 ease-in-out ${
                isOff
                  ? "rounded-l-xl translate-x-0"
                  : "rounded-r-xl translate-x-12.5"
              }`}
            ></div>
          </div>
          {
            details.roomName && <Link  to={`/${details.roomName.replace(/\s+/g, '').toLowerCase()}`} key={details.roomName} onClick={() =>window.scrollTo({ top: 0, behavior: 'smooth' })}><img src={arrow} alt="" className="h-8"/></Link>
          }
        </div>
      </div>
    </>
  );
}
