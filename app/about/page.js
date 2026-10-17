import Image from "next/image";
import { IMAGES } from "@/components/images";
import { Section } from "@/components/Fluid";
import PageHero from "@/components/PageHero";
import ConsultCta from "@/components/ConsultCta";

export const metadata = {
  alternates: { canonical: "/about" },
  title: "About Dr. Maya Reynolds, PsyD | Psychologist in Santa Monica",
  description:
    "Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist in Santa Monica, CA, treating anxiety, panic, trauma and burnout with CBT, EMDR and somatic work.",
};

const CREDENTIALS = [
  ["Licence", "Licensed Clinical Psychologist (PsyD)"],
  ["Practice", "Individual therapy with adults"],
  ["Location", "Santa Monica, CA — plus telehealth statewide"],
  ["Methods", "CBT · EMDR · Mindfulness · Body-oriented techniques"],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Dr. Maya Reynolds, PsyD"
        lead="I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences."
      />

      {/* Portrait + the heart of the bio */}
      <Section theme="white" plain padY={6.6}>
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-[5vw]">
          <div className="md:w-[38%]">
            <div className="relative aspect-2/3 w-full max-w-sm overflow-hidden md:max-w-none">
              <Image
                src={IMAGES.portrait.src}
                alt={IMAGES.portrait.alt}
                fill
                sizes="(max-width: 767px) 88vw, 38vw"
                className="object-cover object-top"
              />
            </div>
            <dl className="mt-8 border-l-4 border-sage py-4 pl-6">
              {CREDENTIALS.map(([k, v]) => (
                <div key={k} className="mb-4 last:mb-0">
                  <dt className="eyebrow text-sage-deep!">{k}</dt>
                  <dd className="t-small mt-1">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rte md:w-[62%]">
            <h2>Who I work with</h2>
            <p>
              Many of the people I work with are high-achieving, thoughtful and
              self-aware &mdash; but internally feel exhausted, stuck in
              overthinking, or emotionally on edge. They often describe being
              &ldquo;functional&rdquo; on the outside while quietly struggling
              with constant worry, tension in the body, difficulty sleeping, or
              a sense that they are always bracing for something to go wrong.
            </p>
            <p>
              Others are navigating the impact of earlier life experiences that
              continue to affect their relationships, their confidence, or
              their sense of safety.
            </p>

            <h2>My approach</h2>
            <p>
              I take a warm, collaborative and grounded approach to therapy.
              Sessions are structured enough to feel supportive, while still
              leaving space for reflection and depth. I integrate evidence-based
              methods &mdash; cognitive-behavioural therapy (CBT), EMDR,
              mindfulness-based practices and body-oriented techniques &mdash;
              to help you understand both the emotional and the physiological
              sides of what you are experiencing.
            </p>
            <p>
              I believe therapy works best when clients feel respected,
              understood and actively involved in the process. My goal is not
              just symptom relief, but helping you develop insight, resilience
              and a stronger relationship with yourself over time.
            </p>

            <h2>Trauma work</h2>
            <p>
              Trauma work is an important part of my practice. I work with
              adults who have experienced single-incident trauma as well as
              more complex, long-standing patterns that may stem from
              childhood, relationships or chronic stress. My approach is paced
              carefully, with an emphasis on safety, stabilisation, and helping
              you feel more regulated in daily life &mdash; not just during
              sessions.
            </p>

            <h2>Burnout and high internal pressure</h2>
            <p>
              Alongside trauma and anxiety, I frequently support clients dealing
              with professional burnout, perfectionism and relentless internal
              pressure. Many are entrepreneurs, creatives or professionals who
              feel disconnected from themselves after years of pushing through
              stress. Therapy can become a space to slow down, reconnect, and
              develop more sustainable ways of living and working.
            </p>

            <h2>In person and online</h2>
            <p>
              I offer in-person therapy from my Santa Monica office and secure
              telehealth sessions for clients located anywhere in California. If
              you are looking for a therapist who combines practical tools with
              depth-oriented work &mdash; and who understands the realities of
              living and working in a fast-paced environment &mdash; I may be a
              good fit.
            </p>
          </div>
        </div>
      </Section>

      <ConsultCta />
    </>
  );
}
