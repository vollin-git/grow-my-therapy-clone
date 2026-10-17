import Link from "next/link";
import { Section } from "@/components/Fluid";
import PageHero from "@/components/PageHero";
import ConsultCta from "@/components/ConsultCta";

export const metadata = {
  alternates: { canonical: "/approach" },
  title: "CBT, EMDR & Somatic Therapy in Santa Monica | My Approach",
  description:
    "How I work: cognitive-behavioural therapy, EMDR, mindfulness-based practices and body-oriented techniques, chosen around you rather than a fixed protocol.",
};

/* One page rather than four thin ones — the nav dropdown points at these
   anchors, so each method is still directly linkable. */
const METHODS = [
  {
    id: "cbt",
    name: "Cognitive-Behavioural Therapy (CBT)",
    summary: "Structured, practical, and useful early.",
    body: [
      "CBT gives us a clear way to examine the thoughts and habits that keep anxiety running — the predictions, the rules you hold yourself to, the avoidance that feels like relief in the moment and costs you later.",
      "It is practical work. We identify the patterns, test them against what actually happens, and practise concrete alternatives between sessions. Of everything I use, it is usually the method that produces noticeable change soonest, which matters when you have been struggling for a long time and need something to hold onto.",
    ],
    best: "Anxiety, panic, overthinking, perfectionism",
  },
  {
    id: "emdr",
    name: "EMDR",
    summary: "For memories that still carry a charge.",
    body: [
      "Eye Movement Desensitisation and Reprocessing helps the brain reprocess experiences that have not settled. A memory that still feels raw years later has usually been stored differently from ordinary memory; EMDR works on how it is held rather than asking you to talk through it in detail.",
      "I use it for single-incident trauma and for longer-standing patterns. It is never where we start. We establish safety and stabilisation first, and we only begin reprocessing when you have the resources in place and you feel ready to.",
    ],
    best: "PTSD, single-incident trauma, complex trauma",
  },
  {
    id: "mindfulness",
    name: "Mindfulness-Based Practices",
    summary: "Getting some choice back in how you respond.",
    body: [
      "These are simple, secular attention practices — nothing requiring belief, and nothing about emptying your mind. The aim is to notice what is happening earlier, before a spiral has gathered speed, so there is room between what you feel and what you do next.",
      "For people who live largely in their heads, this is often the first time they notice the build-up rather than only the aftermath.",
    ],
    best: "Rumination, chronic stress, emotional regulation",
  },
  {
    id: "somatic",
    name: "Body-Oriented Techniques",
    summary: "Anxiety and trauma live in the body too.",
    body: [
      "The braced shoulders, the shallow breath, the sleep that will not come, the jolt before anything has consciously registered — these are not side effects of what you are experiencing, they are part of it. Insight alone rarely shifts them.",
      "Somatic work addresses the physiological side directly, so that feeling regulated becomes something you can actually sense rather than a conclusion you reason your way to.",
    ],
    best: "Trauma, panic, tension, difficulty sleeping",
  },
];

export default function ApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="My approach"
        title="Practical tools, and the depth to go underneath them"
        lead="I integrate evidence-based methods and choose between them based on you, rather than on a fixed protocol. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth."
      />

      {METHODS.map((m, i) => (
        <Section
          key={m.id}
          id={m.id}
          theme={i % 2 === 0 ? "white" : "light"}
          plain
          padY={6}
        >
          <div className="flex flex-col gap-8 md:flex-row md:gap-[5vw]">
            <div className="md:w-[34%]">
              <h2>{m.name}</h2>
              <p className="mt-4 font-serif text-[1.25rem] leading-snug italic">
                {m.summary}
              </p>
            </div>
            <div className="md:w-[66%]">
              {m.body.map((para) => (
                <p key={para.slice(0, 40)} className="mb-5 last:mb-0">
                  {para}
                </p>
              ))}
              <div className="mt-7 border-l-4 border-sage py-2 pl-5">
                <p className="eyebrow text-sage-deep!">Often helpful for</p>
                <p className="t-small mt-1">{m.best}</p>
              </div>
            </div>
          </div>
        </Section>
      ))}

      {/* How they fit together */}
      <Section theme="bright" plain padY={6}>
        <div className="max-w-[46rem]">
          <h2>How I choose between them</h2>
          <p className="mt-6">
            Rarely one method on its own. Most weeks the work moves between
            them: a concrete tool for the week ahead, then slowing down to stay
            with something until it loosens. Trauma work in particular is paced
            carefully, with safety and stabilisation first, and nothing moves
            faster than you want it to.
          </p>
          <p className="mt-5">
            I will occasionally offer a perspective you have not considered,
            always with your consent, and never at the cost of feeling safe in
            the room. The goal is not only symptom relief &mdash; it is
            insight, resilience, and a steadier relationship with yourself over
            time.
          </p>
          <p className="mt-7">
            <Link href="/services" className="underline hover:text-sage-deep">
              See what I treat
            </Link>{" "}
            or{" "}
            <Link href="/faqs" className="underline hover:text-sage-deep">
              read common questions
            </Link>
            .
          </p>
        </div>
      </Section>

      <ConsultCta />
    </>
  );
}
