const Advantage_cards = ({img,textstyle,text,tagStyle,tag,cardcolor}) => {
  return (
      <div className={`drop-shadow-md ${cardcolor} items-center 500b:items-start rounded-3xl xxxs:max-w-[372px] 2000b:max-w-[600px]  flex flex-col p-6 pr-8 pb-16 2000b:p-14`}>
        <span className={tagStyle}>
          {tag}
        </span>
        <img src={img} alt={`${img}`} className="mt-8 self-center mb-4 2000b:h-40" />
        <p className={`text-lg xxxs:text-2xl 2000b:text-4xl ${textstyle} self-center ${text==="Voice Activated Automation"?'text-wrap':'sm:text-nowrap'}`}>{text}</p>
      </div>
  );
};

export default Advantage_cards;