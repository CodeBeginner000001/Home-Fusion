const Textarea = ({heading,fieldheight}) => {
  return (
    <div className="my-8 500b:my-10">
      <p className="text-[#FF9238] mb-2 500b:mb-6 1600b:text-2xl">{heading}</p>
      <textarea
        type="text"
        placeholder="Enter your query"
        className={`p-4 border-2 rounded-2xl w-50 300b:w-60 400b:w-72 500b:w-[400px] 1000b:w-[830px] 1600b:w-[1050px] ${fieldheight} border-[rgb(0,0,0,0.5)] focus:outline-[#FF9238]`}
        id="query"
      />
    </div>
  );
};

export default Textarea;
