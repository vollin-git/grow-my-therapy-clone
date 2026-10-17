import Image from "next/image";
import Link from "next/link";
import { Section, Block } from "@/components/Fluid";
import { IMAGES } from "@/components/images";

export default function Hero() {
  return (
    <Section theme="light" rowsM={24} rowsD={18} padTop="var(--header-h)">
      <Block m="2/2/5/10" d="2/12/4/20" className="flex items-center">
        <p className="eyebrow">
          In-person in Santa Monica &amp; online across California
        </p>
      </Block>

      <Block m="5/2/12/10" d="7/12/15/24" rte>
        <h1>
          Feel <span className="script">Safe</span> Every Day: Adult Therapy in
          Santa Monica, CA
        </h1>
        <p>
          For adults who look fine on the outside but feel exhausted, on edge,
          or stuck in overthinking. Dr. Maya Reynolds, PsyD, is a licensed
          clinical psychologist serving Santa Monica and greater Los Angeles.
          Now accepting new clients.
        </p>
      </Block>

      <Block
        m="12/2/14/10"
        d="15/12/17/24"
        className="flex flex-col items-center justify-center"
      >
        <Link href="/contact" className="btn-underline">
          Book a Free 15-Minute Consult
        </Link>
        <p className="t-small mt-2 text-center text-ink/60">
          Confidential &middot; No waitlist &middot; Flexible scheduling
        </p>
      </Block>

      <Block m="15/1/24/8" d="2/1/17/10">
        <Image
          src={IMAGES.heroMain.src}
          alt={IMAGES.heroMain.alt}
          fill
          priority
          sizes="(max-width: 767px) 560px, 72vw"
          /* Wide 1.78:1 source in a portrait slot: bias the crop right so the
             subject stays in frame instead of being cut by a centred crop.
             `sizes` must describe the width object-cover actually needs to
             fill the slot's HEIGHT (~1019px here), not the slot's width —
             otherwise the browser fetches a small rendition and upscales. */
          className="object-cover object-[42%_center]"
        />
      </Block>

      <Block m="18/9/24/11" d="7/25/17/27">
        <Image
          src={IMAGES.heroInset.src}
          alt={IMAGES.heroInset.alt}
          fill
          sizes="(max-width: 767px) 320px, 42vw"
          className="object-cover"
        />
      </Block>
    </Section>
  );
}
