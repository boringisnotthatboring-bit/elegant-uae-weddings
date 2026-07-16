Plan: Tidy the "Why Choose Us" section spacing and image stack

### Problem
The current "Why Choose Us" section has two layout issues:
1. Too much empty headroom above the section (the blue-marked area).
2. The two right-side images are stacked with a heavy overlap (`-mt-20`), looking messy instead of the clean, evenly spaced vertical stack shown in the earlier reference image.

### Goal
- Reduce the top padding/empty space so the section starts higher and feels connected to the content above.
- Restack the two images as a neat vertical column with equal gaps between them, matching the previous reference image's layout.
- Keep the left text (eyebrow, heading, divider, three feature points) clean and readable.

### Changes
1. **Tighten top spacing**
   - Replace the generic `section-y` utility on this section with explicit vertical padding: smaller top padding (e.g. `pt-8 md:pt-12`) and retain adequate bottom padding (e.g. `pb-16 md:pb-24`).

2. **Clean image stack**
   - Change the right column from the overlapping grid hack to a simple flex column.
   - Use a consistent gap (e.g. `gap-4` or `gap-6`) between the two images.
   - Keep both images the same aspect ratio (e.g. `aspect-[3/4]`) and width.
   - Remove the negative margin overlap.

3. **Preserve text layout**
   - Left column keeps eyebrow, heading, divider, and three feature blocks.
   - Keep responsive two-column layout with `lg:grid-cols-2`.

### Files to touch
- `src/routes/index.tsx` — only the "Why Choose Us" section markup.

### No new dependencies or routes.
