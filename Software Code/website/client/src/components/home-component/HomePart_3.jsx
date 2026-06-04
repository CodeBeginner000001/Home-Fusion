import { flash_on, voice, clock} from "../../assets/home-page/index"
import Headings from "./component/Headings"
import Advantage_cards from "./component/Advantage_cards"
const HomePart_3 = () => {
  return (
    <div className="px-8 400b:px-12 600b:px-18 my-20 font-inter 1600b:mx-20 2000b:mx-40 2000b:mt-60">
          <div className="self-start">
            <Headings text="Our Advantages" style="pt-3 sm:pt-6" heading="What Make us " wordcolor='text-[#D49B54]' coloredheading="Unique?"/>
          </div>
          <div className='flex flex-wrap gap-10 400b:gap-15 my-8 600b:my-15 800b:my-20 font-roboto justify-center'>
            <Advantage_cards img={flash_on} textstyle="text-lg text-center xxxs:text-start xxxs:text-2xl " text="Efficient Energy Management" tagStyle="text-[#FF9238] border-[#FF9238] border-2 py-3 px-4 xxxs:px-6 rounded-full text-xl 2000b:text-2xl" tag="Management" cardcolor="bg-[#FEFBF4]"/>
            <Advantage_cards img={voice} textstyle="px-3 xxxs:px-6.25 500b:px-18.25 text-center text-[#FF9238]" text="Voice Activated Automation" tagStyle="text-white bg-[#FF9E49] py-3 px-6 rounded-full text-xl 2000b:text-2xl" tag="Voice" cardcolor="bg-[#312E2E]"/>
            <Advantage_cards img={clock} textstyle="px-3 xxxs:px-6.25" text="24/7 Monitoring Support" tagStyle="text-[#FF9238] border-[#FF9238] border-2 py-3 px-6 rounded-full text-xl 2000b:text-2xl" tag="Support" cardcolor="bg-[#FEFBF4]"/>
          </div>
    </div>
  )
}
export default HomePart_3
