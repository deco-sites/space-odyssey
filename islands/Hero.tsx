import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Hero() {
const alignCenter = { display: 'flex', alignItems: 'center' }
  return (
      <Parallax pages={3} class="bg-stone-950">
        <ParallaxLayer offset={0.75} speed={0.5} class="bg-cyan-950 rounded-full w-[75vw] h-[72vw]">
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <div>
            <p>I'm a sticky layer</p>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={1.5}>
          <div>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>
      </Parallax>)
}
