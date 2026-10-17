import Link from "next/link";
import { Section, Block } from "@/components/Fluid";
import { FAQS } from "@/components/faqData";

const HOME_FAQS = FAQS.filter((f) => f.home);

/**
 * Homepage FAQ. Built on the same fluid grid as the rest of the page so the
 * gutters and rhythm match; uses <details> so it needs no JavaScript and
 * stays keyboard accessible.
 */
export default function Faq() {
  return (
    <Section theme="white" rowsM={30} rowsD={16} padY={6.6} minH={66}>
      <Block m="1/2/4/10" d="1/3/5/10" rte align="start">
        <h3>
          Questions people <span className="script">ask</span> first
        </h3>
      </Block>

      <Block m="5/2/29/10" d="1/11/15/26" align="start">
        <div>
          {HOME_FAQS.map(({ q, a }) => (
            <details
              key={q}
              className="group border-b border-rule py-5 first:border-t"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-[1.22rem] leading-snug marker:hidden">
                <span>{q}</span>
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-sage transition-transform duration-300 group-open:rotate-45"
                >
                  &#43;
                </span>
              </summary>
              <p className="mt-4">{a}</p>
            </details>
          ))}
          <Link href="/faqs" className="btn-underline mt-7 inline-block">
            See all questions
          </Link>
        </div>
      </Block>
    </Section>
  );
}
