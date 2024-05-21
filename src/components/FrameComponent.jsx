import FrameComponent1 from "./FrameComponent1";

const FrameComponent = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start py-0 px-2.5 box-border max-w-full text-left text-13xl text-sandybrown font-kumbh-sans">
      <div className="flex-1 flex flex-col items-start justify-start gap-[28px] max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[10px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-5 box-border max-w-full">
            <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[25px] max-w-full">
              <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border min-w-[168px]">
                <h1 className="m-0 self-stretch relative text-inherit leading-[100%] font-extrabold font-inherit z-[2]">
                  <span>POPULAR</span>
                  <span className="text-white"> SPECIALISTS</span>
                </h1>
              </div>
              <img
                className="h-[74px] w-[85px] relative object-cover z-[2]"
                loading="lazy"
                alt=""
                src="/premium-psd---tooth-3d-icon-isolated-1photoroom-1@2x.png"
              />
            </div>
          </div>
          <div className="self-stretch rounded-11xl bg-white flex flex-row items-end justify-start p-[5px] box-border gap-[15px] max-w-full z-[1] text-xl text-darkslateblue-100 mq344:flex-wrap">
            <div className="h-[136px] w-[408px] relative rounded-11xl bg-white hidden max-w-full" />
            <div className="rounded-6xl bg-gainsboro-200 flex flex-row items-start justify-start pt-24 px-0 pb-0 box-border relative min-w-[120px] z-[2] mq344:flex-1">
              <div className="h-[126px] w-[120px] relative rounded-6xl bg-gainsboro-200 hidden z-[0]" />
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-6xl max-w-full overflow-hidden max-h-full object-cover z-[3]"
                alt=""
                src="/pexels-photo-by-andrea-piacquadio@2x.png"
              />
              <button className="cursor-pointer [border:none] pt-2 pb-2.5 pr-[46.2px] pl-[47px] bg-darkslateblue-200 [backdrop-filter:blur(9.11px)] rounded-t-none rounded-b-6xl flex flex-row items-start justify-start gap-[2.7px] z-[4]">
                <div className="h-[30px] w-[120px] relative [backdrop-filter:blur(9.11px)] rounded-t-none rounded-b-6xl bg-darkslateblue-200 hidden" />
                <div className="flex flex-col items-start justify-start pt-[1.8px] px-0 pb-0">
                  <img
                    className="w-[9.1px] h-[9.1px] relative z-[5]"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
                <div className="relative text-3xs font-semibold font-kumbh-sans text-white text-center inline-block min-w-[15px] z-[5]">
                  4.6
                </div>
              </button>
            </div>
            <FrameComponent1
              drDianaCruz="Dr. Diana Cruz"
              rs250="Rs. 250"
              generalDentist="General Dentist"
              kms="1.4 Kms"
            />
          </div>
          <div className="self-stretch rounded-11xl bg-white flex flex-row items-end justify-start p-[5px] box-border gap-[15px] max-w-full z-[1] mq344:flex-wrap">
            <div className="h-[136px] w-[408px] relative rounded-11xl bg-white hidden max-w-full" />
            <div className="rounded-6xl bg-gainsboro-200 flex flex-row items-start justify-start pt-24 px-0 pb-0 box-border relative min-w-[120px] z-[2] mq344:flex-1">
              <div className="h-[126px] w-[120px] relative rounded-6xl bg-gainsboro-200 hidden z-[0]" />
              <button className="cursor-pointer [border:none] pt-2 pb-2.5 pr-[46.2px] pl-[47px] bg-darkslateblue-200 [backdrop-filter:blur(9.11px)] rounded-t-none rounded-b-6xl flex flex-row items-start justify-start gap-[2.7px] z-[4]">
                <div className="h-[30px] w-[120px] relative [backdrop-filter:blur(9.11px)] rounded-t-none rounded-b-6xl bg-darkslateblue-200 hidden" />
                <div className="flex flex-col items-start justify-start pt-[1.8px] px-0 pb-0">
                  <img
                    className="w-[9.1px] h-[9.1px] relative z-[5]"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
                <div className="relative text-3xs font-semibold font-kumbh-sans text-white text-center inline-block min-w-[15px] z-[5]">
                  4.6
                </div>
              </button>
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-6xl max-w-full overflow-hidden max-h-full object-cover z-[3]"
                  alt=""
                  src="/pexels-photo-by-andrea-piacquadio@2x.png"
                />
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-6xl max-w-full overflow-hidden max-h-full object-cover z-[6]"
                  alt=""
                  src="/pexels-photo-by-andrea-piacquadio-2@2x.png"
                />
              </div>
            </div>
            <FrameComponent1
              drDianaCruz="Dr. Hector Wills"
              rs250="Rs. 500"
              generalDentist="Dental Surgeon"
              kms="1.9 Kms"
              propGap="20px"
              propMinWidth="96px"
            />
          </div>
          <div className="self-stretch rounded-11xl bg-white flex flex-row items-end justify-start p-[5px] box-border gap-[15px] max-w-full z-[1] text-center text-3xs text-white mq344:flex-wrap">
            <div className="h-[136px] w-[408px] relative rounded-11xl bg-white hidden max-w-full" />
            <div className="rounded-6xl bg-gainsboro-200 flex flex-row items-start justify-start pt-24 px-0 pb-0 box-border relative min-w-[120px] z-[2] mq344:flex-1">
              <div className="h-[126px] w-[120px] relative rounded-6xl bg-gainsboro-200 hidden z-[0]" />
              <div className="[backdrop-filter:blur(9.11px)] rounded-t-none rounded-b-6xl bg-darkslateblue-200 flex flex-row items-start justify-start pt-2 pb-2.5 pr-[46.2px] pl-[47px] gap-[2.7px] z-[4]">
                <div className="h-[30px] w-[120px] relative [backdrop-filter:blur(9.11px)] rounded-t-none rounded-b-6xl bg-darkslateblue-200 hidden" />
                <div className="flex flex-col items-start justify-start pt-[1.8px] px-0 pb-0">
                  <img
                    className="w-[9.1px] h-[9.1px] relative z-[5]"
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
                <div className="relative font-semibold inline-block min-w-[15px] z-[5]">
                  4.6
                </div>
              </div>
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-6xl max-w-full overflow-hidden max-h-full object-cover z-[3]"
                  alt=""
                  src="/pexels-photo-by-andrea-piacquadio@2x.png"
                />
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-6xl max-w-full overflow-hidden max-h-full object-cover z-[6]"
                  alt=""
                  src="/pexels-photo-by-andrea-piacquadio-4@2x.png"
                />
              </div>
            </div>
            <FrameComponent1
              drDianaCruz="Dr. Samantha Keith"
              rs250="Rs. 350"
              generalDentist="Orthodontics"
              kms="2.2 Kms"
              propGap="33px"
              propMinWidth="82px"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <div className="h-2 w-12 relative">
            <div className="absolute top-[8px] left-[0px] [backdrop-filter:blur(20px)] rounded-10xs bg-gray-400 w-2 h-12 [transform:_rotate(-90deg)] [transform-origin:0_0] z-[1]" />
            <div className="absolute top-[8px] left-[0px] rounded-10xs bg-white w-2 h-[15px] [transform:_rotate(-90deg)] [transform-origin:0_0] z-[2]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
