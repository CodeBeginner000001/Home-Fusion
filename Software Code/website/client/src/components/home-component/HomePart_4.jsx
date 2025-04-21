import { battery, phone, cards } from "../../assets/home-page/index"
import Headings from "./component/Headings"
import Setup_cards from "./component/Setup_cards"

const HomePart_4 = () => {
  return (
    <div className="px-8 400b:px-12 600b:px-18 mt-40 mb-10 grid grid-col-1 1100b:grid-cols-2 gap-10 500b:gap-20 1600b:mx-20 2000b:mx-40 2000b:mt-60">
          <div className='flex flex-col justify-center'>
            <Headings wordcolor="text-[#D49B54] inline-block" style="mt-8 1100b:mt-18 mb-8" heading="Simple To Set Up & Use" text="How to Set Up" coloredheading="Smart Device"/>
            <p className='text-sm 1700b:text-lg 2000b:text-2xl italic 500b:pr-20'>Effortlessly transform your room with smart devices designed for simple setup and intuitive use—no technical expertise required, just instant convenience at your fingertips.</p>
          </div>
          <div className='flex flex-col gap-y-10 2000b:gap-y-20'>
            <Setup_cards img={battery} heading="Plugin Smart Device" text="Plugin your smart device the first step to transforming your room into an intelligent, connected space effortlessly."/>
            <Setup_cards img={phone} heading="Set Up Using Smartphone" text="Use your smartphone to easily set up and connect your smart devices, bringing your IoT-enabled room to life in just a few taps."/>
            <Setup_cards img={cards} heading="Smart Device Ready To Use" text="Your smart device is now ready to use-enjoy seamless control and automation for a smarter, more convenient room experience."/>
          </div>
        </div>
  )
}

export default HomePart_4
