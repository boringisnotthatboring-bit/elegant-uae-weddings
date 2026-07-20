## Goal

Rework the `/services` overview page to match the reference layout from weddingplannerdubai.ae: instead of a 3-column card grid, list each wedding service as a full-width horizontal row (image left, text right) with its own CTA button that routes to that service's dedicated page.

## Reference (from screenshot)

- Centered section heading "Explore Our Wedding Services in Dubai" with intro paragraph and a thin horizontal divider underneath.
- Each service = one row:
  - Left: portrait-ish landscape image (~40% width).
  - Right: service title (large serif, wraps to 2 lines), short description paragraph, "Perfect For:" label with bulleted list, then an outlined uppercase CTA button like `VIEW BEACH WEDDING`.
- Rows stack vertically with generous vertical spacing; all rows use the same image-left / text-right orientation (not zigzag).

## Changes

### `src/routes/services.tsx`
- Keep the existing hero section unchanged.
- Keep the intro band ("Every celebration, planned with heart") but move the divider styling to match the reference (short centered rule under the intro).
- Replace the 3-column grid of `<Link>` cards with a stacked list. For each entry in `allServices`, render a row:
  - `<div class="grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-8 md:gap-12 items-center">`
  - Left column: `service.image` in a `rounded-sm` frame, `aspect-[4/3]` or `aspect-[5/4]`, subtle shadow.
  - Right column:
    - `<h3>` in font-display, 2xl–3xl.
    - `<p>` description (use `service.description` when present, fall back to `service.short`).
    - "Perfect For:" heading (small, uppercase, primary/maroon color) + bulleted list from `service.perfectFor` (rendered only when it exists).
    - CTA button (outline variant, uppercase, tracked): label `View {ServiceTitle}` (e.g. "VIEW BEACH WEDDING") using a per-slug label map — reuses the CTA copy already defined in `serviceMeta` on `wedding-services.$slug.tsx`. Move that map to `src/lib/content/services.ts` so both pages can import it, and expose a helper like `getServiceCta(slug)`.
    - Button links to `/wedding-services/$slug` with `params={{ slug: service.slug }}`.
- Add vertical spacing between rows (`space-y-16 md:space-y-24`) and a max-width wrapper for readability.
- Remove the imported `ArrowRight` if no longer used.

### `src/lib/content/services.ts`
- Add a `ctaLabel` (or export a `serviceCtaLabels` map) so the row CTA and the detail-page CTA stay in sync. Values come from the existing `serviceMeta` in `wedding-services.$slug.tsx` (e.g. "Start Planning Your Beach Wedding" → row button reads "VIEW BEACH WEDDING"; use short "VIEW X WEDDING" style labels matching the reference).

### `src/routes/wedding-services.$slug.tsx`
- Import the shared CTA/label helpers instead of the local `serviceMeta` map (keep the same routing behavior and `search={{ type }}` handoff to `/contact`).

## Out of scope

- Header dropdown, hero image, detail page layout, and contact form remain untouched.
- No changes to card content copy beyond what's already in `allServices`.
