const Inputfields = ({heading,placeholder,id}) => {
  return (
    <div>
      <p className="text-[#FF9238] mb-2 500b:mb-6 1600b:text-2xl">{heading}</p>
      <input
        type="text"
        placeholder={placeholder}
        className="p-2 rounded-xl 400b:p-6 border-2 400b:rounded-2xl border-[rgb(0,0,0,0.5)] focus:outline-[#FF9238] w-50 300b:w-60 400b:w-72 500b:w-96 1600b:w-120"
        id={id}
        autoComplete="on"
      />
    </div>
  );
};

export default Inputfields;
