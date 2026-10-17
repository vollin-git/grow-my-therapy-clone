/**
 * Every image on the site, in one place — so a swap is a one-line change and
 * alt text lives next to the file it describes.
 *
 * Provenance:
 *  - The office interiors and Dr. Reynolds' headshot are the practice's own
 *    photographs, taken from her profile.
 *  - The remainder are placeholders sourced from Unsplash and self-hosted
 *    rather than hot-linked: several took 11-12s to return from the CDN,
 *    which exceeded Next's image-optimizer timeout and produced intermittent
 *    504s. Replace them with licensed practice photography before launch.
 *
 * Note on `sizes` at each call site: these are landscape photographs dropped
 * into tall slots, where object-cover scales to the slot's HEIGHT. The `sizes`
 * hint must therefore describe `slot_height x source_aspect`, not the slot
 * width, or the browser fetches a small rendition and upscales it.
 */
export const IMAGES = {
  /* Hero — the exhale, and a calm shoreline bleeding off the right edge. */
  heroMain: {
    src: "/images/hero-breathe.jpg",
    alt: "A woman outdoors with her eyes closed and face tilted to warm evening light",
  },
  heroInset: {
    src: "/images/hero-shore-hd.jpg",
    alt: "Calm shoreline at low tide",
  },

  /* Service cards — stillness, a way through, and open water. */
  serviceAnxiety: {
    src: "/images/svc-anxiety.jpg",
    alt: "A person sitting cross-legged in meditation at sunrise",
  },
  serviceTrauma: {
    src: "/images/svc-trauma-bridge.jpg",
    alt: "A wooden footbridge leading through dense green forest",
  },
  serviceBurnout: {
    src: "/images/svc-burnout-boat.jpg",
    alt: "The prow of a wooden boat on still water, facing open mountains",
  },

  /* Full-bleed bands. */
  quoteBanner: {
    src: "/images/quote-lake.jpg",
    alt: "A still mountain lake at dusk",
  },
  comingBack: {
    src: "/images/svc-trauma.jpg",
    alt: "A person standing with arms open to the light at sunrise",
  },

  /* How we'll work together. */
  approach: {
    src: "/images/approach-lamps.jpg",
    alt: "Warm pendant lamps glowing against a soft neutral wall",
  },

  /* Booking section — a consultation, and a sliver of a calm sitting room. */
  scheduleMain: {
    src: "/images/right-fit.jpg",
    alt: "A therapist and client sitting and talking in a bright, plant-filled room",
  },
  scheduleInset: {
    src: "/images/right-fit-room.jpg",
    alt: "A calm sitting room with framed artwork, a large monstera and soft seating",
  },

  /* The practice's own photographs, from Dr. Reynolds' profile. */
  portrait: {
    src: "/images/maya-reynolds.jpg",
    alt: "Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica",
  },
  officeLounge: {
    src: "/images/office-lounge.jpg",
    alt: "The lounge at the Santa Monica office: a soft grey sofa and armchair beside tall windows with sheer curtains and exposed brick",
  },
  officeRoom: {
    src: "/images/office-room.jpg",
    alt: "The therapy room: a sofa and leather armchair facing each other across a low table, with natural light and an olive tree",
  },
};
