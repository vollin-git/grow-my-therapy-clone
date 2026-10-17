import Image from "next/image";
import Link from "next/link";
import { Section, Block } from "@/components/Fluid";
import { IMAGES } from "@/components/images";

const CARDS = [
  {
    title: "Anxiety & Panic",
    href: "/services#anxiety",
    img: IMAGES.serviceAnxiety,
    body: "Constant worry, tension you carry in your body, nights you can't sleep through. We lower the volume with practical tools you can use day to day.",
    img_m: "4/2/13/10",
    img_d: "4/5/15/12",
    txt_m: "14/2/20/10",
    txt_d: "16/5/21/12",
  },
  {
    title: "Trauma & PTSD",
    href: "/services#trauma",
    img: IMAGES.serviceTrauma,
    body: "Single-incident or long-standing patterns from childhood, relationships or chronic stress. Paced carefully, with safety and stabilisation first.",
    img_m: "21/2/30/10",
    img_d: "4/12/15/19",
    txt_m: "31/2/37/10",
    txt_d: "16/12/22/19",
  },
  {
    title: "Burnout & Perfectionism",
    href: "/services#burnout",
    img: IMAGES.serviceBurnout,
    body: "For entrepreneurs, creatives and professionals running on internal pressure. A place to slow down and rebuild boundaries that hold.",
    img_m: "38/2/47/10",
    img_d: "4/19/15/26",
    txt_m: "48/2/54/10",
    txt_d: "16/19/22/26",
  },
];

export default function WhoWeHelp() {
  return (
    <Section
      theme="white"
      rowsM={53}
      rowsD={21}
      padY={6.6}
      minH={66}
      colGap={20}
    >
      <Block m="1/2/3/10" d="1/2/3/10" rte>
        <h2>
          How I can <span className="script">help</span>
        </h2>
      </Block>

      {CARDS.map((c) => (
        <Block key={c.title} m={c.img_m} d={c.img_d}>
          <Image
            src={c.img.src}
            alt={c.img.alt}
            fill
            sizes="(max-width: 767px) 85vw, 44vw"
            className="object-cover"
          />
        </Block>
      ))}

      {CARDS.map((c) => (
        <Block key={c.title} m={c.txt_m} d={c.txt_d} rte align="start">
          <h4>{c.title}</h4>
          <p>{c.body}</p>
          <Link href={c.href} className="btn-underline mt-4 inline-block">
            Learn more
          </Link>
        </Block>
      ))}
    </Section>
  );
}
