import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/components/images";
import { Section, Block } from "@/components/Fluid";

export default function Intro() {
  return (
    <Section theme="light" rowsM={28} rowsD={17} padY={7} minH={70} colGap={20}>
      <Block m="1/2/5/10" d="4/3/8/16" rte>
        <h2>
          Functional on the outside. Exhausted underneath. You don&rsquo;t have
          to keep bracing for the next thing.
        </h2>
      </Block>

      <Block m="5/2/13/10" d="9/3/16/10" rte>
        <p className="eyebrow">
          Anxiety &amp; trauma therapy for adults in Santa Monica, California
        </p>
        <p>
          Most of the people I work with are high-achieving, thoughtful and
          self-aware &mdash; and quietly worn out. Constant worry, tension held
          in the body, broken sleep, or the sense that something is about to go
          wrong. Others are carrying earlier experiences that still shape their
          relationships, confidence and sense of safety.
        </p>
      </Block>

      <Block m="22/2/29/10" d="9/10/17/17" rte>
        <p>
          I&rsquo;m Dr. Maya Reynolds, PsyD, a licensed clinical psychologist
          and trauma therapist in Santa Monica. My work is warm, collaborative
          and grounded, drawing on CBT, EMDR, mindfulness and body-oriented
          techniques &mdash; at a pace you set.
        </p>
        <Link href="/about" className="btn-underline mt-2 inline-block">
          More about me
        </Link>
      </Block>

      {/* The grid block is only portrait-shaped near desktop width — it is
          1.47:1 at 390px and 0.30:1 at 768px, which cropped the headshot
          badly. Pinning the image to the photo's own 2:3 ratio and centring
          it keeps the full frame at every width; desktop is unchanged. */}
      <Block
        m="14/2/21/10"
        d="1/19/17/27"
        className="flex items-center justify-center"
      >
        <div className="relative aspect-2/3 w-full max-w-sm md:max-w-none">
          <Image
            src={IMAGES.portrait.src}
            alt={IMAGES.portrait.alt}
            fill
            sizes="(max-width: 767px) 88vw, 32vw"
            className="object-cover object-top"
          />
        </div>
      </Block>
    </Section>
  );
}
