import Link from "next/link";
import { Section, Block } from "@/components/Fluid";

const CARDS = [
  {
    title: "CBT",
    href: "/approach#cbt",
    body: "Cognitive-behavioural therapy gives us a clear way to examine the thoughts and habits that keep anxiety running, and to practise concrete alternatives between sessions. Structured, practical, and useful from the first few weeks.",
    m: "6/2/13/10",
    d: "4/11/11/18",
    link_m: "13/2/15/10",
    link_d: "11/11/13/18",
  },
  {
    title: "EMDR",
    href: "/approach#emdr",
    body: "Eye Movement Desensitisation and Reprocessing helps the brain process memories that still feel raw, so they lose their charge. I use it for both single-incident trauma and longer-standing patterns, always paced with stabilisation first.",
    m: "16/2/23/10",
    d: "15/11/22/18",
    link_m: "23/2/25/10",
    link_d: "22/11/24/18",
  },
  {
    title: "Mindfulness-Based Practices",
    href: "/approach#mindfulness",
    body: "Simple, secular attention practices that interrupt overthinking and help you notice what's happening before it escalates. Not about emptying your mind — about getting some choice back in how you respond.",
    m: "26/2/33/10",
    d: "4/19/11/26",
    link_m: "33/2/35/10",
    link_d: "11/19/13/26",
  },
  {
    title: "Body-Oriented Techniques",
    href: "/approach#somatic",
    body: "Anxiety and trauma live in the body as much as the mind — the braced shoulders, the shallow breath, the sleep that won't come. Somatic work addresses the physiological side directly, so regulation becomes something you can feel.",
    m: "36/2/42/10",
    d: "15/19/22/26",
    link_m: "42/2/44/10",
    link_d: "22/19/24/26",
  },
];

export default function Specialties() {
  return (
    <Section theme="white" rowsM={44} rowsD={25}>
      <Block m="3/2/5/10" d="3/3/7/10" rte>
        <h3>
          The methods I <span className="script">work</span> with
        </h3>
      </Block>

      {CARDS.map((c) => (
        <Block key={c.title} m={c.m} d={c.d} rte align="start">
          <h4>{c.title}</h4>
          <p>{c.body}</p>
        </Block>
      ))}

      {CARDS.map((c) => (
        <Block
          key={c.title}
          m={c.link_m}
          d={c.link_d}
          className="flex items-start"
        >
          <Link href={c.href} className="btn-underline">
            Learn more
          </Link>
        </Block>
      ))}
    </Section>
  );
}
