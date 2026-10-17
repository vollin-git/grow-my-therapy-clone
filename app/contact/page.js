import Image from "next/image";
import { IMAGES } from "@/components/images";
import { Section } from "@/components/Fluid";
import PageHero from "@/components/PageHero";
import { OFFICE } from "@/components/sections/OurOffice";

export const metadata = {
  alternates: { canonical: "/contact" },
  title: "Book a Free Consult | Dr. Maya Reynolds, Santa Monica",
  description:
    "Book a free 15-minute consult with Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica, CA. In-person sessions and online therapy across California.",
};

/* TODO: phone and email are placeholders — replace with the real details
   before launch. They also appear in the footer. */
const PHONE_DISPLAY = "310.555.0147";
const PHONE_HREF = "tel:3105550147";
const EMAIL = "hello@mayareynoldstherapy.com";

const STEPS = [
  ["You reach out", "Email or call and say as much or as little as you like. A sentence is plenty."],
  ["We talk for 15 minutes", "A free, no-obligation call. You tell me what's bringing you here and ask anything you need to."],
  ["We decide together", "If I'm the right fit, we book a first session. If I'm not, I'll point you toward someone who is."],
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a free 15-minute consult"
        lead="Choosing a therapist is a personal decision, and you shouldn't have to commit before you know how someone feels to talk to. I'm currently accepting new clients — with no waitlist."
      />

      <Section theme="white" plain padY={6.6}>
        <div className="flex flex-col gap-12 md:flex-row md:gap-[5vw]">
          {/* Get in touch */}
          <div className="md:w-[46%]">
            <h2>Get in touch</h2>

            <div className="mt-8 border-l-4 border-sage py-5 pl-6">
              <p className="eyebrow text-sage-deep!">Email</p>
              <p className="mt-1">
                <a
                  href={`mailto:${EMAIL}`}
                  className="break-words underline hover:text-sage-deep"
                >
                  {EMAIL}
                </a>
              </p>

              <p className="eyebrow mt-6 text-sage-deep!">Phone</p>
              <p className="mt-1">
                <a href={PHONE_HREF} className="underline hover:text-sage-deep">
                  {PHONE_DISPLAY}
                </a>
              </p>

              <p className="eyebrow mt-6 text-sage-deep!">Office</p>
              <address className="t-small mt-1 not-italic">
                {OFFICE.street}
                <br />
                {OFFICE.city}
              </address>

              <p className="eyebrow mt-6 text-sage-deep!">Hours</p>
              <p className="t-small mt-1">
                {OFFICE.hoursWeek}
                <br />
                {OFFICE.hoursSat}
              </p>
            </div>

            <p className="mt-8">
              Sessions are available in person at my Santa Monica office or by
              secure telehealth anywhere in California. If you&rsquo;re not sure
              which suits you, we can work that out on the call.
            </p>

            <p className="t-small mt-8 text-ink/60">
              Please note: email and voicemail aren&rsquo;t monitored around the
              clock and aren&rsquo;t suitable for emergencies. If you&rsquo;re in
              crisis, call or text 988 (Suicide &amp; Crisis Lifeline), or dial
              911.
            </p>
          </div>

          {/* What happens next */}
          <div className="md:w-[54%]">
            <h2>What happens next</h2>
            <ol className="mt-8">
              {STEPS.map(([title, body], i) => (
                <li
                  key={title}
                  className="mb-8 flex gap-5 last:mb-0"
                >
                  <span
                    aria-hidden="true"
                    className="font-serif text-[1.6rem] leading-none text-sage"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="mb-2">{title}</h4>
                    <p>{body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="relative mt-10 aspect-3/2 w-full overflow-hidden">
              <Image
                src={IMAGES.officeLounge.src}
                alt={IMAGES.officeLounge.alt}
                fill
                sizes="(max-width: 767px) 88vw, 54vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
