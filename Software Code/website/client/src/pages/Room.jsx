import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { a } from "../contants/Rooms";
import { backButton } from "../assets/Appliances";
import Button from "../components/Button";

export default function Room() {
  const { roomName } = useParams();
  const navigate = useNavigate();
  const roomData = a.find(room => room.roomName.toLowerCase().replace(/[^a-z0-9]/g, "")=== roomName);
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
        <Navbar brandColor="white" />
        <div className="mt-40 flex flex-col gap-y-24 items-start 400b:pl-10">
          <img
            src={backButton}
            alt="back"
            className="h-15 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <h1 className="text-white font-poppins text-4xl">
            {roomData.roomName}
          </h1>
          <div className="flex flex-wrap gap-y-10 gap-x-20">
            {Object.entries(roomData.Appliances).map(([type, items]) =>
              items.map((appliance, idx) => (
                <Button
                  key={`${type}-${idx}`}
                  name={appliance.name}
                  state={appliance.state}
                  type={type}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
