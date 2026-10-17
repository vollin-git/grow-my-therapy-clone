import { Section } from "@/components/Fluid";

/**
 * Compact hero for inner pages. The site header is absolutely positioned
 * over the first band, so the top padding clears it the way the home hero does.
 */
export default function PageHero({ eyebrow, title, lead }) {
  return (
    <Section
      theme="light"
      plain
      padY={5}
      padTop="calc(var(--header-h) + 3vw)"
    >
      <div className="max-w-[48rem]">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="mt-5">{title}</h1>
        {lead ? <p className="mt-7 text-[1.08em]">{lead}</p> : null}
      </div>
    </Section>
  );
}
