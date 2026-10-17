import Link from "next/link";
import { Section, Block } from "@/components/Fluid";
import Wordmark from "@/components/Wordmark";

const NAVIGATE = [
  ["Home", "/"],
  ["About", "/about"],
  ["Services", "/services"],
  ["FAQs", "/faqs"],
  ["Contact", "/contact"],
];

const SERVICES = [
  ["Anxiety & Panic", "/services#anxiety"],
  ["Trauma & PTSD", "/services#trauma"],
  ["Burnout & Perfectionism", "/services#burnout"],
  ["EMDR Therapy", "/approach#emdr"],
  ["Online Therapy in California", "/services#online"],
  ["Free 15-Minute Consult", "/contact"],
];

export default function Footer() {
  return (
    <footer>
      <Section theme="white" rowsM={29} rowsD={9} padY={4.5} minH={45}>
        <Block m="2/2/5/10" d="1/2/5/9" className="flex items-start">
          <Wordmark className="max-w-92.5" />
        </Block>

        <Block m="5/2/10/10" d="4/2/9/10" rte>
          <p>
            Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist in
            Santa Monica, CA. Sessions are available in person at the Santa
            Monica office or by secure telehealth anywhere in California.
          </p>
        </Block>

        <Block m="10/3/15/9" d="1/12/6/16" rte align="start">
          <p className="eyebrow">Navigate</p>
          <ul className="flex flex-col">
            {NAVIGATE.map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="t-small hover:text-sage-deep">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </Block>

        <Block m="23/3/30/9" d="1/16/8/21" rte align="start">
          <p className="eyebrow">Services</p>
          <ul className="flex flex-col">
            {SERVICES.map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="t-small hover:text-sage-deep">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </Block>

        <Block m="15/3/23/9" d="1/21/10/26" rte align="start">
          <p className="eyebrow">Contact</p>
          <address className="t-small not-italic break-words">
            123th Street 45 W
            <br />
            Santa Monica, CA 90401
            <br />
            <a
              href="mailto:hello@mayareynoldstherapy.com"
              className="hover:text-sage-deep"
            >
              hello@mayareynoldstherapy.com
            </a>
            <br />
            <a href="tel:3105550147" className="hover:text-sage-deep">
              310.555.0147
            </a>
          </address>
          <p className="t-small italic">
            Serving Santa Monica, Venice, Brentwood, Culver City and greater
            Los Angeles &mdash; plus online therapy across California
          </p>
        </Block>
      </Section>

      <Section theme="dark" rowsM={2} rowsD={1} padY={0.5} minH={5}>
        <Block m="1/2/3/10" d="1/2/2/26" rte>
          <p className="t-small">
            &copy; {new Date().getFullYear()} Dr. Maya Reynolds, PsyD &middot;
            Licensed Clinical Psychologist &middot; Santa Monica, CA
          </p>
        </Block>
      </Section>
    </footer>
  );
}
