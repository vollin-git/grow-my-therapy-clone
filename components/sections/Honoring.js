import Image from "next/image";
import { Section, Block } from "@/components/Fluid";
import { IMAGES } from "@/components/images";

export default function Honoring() {
  return (
    <Section theme="white" rowsM={13} rowsD={14} padY={6.6} minH={66}>
      <Block m="1/2/10/11" d="1/1/15/15">
        <Image
          src={IMAGES.comingBack.src}
          alt={IMAGES.comingBack.alt}
          fill
          sizes="(max-width: 767px) 94vw, 58vw"
          className="object-cover"
        />
      </Block>

      <Block m="10/2/14/10" d="9/16/15/26" rte>
        <h2>
          Therapy isn&rsquo;t about becoming someone else. It&rsquo;s about
          coming back to <span className="script">yourself</span>.
        </h2>
      </Block>
    </Section>
  );
}
