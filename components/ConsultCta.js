import Link from "next/link";
import { Section } from "@/components/Fluid";

/** Closing call to action, shared by the inner pages. */
export default function ConsultCta({
  heading = "Let’s find out if we’re the right fit.",
  body = "The consult is a free, no-obligation call. You tell me what’s bringing you here, and I’ll tell you honestly whether I’m the right person to help.",
}) {
  return (
    <Section theme="bright" plain padY={6}>
      <div className="max-w-[44rem]">
        <h2>{heading}</h2>
        <p className="mt-6">{body}</p>
        <Link href="/contact" className="btn-oval mt-9 inline-block">
          Book a Free 15-Minute Consult
        </Link>
        <p className="t-small mt-5 text-ink/60">
          Confidential &middot; No waitlist &middot; Flexible scheduling
        </p>
      </div>
    </Section>
  );
}
