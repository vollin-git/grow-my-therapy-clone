/**
 * Primitives mirroring Squarespace's fluid layout engine, so each section can
 * be declared with the exact `grid-area` values the original uses.
 *
 * Section — the themed band plus the grid container.
 *   rowsM / rowsD: grid-template-rows repeat count (mobile / desktop)
 *   padY: vertical padding multiplier. Squarespace resolves this as
 *         `N * max(9px, 1vw)` — fluid above a 900px viewport, floored below.
 *         Verified against the original at 390 / 768 / 1440 / 1920px.
 *   padTop: extra top padding (the hero uses it to clear the overlaid header).
 *   minH: Squarespace's per-section height setting, expressed in vh.
 *
 * Block — one positioned child.
 *   m / d: "rowStart/colStart/rowEnd/colEnd" on the 8-col and 24-col grids.
 *          Column 1 is the left gutter, so content starts at column 2.
 */

const THEMES = {
  white: "bg-white text-ink",
  light: "bg-cream text-ink",
  bright: "bg-sage-tint text-ink",
  black: "bg-ink text-white",
  dark: "bg-sage text-white",
};

export function Section({
  theme = "white",
  rowsM,
  rowsD,
  padY = 0,
  padTop,
  minH,
  colGap,
  /* `plain` swaps the fluid grid for a normal max-width container, for
     sections laid out with ordinary flex/grid utilities rather than the
     original's grid-area blueprint. Band styling is unchanged. */
  plain = false,
  /* Rendered as a direct child of the section, outside the grid, so an
     absolutely-positioned background fills the whole band rather than
     being confined to the (shorter) grid box. */
  background,
  className = "",
  style,
  children,
  ...rest
}) {
  const pad = {};
  if (padY) pad.paddingBlock = `calc(${padY} * max(9px, 1vw))`;
  if (padTop) pad.paddingTop = padTop;
  if (minH) pad.minHeight = `${minH}vh`;

  return (
    <section
      /* The original centres its content wrapper vertically, which is what
         makes a section taller than its content (via minH) sit balanced. */
      className={`flex items-center ${THEMES[theme]} ${className}`}
      style={{ ...pad, ...style }}
      {...rest}
    >
      {background}
      {plain ? (
        /* Same horizontal gutter and max width the grid resolves to, so a
           plain section lines up with the grid sections above and below. */
        <div className="mx-auto w-full max-w-[1800px] px-[6vw] md:px-[5vw]">
          {children}
        </div>
      ) : (
        <div
          className="fe w-full"
          style={{
            "--fe-rows-m": rowsM,
            "--fe-rows-d": rowsD,
            ...(colGap ? { "--fe-colgap": `${colGap}px` } : null),
          }}
        >
          {children}
        </div>
      )}
    </section>
  );
}

const ALIGN = {
  center: "justify-center",
  start: "justify-start",
  end: "justify-end",
};

/** `rte` applies the collapsing-margin rhythm instead of flex gaps, and
 *  positions the content in its block — centred by default, or `align="start"`
 *  where neighbouring blocks span different row counts and their first lines
 *  need to sit on a shared baseline (the service and specialty cards). */
export function Block({
  m,
  d,
  rte,
  align = "center",
  className = "",
  style,
  children,
}) {
  return (
    <div
      className={`fe-block ${rte ? `flex flex-col ${ALIGN[align]}` : ""} ${className}`}
      style={{ "--m": m, "--d": d, ...style }}
    >
      {rte ? <div className="rte">{children}</div> : children}
    </div>
  );
}
