import Image from "next/image";
import Link from "next/link";
import { Section } from "@/components/Fluid";
import PageHero from "@/components/PageHero";
import ConsultCta from "@/components/ConsultCta";
import { IMAGES } from "@/components/images";

export const metadata = {
  alternates: { canonical: "/services" },
  title: "Therapy Services in Santa Monica | Anxiety, Trauma & Burnout",
  description:
    "Therapy for anxiety and panic, trauma and PTSD, and burnout and perfectionism in Santa Monica, CA. CBT, EMDR and somatic work, in person or online across CA.",
};

const SERVICES = [
  {
    id: "anxiety",
    title: "Anxiety & Panic",
    img: IMAGES.serviceAnxiety,
    lead: "A mind that will not switch off, and a body that never quite stands down.",
    looks: [
      "Worry that runs constantly in the background",
      "Tension held in the jaw, shoulders or chest",
      "Difficulty falling asleep, or waking at 3am",
      "Panic that arrives without an obvious trigger",
      "Bracing for something to go wrong",
    ],
    work: "We start by understanding what keeps the alarm switched on — the thoughts, the habits and the physiological patterns that keep it running. From there we build concrete tools you can use between sessions, drawn from CBT and mindfulness-based practice, alongside body-oriented work that addresses the physical side directly.",
    change:
      "Most people notice the volume starting to drop first: sleeping through more nights, getting through a workday without the constant hum, catching a spiral earlier and having something to do about it.",
  },
  {
    id: "trauma",
    title: "Trauma & PTSD",
    img: IMAGES.serviceTrauma,
    lead: "What happened to you shaped how you move through the world. It does not have to keep setting the terms.",
    looks: [
      "Memories that still feel raw or intrusive",
      "Reactions that feel bigger than the situation",
      "Difficulty trusting, or feeling safe with others",
      "Numbness, or feeling disconnected from yourself",
      "Patterns from childhood that keep repeating",
    ],
    work: "I work with single-incident trauma and with more complex, long-standing patterns that stem from childhood, relationships or chronic stress. The pacing is careful and deliberate: safety and stabilisation come first, and we do not move faster than you want to. Where it fits, EMDR helps the brain reprocess memories that still carry a charge.",
    change:
      "The aim is to feel more regulated in daily life — not only in the room. Less hijacked by reminders, more room between a trigger and your response, and a steadier sense of being present in your own life.",
  },
  {
    id: "burnout",
    title: "Burnout & Perfectionism",
    img: IMAGES.serviceBurnout,
    lead: "You have been pushing through for a long time, and it has quietly cost you.",
    looks: [
      "Exhaustion that rest does not seem to fix",
      "Resenting work you used to care about",
      "A standard you can never quite meet",
      "Feeling disconnected from yourself",
      "Guilt whenever you slow down",
    ],
    work: "Many of my clients here are entrepreneurs, creatives and professionals who have run on internal pressure for years. We look at where your energy is actually going, at the beliefs underneath the pressure, and at boundaries that hold up under real-world demands rather than in theory.",
    change:
      "A more sustainable way of living and working — and, usually, reconnecting with what you wanted in the first place, before everything became something to get through.",
  },
];

const METHODS = [
  ["CBT", "Examining the thoughts and habits that keep anxiety running, and practising concrete alternatives between sessions."],
  ["EMDR", "Helping the brain reprocess memories that still feel raw, so they lose their charge. Always paced with stabilisation first."],
  ["Mindfulness-based practices", "Secular attention practices that interrupt overthinking and give you choice in how you respond."],
  ["Body-oriented techniques", "Anxiety and trauma live in the body as much as the mind. Somatic work addresses that directly."],
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Therapy for adults in Santa Monica"
        lead="I work with adults on anxiety and panic, trauma and PTSD, and burnout and perfectionism — in person at my Santa Monica office, or by secure telehealth anywhere in California."
      />

      {SERVICES.map((s, i) => (
        <Section
          key={s.id}
          id={s.id}
          theme={i % 2 === 0 ? "white" : "light"}
          plain
          padY={6.6}
        >
          <div
            className={`flex flex-col gap-10 md:gap-[5vw] ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } md:items-start`}
          >
            <div className="md:w-[42%]">
              <div className="relative aspect-4/5 w-full overflow-hidden">
                <Image
                  src={s.img.src}
                  alt={s.img.alt}
                  fill
                  sizes="(max-width: 767px) 88vw, 70vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="md:w-[58%]">
              <h2>{s.title}</h2>
              <p className="mt-5 font-serif text-[1.3rem] leading-snug italic">
                {s.lead}
              </p>

              <p className="eyebrow mt-9 text-sage-deep!">What it often looks like</p>
              <ul className="mt-4 flex flex-col gap-2">
                {s.looks.map((l) => (
                  <li key={l} className="flex gap-3">
                    <span aria-hidden="true" className="text-sage">
                      &#10003;
                    </span>
                    <span>{l}</span>
                  </li>
                ))}
              </ul>

              <p className="eyebrow mt-9 text-sage-deep!">How we work on it</p>
              <p className="mt-3">{s.work}</p>

              <p className="eyebrow mt-9 text-sage-deep!">What tends to change</p>
              <p className="mt-3">{s.change}</p>
            </div>
          </div>
        </Section>
      ))}

      {/* Methods */}
      <Section theme="white" plain padY={6.6}>
        <h2 className="max-w-[40rem]">
          The methods I <span className="script">work</span> with
        </h2>
        <div className="mt-12 grid gap-x-[4vw] gap-y-10 sm:grid-cols-2">
          {METHODS.map(([title, body]) => (
            <div key={title}>
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-[44rem]">
          I choose between them based on you rather than on a protocol. Sometimes
          that means practical tools for the week ahead; other times it means
          slowing down and staying with something until it loosens.{" "}
          <Link href="/about" className="underline hover:text-sage-deep">
            More about my approach
          </Link>
          .
        </p>
      </Section>

      {/* Telehealth — target for the "Online Therapy in California" link */}
      <Section id="online" theme="light" plain padY={6.6}>
        <div className="max-w-[46rem]">
          <h2>Online therapy across California</h2>
          <p className="mt-6">
            Alongside in-person sessions at my Santa Monica office, I offer
            secure telehealth to anyone located in California. The work itself
            is the same &mdash; CBT, EMDR, mindfulness and body-oriented
            techniques all translate well to video, and for some people the
            familiarity of their own space makes it easier to settle.
          </p>
          <p className="mt-5">
            Many clients mix the two depending on the week. If you&rsquo;re in
            Los Angeles and the drive to Santa Monica is the thing standing in
            the way, online is usually the answer.
          </p>
        </div>
      </Section>

      <ConsultCta />
    </>
  );
}
