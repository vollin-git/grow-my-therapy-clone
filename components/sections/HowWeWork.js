import Image from "next/image";
import Link from "next/link";
import { Section, Block } from "@/components/Fluid";
import { IMAGES } from "@/components/images";

export default function HowWeWork() {
  return (
    <Section theme="bright" rowsM={41} rowsD={24} colGap={20}>
      <Block m="3/2/5/10" d="4/3/6/15" rte>
        <p className="eyebrow">How we&rsquo;ll work together</p>
      </Block>

      <Block m="5/2/8/9" d="8/3/10/20" rte>
        <h2>Practical tools, and the depth to go underneath them.</h2>
      </Block>

      <Block m="9/2/17/10" d="4/21/22/27">
        <Image
          src={IMAGES.approach.src}
          alt={IMAGES.approach.alt}
          fill
          sizes="(max-width: 767px) 85vw, 70vw"
          className="object-cover"
        />
      </Block>

      <Block m="18/2/28/10" d="11/3/20/11" rte>
        <p className="eyebrow">
          Most people who reach out have been coping for a long time before
          they ever book a session.
        </p>
        <p>
          Sessions are structured enough to feel supportive, while still
          leaving room for reflection and depth. Early on we get clear on what
          you want to be different &mdash; sleeping through the night, getting
          through a workday without bracing, being able to say no &mdash; and
          we work toward that rather than an abstract idea of being fixed.
        </p>
      </Block>

      <Block m="28/2/38/10" d="11/11/20/19" rte>
        <p>
          I integrate evidence-based methods &mdash; CBT, EMDR, mindfulness and
          body-oriented techniques &mdash; and choose between them based on you
          rather than on a protocol. Trauma work in particular is paced
          carefully, with safety and stabilisation first. The goal isn&rsquo;t
          only symptom relief: it&rsquo;s insight, resilience, and a steadier
          relationship with yourself over time.
        </p>
      </Block>

      <Block m="38/2/40/10" d="21/3/23/19" className="flex items-center">
        <Link href="/about" className="btn-underline">
          More about my approach
        </Link>
      </Block>
    </Section>
  );
}
