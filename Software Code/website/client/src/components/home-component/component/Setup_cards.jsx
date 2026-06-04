const Setup_cards = ({img,heading,text}) => {
  return (
    <div className="flex flex-col items-center 500b:flex-row gap-4 400b:gap-8 600b:gap-12  500b:items-start">
      <img src={img} alt={`${img}`} className="max-500b:h-20 2000b:h-20"/>
      <div>
        <h1 className="text-xl 500b:text-3xl 2000b:text-4xl font-bold">{heading}</h1>
        <p className="text-base 500b:text-lg 2000b:text-xl mt-4 500b:pr-15">
          {" "}
          {text}
        </p>
      </div>
    </div>
  );
};

export default Setup_cards;
