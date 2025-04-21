import {close_up_table_tv, man_using_table} from "../../assets/home-page/index"
import Headings from "./component/Headings"
const HomePart_2 = () => {
  return (
    <div className="max-auto flex flex-col-reverse gap-y-6 500b:gap-y-10 900b:gap-y-0 900b:flex-row 900b:gap-x-12 1100b:gap-x-14 1700b:gap-x-20 font-inter px-8 400b:px-12 600b:px-18 my-40 1600b:mx-20 2000b:mx-40 2000b:mt-60">
      <img src={close_up_table_tv} alt="tablet near tv" className="400b:h-110 500b:h-120 900b:h-120 1000b:h-130 1200b:h-140 1400b:h-165 1700b:h-200 2000b:h-240"/>
      <div className='flex flex-col gap-y-10 900b:justify-around items-start'>
        <Headings text="About us" style="pr-10" heading="Pioneering the Future of " wordcolor='text-[#FFA14F]' coloredheading="Smart Living"/>
        <img src={man_using_table} alt="man using tab near table" className="1100b:h-60 1200b:h-70 1300b:h-75 1400b:h-100"/>
        <p className='text-sm 1700b:text-lg 2000b:text-2xl italic'>A smart home is more than technology—it&apos;s a lifestyle upgrade, simplifying your routines, enhancing your comfort, and giving you more time for what truly matters.</p>
      </div>
    </div> 
  )
}

export default HomePart_2
