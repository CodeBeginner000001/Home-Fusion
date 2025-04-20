const Headings = ({wordcolor,style,heading,text,coloredheading}) => {
  return (
    <div>
      <p className="400b:text-xl 500b:text-2xl 1700b:text-4xl font-semibold text-[#D49B54]">{text}</p>
      <h1 className={`text-xl 400b:text-2xl 500b:text-3xl 600b:text-4xl 700b:text-5xl ${heading==="Pioneering the Future of "?`900b:text-2xl 1000b:text-3xl 1100b:text-4xl 1200b:text-5xl`:""} 1700b:text-6xl 2000b:text-7xl font-bold ${style}`}>
        {heading}<span className={wordcolor}>{coloredheading}</span>
      </h1>
    </div>
  );
};

export default Headings;
