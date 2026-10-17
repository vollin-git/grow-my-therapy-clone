/**
 * Single source for FAQ copy, shared by the homepage section and the FAQs
 * page so the two can never drift apart. All answers derive from Dr. Maya
 * Reynolds' profile.
 *
 * `home: true` marks the subset surfaced on the homepage.
 */
export const FAQS = [
  {
    home: true,
    q: "Who do you work with?",
    a: "I work with adults. Many of my clients are high-achieving, thoughtful and self-aware, but internally feel exhausted, stuck in overthinking, or emotionally on edge. People often describe being “functional” on the outside while quietly struggling with constant worry, tension in the body, or difficulty sleeping. I also work with adults navigating the effects of earlier life experiences on their relationships, confidence and sense of safety.",
  },
  {
    home: true,
    q: "I’ve been coping fine. Is therapy still for me?",
    a: "Yes. Most people who reach out have been coping for a long time before they book a session — that is usually the point. You do not need to be in crisis, and you do not need a diagnosis, to get something out of therapy. If daily life takes more effort than it should, that is reason enough.",
  },
  {
    q: "What does a session with you actually look like?",
    a: "Warm, collaborative and grounded. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. Early on we get clear on what you want to be different — sleeping through the night, getting through a workday without bracing, being able to say no — and we work toward that rather than an abstract idea of being fixed.",
  },
  {
    home: true,
    q: "What methods do you use?",
    a: "I integrate evidence-based methods: cognitive-behavioural therapy (CBT), EMDR, mindfulness-based practices and body-oriented techniques. I choose between them based on you rather than on a fixed protocol, so we can address both the emotional and the physiological sides of what you are experiencing.",
  },
  {
    q: "What is EMDR, and is it right for me?",
    a: "EMDR (Eye Movement Desensitisation and Reprocessing) helps the brain reprocess memories that still feel raw, so they carry less charge. I use it for single-incident trauma and for longer-standing patterns, but never as a first step: we establish safety and stabilisation first, and we only begin reprocessing when you feel ready.",
  },
  {
    home: true,
    q: "How do you pace trauma work?",
    a: "Carefully, and at a speed you set. The emphasis is on safety, stabilisation and helping you feel more regulated in daily life — not only during sessions. We do not move faster than you want to, and nothing happens without your consent.",
  },
  {
    home: true,
    q: "Do you offer online therapy?",
    a: "Yes. I offer secure telehealth sessions for clients located anywhere in California, alongside in-person sessions at my Santa Monica office. Many clients mix the two depending on their week.",
  },
  {
    q: "Where is your office?",
    a: "My office is in Santa Monica, CA. It is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.",
  },
  {
    q: "How do we get started?",
    a: "With a free 15-minute consult. You tell me what is bringing you here, I will tell you honestly whether I am the right fit, and if I am not, I will point you toward someone who is. There is no obligation and no waitlist.",
  },
];

export const faqJsonLd = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
});
