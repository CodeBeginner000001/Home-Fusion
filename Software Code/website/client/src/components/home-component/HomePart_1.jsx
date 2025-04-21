import {
  plug,
  shield,
  door_lock,
  electricity,
} from "../../assets/home-page/index";
import Tags from "./component/Tags.jsx";
import Navbar from "../Navbar.jsx";
const HomePart_1 = () => {
  return (
    <div className="bg-[url(../../src/assets/home-page/drawing-room.svg)] w-100% bg-cover px-6 xxxs:px-12 lg:px-18 font-roboto pb-26 bg-no-repeat">
      <Navbar brandColor="bg-gradient-to-b from-[#FF9238] from-20% to-white bg-clip-text text-transparent"/>
      <div className="1600b:mx-20 2000b:mx-40">
        <div className="py-10 md:py-16 lg:py-24 flex justify-between">
          <div></div>
          <Tags tagPic={plug} tag="Energy Efficient" />
          <Tags tagPic={shield} tag="Security Enhancer" />
        </div>
        <div className="py-20 grid md:grid-cols-2">
          <div>
            <h1 className="bg-gradient-to-bl from-[#FF9238] from-35% to-white bg-clip-text text-transparent text-5xl 1000b:text-6xl 1100b:text-7xl 1400b:text-8xl  font-bold">
              Smart Homes, <p className="text-white">Smarter Lives</p>
            </h1>
            <p className="text-white pt-10 pb-8 300b:pb-15 text-[18px] 500b:text-[22px] 1200b:text-[25px] font-bold text-wrap 300b:pr-6 1000b:pr-14">
              Empowering your space with intelligent technology for everyday
              ease.
            </p>
            <button className="rounded-4xl bg-[#FF9E49] text-white  cursor-pointer py-2 px-6 300b:py-4 300b:px-8 900b:py-5 900b:px-14 1400b:py-6 1400b:px-18 font-bold text-2xl 900b:text-3xl 400b:ml-6">
              Admin Login
            </button>
          </div>
          <div className="hidden md:flex flex-col justify-around items-start mt-10 1000b:pl-16 1200b:pl-28">
            <Tags tagPic={door_lock} tag="Smart Lock" />
            <div className="grey8 rounded-4xl  mt-30 1300b:mt-60 py-8 1000b:py-14 px-6 1000b:px-10">
              <div className="flex mb-12 gap-x-4 1000b:gap-x-7 justify-between items-center">
                <p className="text-white text-wrap text-xl 1100b:text-2xl">
                  Use Our Service and Join <span>Us To Save Energy</span>
                </p>
                <img
                  src={electricity}
                  alt="electricity symbol"
                  className="inline-block"
                />
              </div>
              <hr className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePart_1;
