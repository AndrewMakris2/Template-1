/**
 * ============================================================================
 *  THEME — EDIT THIS FILE PER CLIENT / PER RESKIN
 * ============================================================================
 *  Every color and font family on the site comes from this file, and nothing
 *  else lives here. Components never hardcode colors or fonts; they use the
 *  Tailwind utilities generated from these tokens:
 *
 *    colors.paper   → bg-paper / text-paper      (main background)
 *    colors.cream   → bg-cream                   (alternate section background)
 *    colors.ink     → text-ink / bg-ink          (primary text, dark surfaces)
 *    colors.muted   → text-muted                 (secondary text)
 *    colors.line    → border-line                (hairlines / dividers)
 *    colors.accent  → text-accent / bg-accent    (the single accent color)
 *    colors.onAccent→ text-on-accent             (text placed on the accent)
 *    colors.onInk   → text-on-ink                (text placed on ink surfaces)
 *
 *    fonts.heading  → font-heading               (headings, logo, quotes)
 *    fonts.body     → font-body                  (body copy, UI, buttons)
 *
 *  To reskin: change the values below. Keep the keys the same.
 *  If you change font families, update `fonts.googleFontsUrl` to load them
 *  (build one at https://fonts.google.com — select families, copy the URL).
 * ============================================================================
 */

export const theme = {
  colors: {
    paper: '#FFFFFF',
    cream: '#F6F3EE', // off-white
    ink: '#111111',
    muted: '#6B6B6B',
    line: '#E4E0D9',
    accent: '#C08552', // soft terracotta — TODO: pick the client's accent color
    onAccent: '#FFFFFF',
    onInk: '#F6F3EE',
  },

  fonts: {
    heading: "'Cormorant Garamond', 'Times New Roman', Georgia, serif",
    body: "'Inter', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif",
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500&display=swap',
  },
};
