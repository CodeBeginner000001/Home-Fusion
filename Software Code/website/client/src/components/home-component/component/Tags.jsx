const Tags = ({tagPic,tag}) => {
  return (
    <div className="text-white inline-block border-black black30 rounded-4xl md:border-2 py-1 px-4 w-fit h-fit">
      <img src={tagPic} alt="plug" className="inline-block h-8 400b:h-12 1000b:h-15" />
      <div className="opacity-30 hidden ml-5 text-xl md:inline-block">{tag}</div>
    </div>
  );
};

export default Tags;
