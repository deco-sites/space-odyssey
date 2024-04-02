import { animated, useScroll } from "@react-spring/web";
import { useEffect, useState } from "preact/compat";

const SCREENS = 3;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    globalThis.addEventListener("resize", handleResize);
    return () => globalThis.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export default function Hero() {
  const { height } = useWindowDimensions();
  const { scrollY } = useScroll({
    default: {
      immediate: true,
    },
  });

  return (
    <>
      <div class="fixed bg-white hidden">
        <div>{height}</div>
        <animated.div>
          {scrollY}
        </animated.div>
        <animated.div>
          {scrollY.to((y) => y / height)}
        </animated.div>
      </div>
      <div class="h-[440vh] bg-[#040200]">
        <animated.div class="text-stone-100 text-[9.95vw] fixed leading-none top-[-1vw] opacity-80">
          2001: A Space Odyssey
        </animated.div>
        <animated.div
          class="w-[10vw] h-[10vw] bg-[#D6CFCD] rounded-full fixed left-[calc(50%-5vw)]"
          style={{
            top: scrollY.to((y) => {
              const duration = SCREENS;
              const percentageStart = 0.6;
              const percentageEnd = 0.075;
              const delta = percentageEnd - percentageStart;
              const animationDuration = y / (height * duration);

              if (animationDuration >= 1) {
                return `${percentageEnd * height}px`;
              }

              return `${
                (percentageStart + (animationDuration * delta)) * height
              }px`;
            }),
            boxShadow: "0 0 50vw 5vw rgba(255, 160, 60, 0.5)",
          }}
        >
        </animated.div>
        <animated.div
          class="w-[36vw] h-[36vw] bg-stone-500 rounded-full fixed left-[calc(50%-18vw)] top-[36%]"
          style={{
            background:
              "radial-gradient(circle at 50% 60%, #040200, #040200 60%, #98978D 80%)",
            boxShadow:
              `inset 0 0.2vw 0.25vw rgba(255, 255, 255, 0.4), 0 -5vw 10vw rgba(255, 160, 60, 0.1)`,
          }}
        >
        </animated.div>
        <animated.div
          class="w-[120vw] h-[120vw] bg-slate-900 rounded-full fixed left-[calc(50%-60vw)]"
          style={{
            top: scrollY.to((y) => {
              const duration = SCREENS;
              const percentageStart = 0.16;
              const percentageEnd = 1;
              const delta = percentageEnd - percentageStart;
              const animationPercentage = y / (height * duration);

              if (animationPercentage >= 1) {
                return `${percentageEnd * height}px`;
              }

              return `${
                (percentageStart + (animationPercentage * delta)) * height
              }px`;
            }),
            background:
              "radial-gradient(circle at 50% 60%, #040200, #040200 55%, #111824 80%)",
            boxShadow:
              `inset 0 0.2vw 2vw rgba(0, 0, 0, 0.3), 0 -5vw 10vw rgba(0, 0, 0, 0.3)`,
          }}
        >
        </animated.div>
      </div>
      <div class="min-h-[500vh]  relative">
        <div
          class="h-[25vh] mt-[-25vh]"
          style={{
            background: "linear-gradient(to top, #040200, rgba(0,0,0,0) 80%)",
          }}
        >
        </div>
        <div class="pt-10 bg-[#040200] min-h-[450vh]">Hola!</div>
      </div>
    </>
  );
}
