import { contactus, envelope, telephone} from "../../assets/home-page/index"

const HomePart_5 = () => {
  return (
    <div className="px-8 400b:px-12 600b:px-18 xxxs:my-20 font-inter 1600b:mx-20 2000b:mx-40 2000b:mt-60">
      <p className='400b:text-xl 500b:text-2xl 1700b:text-4xl font-semibold text-[#D49B54] mb-2 xxxs:mb-4 400b:mb-12 1000b:mb-18'>Contact Us</p>
      <div className='flex flex-col 900b:flex-row xxxs:gap-8 1000b:gap-20 1300b:gap-40'>
        <img src={contactus} alt="Contact Us" className="max-xxxs:h-60 max-500b:h-80 max-900b:h-100 1600b:h-140 2000b:h-180"/>
        <div className='flex flex-col justify-center'>
          <p className='text-xl xxxs:text-4xl 1600b:text-6xl mb-3 xxxs:mb-6'>Have questions or need assistance?</p>
          <p className='text-xl xxxs:text-xl 1600b:text-4xl text-[#FF9E49] mb-4 600b:mb-8 900b:mb-14'>We are here to help!</p>
          <p className='text-base xxxs:text-lg 1600b:text-2xl mb-2 600b:mb-4 font-normal'>Reach out to us at:</p>
          <div className='flex items-center mt-4 mb-6 my-2 900b:my-8'>
            <img src={envelope} alt="envelope" className="1600b:h-15"/>
            <p className='text-sm 1600b:text-lg ml-2 font-light break-all'>ashu2100ag@gmail.com</p>
          </div>
          <div className='flex items-center'>
            <img src={telephone} alt="Telephone" className="1600b:h-15"/>
            <p className='text-sm 1600b:text-lg ml-2 font-light'>+91-9958728538</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePart_5
