import bedroom from "../../src/assets/Rooms/bedroom.svg";
import kitchen from "../../src/assets/Rooms/kitchen.svg";
import livingroom from "../../src/assets/Rooms/livingroom.svg";
import locks from "../../src/assets/Rooms/locks.svg";
import washroom from "../../src/assets/Rooms/washroom.svg";
import { acIcon, doorIcon, fanIcon, lightIcon, tvIcon } from "../assets/Appliances/index";
import {
  ac,
  door,
  fan,
  light,
  main_door,
  tv
} from "../assets/Appliances/total_room_icon/index";

export const Rooms = [
  {
    roomName: "Bed Room",
    imgUrl: bedroom,
    Appliances: {
      TV: [
        { name: "Smart TV 1", state: true },
        { name: "Smart TV 2", state: false }
      ],
      Fan: [
        { name: "Smart Fan 1", state: true },
        { name: "Smart Fan 2", state: false }
      ],
      Light: [
        { name: "Smart Light 1", state: true },
        { name: "Smart Light 2", state: false }
      ],
      AC: [
        { name: "Smart AC 1", state: true },
        { name: "Smart AC 2", state: false }
      ],
      Door: [
        { name: "Smart Door 1", state: true },
        { name: "Smart Door 2", state: false }
      ]
    },
  },
  {
    roomName: "Living Room",
    imgUrl: livingroom,
    Appliances: {
      TV: [
        { name: "Smart TV 1", state: true },
      ],
      Fan: [
        { name: "Smart Fan 1", state: true },
        { name: "Smart Fan 2", state: false }
      ],
      Light: [
        { name: "Smart Light 2", state: false }
      ],
      AC: [
        { name: "Smart AC 1", state: true },
      ],
      Door: [
        { name: "Smart Door 2", state: false }
      ]
    }
  },
  {
    roomName: "Kitchen",
    imgUrl: kitchen,
    Appliances: {
      TV: [
        { name: "Smart TV 1", state: true },
      ],
      Fan: [
        { name: "Smart Fan 1", state: true },
        { name: "Smart Fan 2", state: false }
      ],
      Light: [
        { name: "Smart Light 2", state: false }
      ],
      AC: [
        { name: "Smart AC 1", state: true },
      ],
      Door: [
        { name: "Smart Door 2", state: false }
      ]
    }
  },
  {
    roomName: "Smart Locks",
    imgUrl: locks,
    Appliances: {
      Door: [
        { name: "Smart Door ", state: false },
        { name: "Smart Door 2", state: false },
        { name: "Smart Door 3", state: false },
        { name: "Smart Door 4", state: false }
      ]
    }
  },
  {
    roomName: "Wash Room",
    imgUrl: washroom,
    Appliances: {
      TV: [
        { name: "Smart TV 1", state: true },
      ],
      Fan: [
        { name: "Smart Fan 1", state: true },
        { name: "Smart Fan 2", state: false }
      ],
      Light: [
        { name: "Smart Light 2", state: false }
      ],
      AC: [
        { name: "Smart AC 1", state: true },
      ],
      Door: [
        { name: "Smart Door 2", state: false },
        { name: "Smart Door 3", state: false },
        { name: "Smart Door 4", state: false }
      ]
    }
  }
];
export const mainDoors = [
  {
    icon: main_door,
    name: "Main Door Entrance",
    state: true
  },
  {
    icon: main_door,
    name: "Main Door Entrance 2",
    state: false
  }
];

export const icon = (type) => {
  if (type === "TV") return { icon1: tvIcon, icon2: tv, bg: "rgba(105,252,232,0.15)" };
  if (type === "Fan") return { icon1: fanIcon, icon2: fan, bg: "rgba(252,105,105,0.15)" };
  if (type === "Light") return { icon1: lightIcon, icon2: light, bg: "rgba(105,181,252,0.15)" };
  if (type === "AC") return { icon1: acIcon, icon2: ac, bg: "rgba(116,209,45,0.15)" };
  if (type === "Door") return { icon1: doorIcon, icon2: door, bg: "rgba(210,105,252,0.15)" };
};
