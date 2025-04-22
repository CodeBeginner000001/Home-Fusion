import bedroom from "../../src/assets/Rooms/bedroom.svg";
import kitchen from "../../src/assets/Rooms/kitchen.svg";
import livingroom from "../../src/assets/Rooms/livingroom.svg"
import locks from "../../src/assets/Rooms/locks.svg"
import washroom from "../../src/assets/Rooms/washroom.svg"

import {tvIcon,fanIcon,lightIcon,acIcon,doorIcon} from "../../src/assets/Appliances/index"

export const a = [
    {
      roomName: "Bed Room",
      imgUrl: bedroom,
      Appliances: {
        tvs: [
          { name: "Smart TV 1", state: true },
          { name: "Smart TV 2", state: false }
        ],
        fans: [
          { name: "Smart Fan 1", state: true },
          { name: "Smart Fan 2", state: false }
        ],
        lights: [
          { name: "Smart Light 1", state: true },
          { name: "Smart Light 2", state: false }
        ],
        acs: [
          { name: "Smart AC 1", state: true },
          { name: "Smart AC 2", state: false }
        ],
        doors: [
          { name: "Smart Door 1", state: true },
          { name: "Smart Door 2", state: false }
        ]
      }
    },
    {
      roomName: "Living Room",
      imgUrl: livingroom,
      Appliances: {
        tvs: [
          { name: "Smart TV 1", state: true },
        ],
        fans: [
          { name: "Smart Fan 1", state: true },
          { name: "Smart Fan 2", state: false }
        ],
        lights: [
          { name: "Smart Light 2", state: false }
        ],
        acs: [
          { name: "Smart AC 1", state: true },
        ],
        doors: [
          { name: "Smart Door 2", state: false }
        ]
      }
    },
    {
      roomName: "Kitchen",
      imgUrl: kitchen,
      Appliances: {
        tvs: [
          { name: "Smart TV 1", state: true },
        ],
        fans: [
          { name: "Smart Fan 1", state: true },
          { name: "Smart Fan 2", state: false }
        ],
        lights: [
          { name: "Smart Light 2", state: false }
        ],
        acs: [
          { name: "Smart AC 1", state: true },
        ],
        doors: [
          { name: "Smart Door 2", state: false }
        ]
      }
    },
    {
      roomName: "Smart Locks",
      imgUrl: locks,
      Appliances: {
        doors: [
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
        tvs: [
          { name: "Smart TV 1", state: true },
        ],
        fans: [
          { name: "Smart Fan 1", state: true },
          { name: "Smart Fan 2", state: false }
        ],
        lights: [
          { name: "Smart Light 2", state: false }
        ],
        acs: [
          { name: "Smart AC 1", state: true },
        ],
        doors: [
          { name: "Smart Door 2", state: false }
        ]
      }
    }
  ];

  
export const icon = (type) => {
    if (type === "tvs") return tvIcon;
    if (type === "fans") return fanIcon;
    if (type === "lights") return lightIcon;
    if (type === "acs") return acIcon;
    if (type === "doors") return doorIcon;
  };
  