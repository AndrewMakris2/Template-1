import { esc, sectionLabel } from './utils.js';

/** Optional FAQ (native <details>, no JavaScript). Shown only when `faq.enabled` is true. */
export function Faq({ faq }) {
  if (!faq?.enabled) return '';
  const items = faq.items
    .map(
      (item) => `
      <details class="group border-b border-line">
        <summary class="flex cursor-pointer list-none items-baseline justify-between gap-6 py-6 font-heading text-2xl font-normal text-ink transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent md:text-[1.7rem] [&::-webkit-details-marker]:hidden">
          ${esc(item.q)}
          <span class="shrink-0 font-body text-2xl font-light text-accent transition-transform duration-300 group-open:rotate-45" aria-hidden="true">+</span>
        </summary>
        <p class="max-w-2xl pb-7 text-base leading-relaxed text-muted">${esc(item.a)}</p>
      </details>`,
    )
    .join('');

  return `
<section id="faq" class="scroll-mt-16 border-t border-line bg-cream py-24 md:scroll-mt-20 md:py-36" aria-labelledby="faq-heading">
  <div class="mx-auto grid max-w-7xl gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-10">
    <div class="lg:col-span-4">
      ${sectionLabel(faq.label)}
      <h2 id="faq-heading" class="mt-6 font-heading text-4xl font-light text-ink md:text-5xl">${esc(faq.heading)}</h2>
    </div>
    <div class="border-t border-ink lg:col-span-7 lg:col-start-6">${items}</div>
  </div>
</section>`;
}
