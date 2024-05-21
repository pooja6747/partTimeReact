import { useMemo } from "react";

const FrameComponent1 = ({
  drDianaCruz,
  rs250,
  generalDentist,
  kms,
  propGap,
  propMinWidth,
}) => {
  const doctorCardStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const generalDentistStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[15px] min-w-[169px] text-left text-xl text-darkslateblue-100 font-kumbh-sans">
      <div
        className="self-stretch flex flex-row items-end justify-between gap-[20px]"
        style={doctorCardStyle}
      >
        <div className="flex flex-col items-start justify-start">
          <h1 className="m-0 relative text-inherit font-bold font-inherit z-[2]">
            {drDianaCruz}
          </h1>
          <div className="relative text-xs tracking-[0.02em] font-medium text-darkslateblue-300 inline-block min-w-[59px] z-[3]">
            BDS, MDS
          </div>
        </div>
        <div className="flex flex-col items-start justify-end pt-0 px-0 pb-2">
          <img
            className="w-11 h-11 relative z-[2]"
            loading="lazy"
            alt=""
            src="/group-21397-1.svg"
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-end justify-start py-0 pr-[7px] pl-0 gap-[5px] text-smi">
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="flex flex-row items-start justify-start gap-[20px]">
            <div className="flex flex-col items-start justify-start">
              <div className="relative font-extrabold inline-block min-w-[45px] z-[2]">
                {rs250}
              </div>
              <div className="relative text-3xs tracking-[0.02em] font-medium text-darkslateblue-300 inline-block min-w-[53px] z-[3]">
                Per session
              </div>
            </div>
            <div className="w-0 flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
              <img
                className="w-0 h-4 relative object-contain z-[2]"
                alt=""
                src="/line-134.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start">
              <div
                className="relative font-extrabold inline-block min-w-[98px] z-[2]"
                style={generalDentistStyle}
              >
                {generalDentist}
              </div>
              <div className="relative text-3xs tracking-[0.02em] font-medium text-darkslateblue-300 inline-block min-w-[48px] z-[3]">
                Speciality
              </div>
            </div>
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-[3px] px-[5px] bg-darkorange w-[72px] rounded-11xl flex flex-row items-start justify-start box-border gap-[2px] z-[2]">
          <div className="h-[23px] w-[72px] relative rounded-11xl bg-darkorange hidden" />
          <img
            className="h-[17px] w-[17px] relative overflow-hidden shrink-0 min-h-[17px] z-[3]"
            alt=""
            src="/frame-245-1.svg"
          />
          <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
            <div className="relative text-3xs uppercase font-extrabold font-kumbh-sans text-white text-center inline-block min-w-[38px] z-[3]">
              {kms}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent1;
