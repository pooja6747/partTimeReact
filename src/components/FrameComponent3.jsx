const FrameComponent3 = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-2.5 pb-5 box-border max-w-full">
      <form className="m-0 flex-1 rounded-21xl bg-darkslateblue-100 flex flex-col items-start justify-start pt-[15px] px-[15px] pb-[38px] box-border gap-[20px] max-w-full z-[1]">
        <div className="w-[408px] h-[440px] relative rounded-21xl bg-darkslateblue-100 hidden max-w-full" />
        <div className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
          <input
            className="w-full [border:none] [outline:none] bg-white self-stretch h-[50px] [backdrop-filter:blur(10px)] rounded-6xl flex flex-row items-start justify-start pt-3.5 px-[25px] pb-4 box-border font-kumbh-sans font-bold text-base text-darkslateblue-300 min-w-[227px] z-[2]"
            placeholder="Enter Name"
            type="text"
          />
          <div className="self-stretch [backdrop-filter:blur(10px)] rounded-6xl bg-white flex flex-row items-start justify-start pt-3.5 px-[25px] pb-4 box-border relative whitespace-nowrap max-w-full z-[2]">
            <div className="h-[50px] w-[378px] relative [backdrop-filter:blur(10px)] rounded-6xl bg-white hidden max-w-full z-[0]" />
            <b className="relative text-base inline-block font-kumbh-sans text-darkslateblue-300 text-left min-w-[93px] z-[3]">{`Date & Time`}</b>
            <img
              className="h-[18px] w-[18px] absolute !m-[0] top-[calc(50%_-_9px)] right-[20px] overflow-hidden shrink-0 object-contain z-[3]"
              alt=""
              src="/materialsymbolskeyboardarrowdownrounded@2x.png"
            />
          </div>
          <div className="self-stretch [backdrop-filter:blur(10px)] rounded-6xl bg-white flex flex-row items-start justify-start pt-3.5 px-[25px] pb-4 box-border relative max-w-full z-[2]">
            <div className="h-[50px] w-[378px] relative [backdrop-filter:blur(10px)] rounded-6xl bg-white hidden max-w-full z-[0]" />
            <b className="relative text-base inline-block font-kumbh-sans text-darkslateblue-300 text-left min-w-[65px] z-[3]">
              Problem
            </b>
            <img
              className="h-[18px] w-[18px] absolute !m-[0] top-[calc(50%_-_9px)] right-[20px] overflow-hidden shrink-0 object-contain z-[3]"
              alt=""
              src="/materialsymbolskeyboardarrowdownrounded@2x.png"
            />
          </div>
          <div className="self-stretch [backdrop-filter:blur(10px)] rounded-6xl bg-white flex flex-row items-start justify-start pt-3.5 px-[25px] pb-4 box-border relative max-w-full z-[2]">
            <div className="h-[50px] w-[378px] relative [backdrop-filter:blur(10px)] rounded-6xl bg-white hidden max-w-full z-[0]" />
            <b className="relative text-base inline-block font-kumbh-sans text-darkslateblue-300 text-left min-w-[83px] z-[3]">
              Consultant
            </b>
            <img
              className="h-[18px] w-[18px] absolute !m-[0] top-[calc(50%_-_9px)] right-[20px] overflow-hidden shrink-0 object-contain z-[3]"
              alt=""
              src="/materialsymbolskeyboardarrowdownrounded@2x.png"
            />
          </div>
          <div className="self-stretch [backdrop-filter:blur(10px)] rounded-6xl bg-white flex flex-row items-start justify-start pt-3.5 px-[25px] pb-4 box-border relative whitespace-nowrap max-w-full z-[2]">
            <div className="h-[50px] w-[378px] relative [backdrop-filter:blur(10px)] rounded-6xl bg-white hidden max-w-full z-[0]" />
            <b className="relative text-base inline-block font-kumbh-sans text-darkslateblue-300 text-left min-w-[126px] z-[3]">{`Test & Medicines`}</b>
            <img
              className="h-[18px] w-[18px] absolute !m-[0] top-[calc(50%_-_9px)] right-[20px] overflow-hidden shrink-0 object-contain z-[3]"
              alt=""
              src="/materialsymbolskeyboardarrowdownrounded@2x.png"
            />
          </div>
        </div>
        <button className="cursor-pointer [border:none] pt-[15px] px-5 pb-[17px] bg-darkorange self-stretch rounded-11xl flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full z-[2] hover:bg-chocolate">
          <div className="h-[57px] w-[378px] relative rounded-11xl bg-darkorange hidden max-w-full" />
          <div className="relative text-xl uppercase font-extrabold font-kumbh-sans text-white text-center z-[3]">
            Book Appointment
          </div>
        </button>
      </form>
    </div>
  );
};

export default FrameComponent3;
