import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Rooms } from "../contants/Rooms";
import { backButton } from "../assets/Appliances";
import { error } from "../assets/Error";

export default function Room() {
  const { roomName } = useParams();
  const navigate = useNavigate();
  const roomData = Rooms.find(room => room.roomName.toLowerCase().replace(/[^a-z0-9]/g, "")=== roomName);
  if (!roomData) {
    return (
      <div className="min-h-screen bg-white flex justify-center px-6">
        <div className="flex flex-col items-center">
          <img
            src={error} // <-- Update the path
            alt="404 Illustration"
            className="w-200 mb-8"
          />
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8 text-center">
            Oops! The page you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-[#FF9E49] text-white rounded hover:bg-[#FB841B] transition duration-300"
          >
            Go Home
          </button>
        </div>
      </div>
    );
    
  }
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${roomData.imgUrl})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10" />

      {/* Main Content */}
      <div className="relative z-20 px-6 xxxs:px-12 lg:px-18 pb-30">
        <Navbar brandColor="text-white"textColor={"text-white"}/>
        <div className="mt-40 flex flex-col gap-y-14 sm:gap-y-24 items-start 600b:pl-10">
          <img
            src={backButton}
            alt="back"
            className="h-15 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <h1 className="text-white font-poppins text-2xl 500b:text-4xl max-xxxs:text-center">
            {roomData.roomName}
          </h1>
          <div className="self-center">
          <div className="grid grid-cols-1 400b:grid-cols-2  1000b:grid-cols-3 1300b:grid-cols-4 1600b:grid-cols-5 2000b:grid-cols-6 gap-y-10 gap-x-6 500b:gap-x-10 700b:gap-x-20">
            {Object.entries(roomData.Appliances).map(([type, items]) =>
              items.map((appliance, idx) => (
                <Room_button
                  key={`${type}-${idx}`}
                  name={appliance.name}
                  state={appliance.state}
                  type={type}
                  roomName={roomName}
                />
              ))
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
