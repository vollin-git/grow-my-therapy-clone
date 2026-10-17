import Link from "next/link";
import { FAQS, faqJsonLd } from "@/components/faqData";
import { Section } from "@/components/Fluid";
import PageHero from "@/components/PageHero";
import ConsultCta from "@/components/ConsultCta";

export const metadata = {
  alternates: { canonical: "/faqs" },
  title: "FAQs | Therapy with Dr. Maya Reynolds, Santa Monica",
  description:
    "Common questions about therapy with Dr. Maya Reynolds, PsyD in Santa Monica — who she works with, EMDR and CBT, online sessions across California, and getting started.",
};

export default function FaqsPage() {
  const jsonLd = faqJsonLd(FAQS);

  return (
    <>
      {/* FAQPage structured data — makes these eligible for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="FAQs"
        title="Questions people ask before booking"
        lead="If something here isn’t covered, the free 15-minute consult is a good place to ask it."
      />

      <Section theme="white" plain padY={6.6}>
        <div className="max-w-[52rem]">
          {FAQS.map(({ q, a }) => (
            <details
              key={q}
              className="group border-b border-rule py-6 first:border-t"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-[1.35rem] leading-snug marker:hidden">
                <span>{q}</span>
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-sage transition-transform duration-300 group-open:rotate-45"
                >
                  &#43;
                </span>
              </summary>
              <p className="mt-5 max-w-[44rem]">{a}</p>
            </details>
          ))}
        </div>

        <p className="mt-14 max-w-[44rem]">
          Still deciding?{" "}
          <Link href="/about" className="underline hover:text-sage-deep">
            Read more about how I work
          </Link>{" "}
          or{" "}
          <Link href="/services" className="underline hover:text-sage-deep">
            see what I treat
          </Link>
          .
        </p>
      </Section>

      <ConsultCta
        heading="Still have a question?"
        body="Ask it on a free 15-minute call. No pressure, and no obligation to book anything afterwards."
      />
    </>
  );
}
