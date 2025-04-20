import Toggle_Button_Circle from "./Toggle_Button_Circle";
import updateValue from "../Utils/Firebase_UpdateData"
import { useState } from "react";
/* eslint-disable react/prop-types */

export default function Toggle_Button({ value, CollectionName, docId }) {
  const [currentState, setCurrentState] = useState(value);

  const handleClick = async () => {
    await updateValue(currentState,CollectionName,docId,setCurrentState)
  };

  return (
    <div
      className={`w-[4rem] h-[2rem] flex items-center border-2 border-black rounded-3xl cursor-pointer ${
        currentState ? "transition duration-300 ease-in-out bg-blue-500 justify-end" : "bg-white"
      }`}
      onClick={handleClick}
    >
      <Toggle_Button_Circle value={currentState} />
    </div>
  );
}
