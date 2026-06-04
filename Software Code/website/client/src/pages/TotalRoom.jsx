import Navbar from "../components/Navbar";
import totalroom from "../assets/Rooms/totalroom.svg"; // ✅ Make sure the path is correct
import Total_room_button from "../components/Total_room_button";
import { mainDoors,Rooms } from "../constants/Rooms";
export default function TotalRoom() {
  return (
    <>
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${totalroom})` }} // ✅ use inline style
        />

        {/* Main Content */}
        <div className="relative z-20 px-6 xxxs:px-12 lg:px-18 pb-30">
          <Navbar brandColor="text-black" textColor="text-black" />
          <div className="mt-20 flex flex-wrap gap-y-6 gap-x-14 justify-center">
            {mainDoors.map((door) => (
              <Total_room_button key={door.name} details={door}/>
            ))}
          </div>
          <div className="flex items-center gap-x-2 my-8 400b:my-12 500b:my-16">
            <h1 className="text-xl 400b:text-3xl 500b:text-4xl ">
              SMART <span className="text-[rgba(0,0,0,0.5)]">ROOMS</span>
            </h1>
            <div className="w-8 400b:w-12 500b:w-16 h-0.75 bg-[rgba(0,0,0,0.5)]" />
          </div>
          <div className="flex flex-wrap 1400b:grid-cols-4 gap-x-10 gap-y-10 500b:gap-y-20 justify-center">
            {
              Rooms.map((room)=>(
                <Total_room_button key={room.roomName} details={room}/>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
}
