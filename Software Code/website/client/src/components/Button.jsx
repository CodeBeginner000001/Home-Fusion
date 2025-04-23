import { useState } from "react";
import { ShutDown, BlackShutDown } from "../../src/assets/Appliances/index";
import {icon} from "../contants/Rooms"
export default function Button({name,state,type,roomName}) {
  let [isOFF, setIsOFF] = useState(state);
  return (
    <div className={`inline-block w-fit rounded-3xl delay-100 ${!isOFF ? roomName=="smartlocks"?"bg-[rgb(37,69,194)]":"bg-[rgba(255,129,26,0.85)]":"black30"}`}>
      <div className={`w-fit flex flex-col max-500b:p-6 p-3 rounded-3xl pb-12 600b:pb-24 z-0 delay-100 overflow-hidden backdrop-blur-md shadow-xl border border-white/10 ${!isOFF ? roomName=="smartlocks"?"bg-[rgb(37,69,194)]":"bg-[rgba(255,129,26,0.85)]":"black30"}`}>
        <div className="flex flex-col 500b:flex-row gap-10 600b:gap-22 items-center 500b:items-start mb-6 500b:mb-12 z-20">
          <img src={icon(type)} alt="tv" className="h-10 mt-2"/>
          <div
            className={`p-1 max-500b:w-20 500b:h-22 rounded-4xl flex items-start justify-center relative cursor-pointer delay-100 ${!isOFF ? roomName=="smartlocks"?"bg-[rgba(0,0,0,0.5)]":"bg-[#FFB11A]":"bg-[rgba(0,0,0,0.5)]"}`}
            onClick={() => setIsOFF(!isOFF)}
          >
            <div
              className={`rounded-4xl p-2 transition-transform duration-500 ease-in-out ${
                isOFF ? "-translate-x-4.5 500b:translate-y-9.5 500b:translate-x-0 bg-[rgba(128,128,128,0.34)]" : "bg-black translate-x-4.5 500b:translate-y-0 500b:-translate-x-0"
              }`}
            >
              <img src={isOFF ? BlackShutDown : ShutDown} alt="shutdown" className="w-4 500b:w-6" />
            </div>
          </div>
        </div>
        <h3 className="text-white text-nowrap 500b:self-center 400b:text-[14px] 500b:text-lg 600b:text-[24px] font-poppins font-semibold">{name}</h3>
      </div>
    </div>
  );
}
