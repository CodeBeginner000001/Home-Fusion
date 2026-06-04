import { Button_Heading, Toggle_Button } from "./ButtonCard-Component"
/* eslint-disable react/prop-types */
export default function Card({value,CardHeading,togglePath}) {
  return (
    <>
      <div className="bg-black rounded-3xl flex flex-col items-center justify-center text-nowrap w-[160px] h-[160px]">
            <Button_Heading CardHeading={CardHeading}/>
            <Toggle_Button value={value} togglePath={togglePath}/>
       </div>
    </>
  )
}

