import { Section, Block } from "@/components/Fluid";

/* Each entry is an area pair taken from the original grid; `rule` entries are
   the thin dividers Squarespace places as separate blocks between items. */
const ITEMS = [
  { label: "Anxiety", m: "4/2/6/10", d: "1/10/3/18" },
  { rule: true, m: "5/2/6/10", d: "2/10/3/17" },
  { label: "Panic attacks", m: "6/2/8/10", d: "3/10/5/18" },
  { rule: true, m: "7/2/8/10", d: "4/10/5/17" },
  { label: "PTSD", m: "8/2/10/10", d: "5/10/7/18" },
  { rule: true, m: "9/2/10/10", d: "6/10/7/17" },
  { label: "Complex trauma", m: "10/2/12/10", d: "7/10/9/18" },
  { rule: true, m: "11/2/12/10", d: "8/10/9/17" },
  { label: "Childhood trauma", m: "12/2/14/10", d: "9/10/11/18" },
  { rule: true, m: "13/2/14/10", d: "10/10/11/17" },
  { label: "Chronic stress", m: "14/2/16/10", d: "11/10/13/18" },
  { rule: true, m: "15/2/16/10", d: "2/18/3/25" },
  { label: "Burnout", m: "16/2/18/10", d: "1/18/3/26" },
  { rule: true, m: "17/2/18/10", d: "4/18/5/25" },
  { label: "Sleep difficulties", m: "18/2/20/10", d: "3/18/5/26" },
  { rule: true, m: "19/2/20/10", d: "6/18/7/25" },
  { label: "Overthinking", m: "20/2/22/10", d: "5/18/7/26" },
  { rule: true, m: "21/2/22/10", d: "8/18/9/25" },
  { label: "Perfectionism", m: "22/2/24/10", d: "7/18/9/26" },
  { rule: true, m: "23/2/24/10", d: "10/18/11/25" },
  { label: "Emotional regulation", m: "24/2/26/10", d: "9/18/11/26" },
  { label: "…and more.", m: "26/2/28/10", d: "11/18/13/26" },
];

export default function Expertise() {
  return (
    <Section theme="white" rowsM={27} rowsD={12} padY={8} minH={80}>
      <Block m="1/2/3/10" d="1/3/4/9" rte>
        <h3>
          What I <span className="script">work</span> with
        </h3>
      </Block>

      {ITEMS.map((item, i) =>
        item.rule ? (
          <Block
            key={`rule-${i}`}
            m={item.m}
            d={item.d}
            className="flex items-end"
          >
            <hr className="w-full border-0 border-t border-rule" />
          </Block>
        ) : (
          <Block
            key={item.label}
            m={item.m}
            d={item.d}
            className="flex items-start"
          >
            <p className="eyebrow">{item.label}</p>
          </Block>
        )
      )}
    </Section>
  );
}
