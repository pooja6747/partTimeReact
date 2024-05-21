import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";

const Home = () => {
  return (
    <div className="w-full h-[2482px] relative bg-white overflow-hidden leading-[normal] tracking-[normal] mq350small:h-auto mq350small:min-h-[2482]">
      <img
        className="absolute top-[2034px] left-[0px] w-[428px] h-[100px] z-[1]"
        loading="lazy"
        alt=""
        src="/rectangle-1733.svg"
      />
      <FrameComponent6 />
      <main className="absolute top-[0px] left-[0px] bg-darkorange w-full flex flex-col items-start justify-start pt-0 px-0 pb-[113px] box-border gap-[164px] max-w-full">
        <div className="self-stretch h-[2102px] relative bg-darkorange hidden" />
        <section className="self-stretch flex flex-col items-start justify-start gap-[15px] max-w-full">
          <FrameComponent5 />
          <FrameComponent4 />
          <FrameComponent3 />
          <FrameComponent2 />
        </section>
        <FrameComponent />
      </main>
    </div>
  );
};

export default Home;
