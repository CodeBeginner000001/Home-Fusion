import { useState } from "react";
import { ShutDown, BlackShutDown } from "../../src/assets/Appliances/index";
import {icon} from "../contants/Rooms"
export default function Button({name,state,type}) {
  let [isOFF, setIsOFF] = useState(state);
  return (
    <div className={`inline-block w-fit rounded-3xl delay-100 ${isOFF ? "black30" : "bg-[rgba(255,129,26,0.85)]"}`}>
      <div className={`w-fit p-3 rounded-3xl pb-24 pl-3 z-0 delay-100 overflow-hidden backdrop-blur-md shadow-xl border border-white/10 ${isOFF ? "black30" : "bg-[rgba(255,129,26,0.85)]"}`}>
        <div className="flex gap-x-22 items-start mb-8 z-20">
          <img src={icon(type)} alt="tv" />
          <div
            className={`p-1 h-22 rounded-4xl flex items-start justify-center relative cursor-pointer delay-100 ${isOFF ? "bg-[rgba(0,0,0,0.5)]" : "bg-[#FFB11A]"}`}
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
        <h3 className="text-white text-[24px] font-poppins font-semibold">{name}</h3>
      </div>
    </div>
  );
}
