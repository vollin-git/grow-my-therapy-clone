import Image from "next/image";
import Link from "next/link";
import { Section, Block } from "@/components/Fluid";
import { IMAGES } from "@/components/images";

export default function Schedule() {
  return (
    <Section theme="light" rowsM={31} rowsD={16} padY={6.6} minH={66}>
      <Block m="1/1/7/6" d="4/1/16/4">
        <Image
          src={IMAGES.scheduleInset.src}
          alt={IMAGES.scheduleInset.alt}
          fill
          sizes="(max-width: 767px) 420px, 36vw"
          /* Narrow vertical slot (~0.35:1) from a 1.1:1 frame keeps only a
             sliver, so it is aimed at the plant and wall rather than the teal sofa. */
          className="object-cover object-[100%_32%]"
        />
      </Block>

      <Block m="8/2/10/10" d="1/6/3/16" rte>
        <p className="eyebrow">Book a free 15-minute consult</p>
      </Block>

      <Block m="10/2/13/10" d="4/6/8/16" rte>
        <h2>
          Let&rsquo;s find out if we&rsquo;re the right{" "}
          <span className="script">fit</span>.
        </h2>
      </Block>

      <Block m="13/2/21/10" d="8/6/14/16" rte>
        <p>
          Choosing a therapist is a personal decision, and you shouldn&rsquo;t
          have to commit before you know how someone feels to talk to. The
          consult is a free, no-obligation call: you tell me what&rsquo;s
          bringing you here, I&rsquo;ll tell you honestly whether I&rsquo;m the
          right fit, and if I&rsquo;m not, I&rsquo;ll point you toward someone
          who is.
        </p>
        <p>
          I&rsquo;m currently accepting new clients for in-person sessions in
          Santa Monica and online therapy across California.
        </p>
      </Block>

      <Block m="21/2/23/10" d="14/6/16/16" className="flex items-start">
        <Link href="/contact" className="btn-oval">
          Book a Free 15-Minute Consult
        </Link>
      </Block>

      <Block m="24/3/32/11" d="1/18/16/27">
        <Image
          src={IMAGES.scheduleMain.src}
          alt={IMAGES.scheduleMain.alt}
          fill
          sizes="(max-width: 767px) 85vw, 58vw"
          /* Two subjects sit at opposite edges of this landscape frame, so the
             crop is centred between them to keep both in shot. */
          className="object-cover object-[52%_center]"
        />
      </Block>
    </Section>
  );
}
