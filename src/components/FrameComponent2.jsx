const FrameComponent2 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[30px] box-border max-w-full text-left text-13xl text-sandybrown font-kumbh-sans">
      <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq319:flex-wrap">
        <div className="w-[189px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
          <h1 className="m-0 self-stretch relative text-inherit leading-[100%] font-extrabold font-inherit z-[2]">
            <span>CLINICS</span>
            <span className="text-white"> NEAR YOU</span>
          </h1>
        </div>
        <div className="h-[87px] w-[50px] [backdrop-filter:blur(10px)] rounded-6xl bg-white box-border flex flex-col items-start justify-start py-5 px-3 relative z-[2] text-center text-3xs text-darkslateblue-100 border-[1px] border-solid border-gray-300">
          <div className="w-[50px] h-[87px] relative [backdrop-filter:blur(10px)] rounded-6xl bg-white box-border hidden z-[0] border-[1px] border-solid border-gray-300" />
          <div className="w-11 h-11 absolute !m-[0] bottom-[3px] left-[calc(50%_-_22px)]">
            <div className="absolute top-[44px] left-[44px] rounded-[50%] bg-darkslateblue-100 w-full h-full [transform:_rotate(-180deg)] [transform-origin:0_0] z-[3]" />
            <img
              className="absolute top-[12px] left-[12px] w-5 h-5 overflow-hidden object-contain z-[4]"
              loading="lazy"
              alt=""
              src="/ionarrowbackoutline-1@2x.png"
            />
          </div>
          <b className="relative leading-[100%] inline-block min-w-[24px] z-[3]">
            MAP
          </b>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
