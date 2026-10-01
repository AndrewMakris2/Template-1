import { esc, sectionLabel } from './utils.js';

/** Optional booking policies. Shown only when `policies.enabled` is true. */
export function Policies({ policies }) {
  if (!policies?.enabled) return '';
  const items = policies.items
    .map(
      (p) => `
      <div class="border-t border-line pt-6">
        <dt class="text-xs font-medium uppercase tracking-[0.2em] text-ink">${esc(p.title)}</dt>
        <dd class="mt-3 text-base leading-relaxed text-muted">${esc(p.text)}</dd>
      </div>`,
    )
    .join('');

  return `
<section id="policies" class="scroll-mt-16 border-t border-line bg-paper py-24 md:scroll-mt-20 md:py-36" aria-labelledby="policies-heading">
  <div class="mx-auto grid max-w-7xl gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-10">
    <div class="lg:col-span-4">
      ${sectionLabel(policies.label)}
      <h2 id="policies-heading" class="mt-6 font-heading text-4xl font-light text-ink md:text-5xl">${esc(policies.heading)}</h2>
    </div>
    <dl class="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">${items}</dl>
  </div>
</section>`;
}
