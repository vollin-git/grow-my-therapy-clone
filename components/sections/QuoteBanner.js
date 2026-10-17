import Image from "next/image";
import { Section, Block } from "@/components/Fluid";
import { IMAGES } from "@/components/images";

export default function QuoteBanner() {
  return (
    <Section
      theme="black"
      rowsM={2}
      rowsD={10}
      padY={6.6}
      minH={66}
      className="relative overflow-hidden"
      /* The photo and its overlay supply the background here, so the theme's
         solid fill is cleared — otherwise it would paint over the image. */
      style={{ backgroundColor: "transparent" }}
      background={
        <div className="absolute inset-0">
          <Image
            src={IMAGES.quoteBanner.src}
            alt={IMAGES.quoteBanner.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-ink/54" />
        </div>
      }
    >
      <Block m="1/2/3/10" d="5/3/11/19" rte>
        <h2>
          You don&rsquo;t have to be in crisis to deserve support.{" "}
          <em>
            Therapy works best when you feel respected, understood and actively
            involved in it.
          </em>
        </h2>
      </Block>
    </Section>
  );
}
