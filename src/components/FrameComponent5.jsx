const FrameComponent5 = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[5px] box-border gap-[10px] max-w-full text-left text-13xl text-sandybrown font-kumbh-sans">
      <header className="self-stretch [backdrop-filter:blur(50px)] bg-gray-200 flex flex-row items-start justify-between pt-[25px] px-5 pb-5 box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-left text-7xs text-gray-100 font-kumbh-sans">
        <div className="h-[89px] w-[428px] relative [backdrop-filter:blur(50px)] bg-gray-200 hidden max-w-full" />
        <div className="flex flex-row items-start justify-start gap-[10px]">
          <img
            className="h-11 w-11 relative z-[1]"
            loading="lazy"
            alt=""
            src="/menu.svg"
          />
          <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
            <div className="flex flex-col items-start justify-start">
              <div className="relative font-medium inline-block min-w-[24px] z-[1]">
                Location
              </div>
              <div className="flex flex-row items-start justify-start gap-[3px] text-xs text-white">
                <b className="relative inline-block min-w-[16px] whitespace-nowrap z-[1]">
                  DL
                </b>
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <img
                    className="w-[11px] h-[11px] relative z-[1]"
                    alt=""
                    src="/dynamic-ads.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[10px] text-right text-3xs">
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
            <div className="flex flex-col items-end justify-start">
              <div className="relative font-medium inline-block min-w-[73px] whitespace-nowrap z-[1]">
                Hello Welcome!
              </div>
              <h2 className="m-0 relative text-base font-bold font-inherit text-white inline-block min-w-[94px] whitespace-nowrap z-[1]">
                John Watson
              </h2>
            </div>
          </div>
          <img
            className="h-11 w-11 relative rounded-[50%] object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/profile@2x.png"
          />
        </div>
      </header>
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[13px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full">
            <h1 className="m-0 flex-1 relative text-inherit leading-[100%] font-extrabold font-inherit inline-block max-w-full z-[1]">
              <span>LET’S FIND YOUR</span>
              <span className="text-white"> CONSULTANT</span>
            </h1>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[5px] max-w-full">
            <div className="flex-1 [backdrop-filter:blur(10px)] rounded-3xl bg-white box-border flex flex-row items-start justify-start py-3 px-[17px] gap-[7px] min-w-[74px] max-w-full z-[1] border-[1px] border-solid border-gray-300">
              <div className="h-12 w-[335px] relative [backdrop-filter:blur(10px)] rounded-3xl bg-white box-border hidden max-w-full border-[1px] border-solid border-gray-300" />
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px] z-[2]"
                alt=""
                src="/search-icon.svg"
              />
              <input
                className="w-[54px] [border:none] [outline:none] font-medium font-inter text-base bg-[transparent] h-[19px] relative text-darkslateblue-300 text-left inline-block p-0 z-[2]"
                placeholder="Search"
                type="text"
              />
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] h-12 w-12 relative">
              <div className="absolute top-[48px] left-[48px] rounded-[50%] bg-darkslateblue-100 w-full h-full [transform:_rotate(-180deg)] [transform-origin:0_0] z-[1]" />
              <img
                className="absolute top-[14px] left-[14px] w-5 h-5 overflow-hidden object-contain z-[2]"
                alt=""
                src="/ionarrowbackoutline@2x.png"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
