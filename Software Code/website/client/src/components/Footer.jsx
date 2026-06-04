import {
  github,
  insta,
  linkedin,
  linkedin_circle,
  logo,
  mail,
  telephone1,
} from "../../src/assets/footer";

const Footer = () => {
  return (
    <div className="bg-[#312E2E] pt-25 1200b:pt-30 text-white font-inter px-6 400b:px-14 1200b:px-20 flex flex-col">
      <div className="flex flex-col 400b:grid 400b:grid-cols-1 sm:grid-cols-2 gap-y-15 1200b:flex 1200b:flex-row 1200b:gap-15  1300b:gap-20 1400b:gap-30 pb-16 400b:justify-center 400b:items-center 1200b:flex-wrap">
        <div className="hidden justify-center sm:flex sm:flex-col">
          <div className="flex items-center justify-center pb-4">
            <img src={logo} alt="logo" className="2000b:h-20" />
            <p className="text-[#FF9238] text-3xl 2000b:text-4xl pl-6 pt-5 font-bold">
              Home Fusion
            </p>
          </div>
          <p className="text-sm 2000b:text-lg text-center">
            {" "}
            Innovating the way you live with cutting-edge smart home <br />
            solutions. Simplify, automate, and enhance your everyday <br />
            life with our intelligent technologies.
          </p>
        </div>
        <div className="list-none flex flex-col 300b:items-center">
          <div className="flex flex-col gap-y-4">
            <h3 className="text-[#FF9238] text-xl 2000b:text-3xl text-nowrap mb-4 font-bold">
              Quick Link
            </h3>
            <li className="text-base 2000b:text-xl">About us</li>
            <li className="text-base 2000b:text-xl">Contact Us</li>
            <li className="text-base 2000b:text-xl text-nowrap">
              Feedback Form
            </li>
          </div>
        </div>
        <div className="list-none flex flex-col 300b:items-center">
          <div className="flex flex-col gap-y-4">
            <h3 className="text-[#FF9238] text-xl 2000b:text-3xl text-nowrap mb-4 font-bold">
              Support
            </h3>
            <li className="text-base 2000b:text-xl text-nowrap">
              How to Set Up
            </li>
            <li className="text-base 2000b:text-xl">Features</li>
            <li className="text-base 2000b:text-xl text-nowrap">
              Quick Feedback
            </li>
          </div>
        </div>
        <div className="list-none flex flex-col 300b:items-center">
          <div className="flex flex-col gap-y-4 400b:pl-24 700b:pl-30 1200b:pl-0">
            <h3 className="text-[#FF9238] text-xl 2000b:text-3xl text-nowrap mb-4 font-bold">
              Get in Touch
            </h3>
            <li className="flex">
              <img src={telephone1} alt="telephone" />
              <p className="text-base 2000b:text-xl ml-3">+91-9958728538</p>
            </li>
            <li className="flex">
              <img src={mail} alt="mail" />
              <p className="text-base 2000b:text-xl ml-3 max-400b:break-all">
                ashu2100ag@gmail.com
              </p>
            </li>
            <li className="flex">
              <img src={linkedin} alt="linkedin" />
              <p className="text-base 2000b:text-xl ml-3">Linkedin</p>
            </li>
          </div>
        </div>
      </div>
      <hr className="text-white" />
      <div className="flex flex-col items-center gap-y-6 700b:gap-y-10 800b:justify-between 800b:flex-row 800b:items-end py-6 mb-3">
        <p className="text-white max-600b:text-center 800b:ml-10 900b:ml-20 1000b:ml-40 1200b:ml-60 1300b:ml-90 1400b:ml-112">
          Copyright © 2024 HomeFusion | Powered by HomeFusion
        </p>
        <div className="flex gap-x-3 2000b:gap-x-8">
          <img src={insta} alt="instagram" className="2000b:h-15" />
          <img src={linkedin_circle} alt="linkedin" className="2000b:h-15" />
          <img src={github} alt="github" className="2000b:h-15" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
