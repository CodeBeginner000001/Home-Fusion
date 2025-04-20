import { sent} from "../../assets/home-page/index"
import Inputfields from "./component/Inputfields"
import Textarea from "./component/Textarea"
const HomePart_6 = () => {
  return (
    <div className="mt-25 1600b:mt-40 2000b:mt-60 flex flex-col justify-center items-center mb-48">
          <h1 className='text-2xl 300b:text-3xl 400b:text-4xl 500b:text-5xl 1600b:text-7xl text-[#FF9E49]'>Drop us a Message!</h1>
          <div className='mt-10 1000b:mt-16 1600b:mt-24 w-full flex flex-col items-center'>
            <div className='flex gap-8 1000b:gap-16 1600b:gap-24 flex-col 1000b:flex-row'>
              <Inputfields heading="Enter your email" placeholder="Eg: xxx@gmail.com" id="email"/>
              <Inputfields heading="Enter your Phone No:" placeholder="Eg: xxxxxxxxxx" id="phone"/>
            </div>
            <Textarea heading= "Message" fieldheight="h-25 300b:h-35 500b:h-48"/>
            <button className='bg-[#FF9E49] block text-xl 300b:text-2xl text-white px-8 300b:px-15 500b:px-30 800b:px-40 py-2 500b:py-5 rounded-full 500b:my-6 cursor-pointer'>Send <img src={sent} alt="plane" className='inline-block ml-2 max-300b:w-5'/></button>
          </div>
    </div>
  )
}

export default HomePart_6
