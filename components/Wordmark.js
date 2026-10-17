/**
 * Typographic wordmark. The cloned site used a raster logo; this is set in
 * the brand faces instead, so it stays sharp at any size and needs no asset.
 */
export default function Wordmark({ className = "", onDark = false }) {
  return (
    <span className={`block leading-none ${className}`}>
      <span
        className="block font-serif font-normal tracking-[-0.015em]"
        style={{ fontSize: "clamp(1.5rem, 1rem + 1.4vw, 2.3rem)" }}
      >
        Dr. Maya Reynolds
      </span>
      <span
        className={`mt-[0.45em] block font-sans text-[0.62rem] font-medium uppercase tracking-[0.26em] ${
          onDark ? "text-white/80" : "text-sage-deep"
        }`}
      >
        Licensed Clinical Psychologist
      </span>
    </span>
  );
}
