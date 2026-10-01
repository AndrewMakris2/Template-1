import { esc, sectionLabel, buttonClasses } from './utils.js';
import { icon } from './icons.js';

/** Optional bridal / events packages. Shown only when `events.enabled` is true. */
export function Events({ events }) {
  if (!events?.enabled) return '';
  const rows = events.packages
    .map(
      (p) => `
      <li class="grid grid-cols-[1fr_auto] gap-x-6 border-b border-line py-6 md:py-7">
        <div>
          <h3 class="font-heading text-2xl font-normal text-ink md:text-[1.7rem]">${esc(p.name)}</h3>
          ${p.description ? `<p class="mt-1 text-sm leading-relaxed text-muted">${esc(p.description)}</p>` : ''}
        </div>
        <p class="text-right font-heading text-2xl lining-nums text-ink">${esc(p.price)}</p>
      </li>`,
    )
    .join('');

  return `
<section id="events" class="scroll-mt-16 border-t border-line bg-paper py-24 md:scroll-mt-20 md:py-36" aria-labelledby="events-heading">
  <div class="mx-auto grid max-w-7xl gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-10">
    <div class="lg:col-span-4">
      ${sectionLabel(events.label)}
      <h2 id="events-heading" class="mt-6 font-heading text-4xl font-light text-ink md:text-5xl lg:text-6xl">${esc(events.heading)}</h2>
      <p class="mt-6 max-w-md text-base leading-relaxed text-muted">${esc(events.intro)}</p>
    </div>
    <div class="lg:col-span-7 lg:col-start-6">
      <ul class="border-t border-ink">${rows}</ul>
      ${events.note ? `<p class="mt-8 text-sm italic leading-relaxed text-muted">${esc(events.note)}</p>` : ''}
      <a href="#contact" class="mt-10 ${buttonClasses.outline}">${esc(events.ctaLabel)} ${icon('arrowRight', 'h-4 w-4')}</a>
    </div>
  </div>
</section>`;
}
