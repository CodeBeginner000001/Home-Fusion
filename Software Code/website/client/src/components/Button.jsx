import { useState } from "react";
import { ShutDown, BlackShutDown } from "../../src/assets/Appliances/index";
import {icon} from "../contants/Rooms"
export default function Button({name,state,type,roomName}) {
  let [isOFF, setIsOFF] = useState(state);
  return (
    <div className={`inline-block w-fit rounded-3xl delay-100 ${!isOFF ? roomName=="smartlocks"?"bg-[rgb(37,69,194)]":"bg-[rgba(255,129,26,0.85)]":"black30"}`}>
      <div className={`w-fit flex flex-col p-3 rounded-3xl pb-12 600b:pb-24 pl-3 z-0 delay-100 overflow-hidden backdrop-blur-md shadow-xl border border-white/10 ${!isOFF ? roomName=="smartlocks"?"bg-[rgb(37,69,194)]":"bg-[rgba(255,129,26,0.85)]":"black30"}`}>
        <div className="flex flex-col 500b:flex-row gap-10 600b:gap-22 items-center 500b:items-start mb-8 z-20">
          <img src={icon(type)} alt="tv" className="mt-2"/>
          <div
            className={`p-1 h-22 rounded-4xl flex items-start justify-center relative cursor-pointer delay-100 ${!isOFF ? roomName=="smartlocks"?"bg-[rgba(0,0,0,0.5)]":"bg-[#FFB11A]":"bg-[rgba(0,0,0,0.5)]"}`}
            onClick={() => setIsOFF(!isOFF)}
          >
            <div
              className={`rounded-4xl p-2 transition-transform duration-500 ease-in-out ${
                isOFF ? "translate-y-9.5 bg-[rgba(128,128,128,0.34)]" : "bg-black translate-y-0"
              }`}
            >
              <img src={isOFF ? BlackShutDown : ShutDown} alt="shutdown" className="w-6" />
            </div>
          </div>
        </div>
        <h3 className="text-white 500b:self-center 400b:text-sm 500b:text-lg 600b:text-[24px] font-poppins font-semibold">{name}</h3>
      </div>
    </div>
  );
}
