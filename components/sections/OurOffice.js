import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/components/images";
import { Section } from "@/components/Fluid";

/* Practical details, kept in one place so the address stays in step with
   the footer. */
export const OFFICE = {
  street: "123th Street 45 W",
  city: "Santa Monica, CA 90401",
  hoursWeek: "Monday–Friday: 9am–6pm",
  hoursSat: "Saturday: 10am–2pm",
};

/* The body is a <div>, not a <p>: one caller passes an <address>, which is
   flow content and cannot legally sit inside a paragraph — the browser would
   close the <p> early and break hydration. */
function Detail({ label, children }) {
  return (
    <div>
      <p className="eyebrow text-sage-deep!">{label}</p>
      <div className="t-small mt-1">{children}</div>
    </div>
  );
}

export default function OurOffice() {
  return (
    <Section theme="light" plain padY={6.6} minH={66}>
      <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-[5vw]">
        {/* Left column — the details */}
        <div className="flex-1 md:max-w-[46%]">
          <h2>
            A Space Made for <span className="script">You</span>
          </h2>

          <p className="mt-6">
            My Santa Monica office is a quiet, private space designed to feel
            calm and grounding &mdash; natural light, comfortable seating, and
            an uncluttered room. Clients often tell me the space itself helps
            them settle before we&rsquo;ve even started.
          </p>

          {/* Address + hours card, with the sage accent rule */}
          <div className="mt-9 border-l-4 border-sage bg-white/60 py-5 pl-6 pr-5">
            <div className="flex flex-col gap-5 sm:flex-row sm:gap-10">
              <Detail label="Visit us">
                <address className="not-italic">
                  {OFFICE.street}
                  <br />
                  {OFFICE.city}
                </address>
              </Detail>
              <Detail label="Hours">
                {OFFICE.hoursWeek}
                <br />
                {OFFICE.hoursSat}
              </Detail>
            </div>

            <div className="mt-5 border-t border-rule pt-4">
              <Detail label="Getting here">
                Free street parking available. Accessible entrance on ground
                floor.
              </Detail>
            </div>
          </div>

          {/* First-visit reassurance */}
          <p className="mt-8 border-l-4 border-terracotta pl-6 font-serif text-[1.35rem] leading-snug italic">
            Prefer not to travel? Secure telehealth sessions are available to
            anyone located in California.
          </p>

          <Link href="/contact" className="btn-underline mt-7 inline-block">
            Book a Free 15-Minute Consult
          </Link>
        </div>

        {/* Right column — two views of the room */}
        <div className="flex flex-1 flex-col gap-3">
          <div className="relative aspect-3/2 w-full overflow-hidden">
            <Image
              src={IMAGES.officeLounge.src}
              alt={IMAGES.officeLounge.alt}
              fill
              sizes="(max-width: 767px) 88vw, 62vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-3/2 w-full overflow-hidden">
            <Image
              src={IMAGES.officeRoom.src}
              alt={IMAGES.officeRoom.alt}
              fill
              sizes="(max-width: 767px) 88vw, 62vw"
              className="object-cover"
            />
          </div>
          <p className="t-small mt-1 italic opacity-70">
            Our Santa Monica office &mdash; quiet, private, and yours for the
            hour.
          </p>
        </div>
      </div>
    </Section>
  );
}
