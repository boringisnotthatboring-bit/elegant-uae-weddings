## Goal

Strip everything from the map image except the UAE landmass itself. The final asset should be just the calligraphy-filled map silhouette with its pin markers and emirate labels, floating on the section's cream background — no Dubai skyline, no gold ribbons/waves, no Islamic pattern corners, no background paper texture.

## Approach

1. Re-run image edit on `src/assets/uae-map-themed.png` with a prompt that instructs the model to:
   - Remove the Dubai skyline silhouette (Burj Khalifa, Burj Al Arab, palms, mosque) at the left
   - Remove the gold ribbon/wave flourishes across the canvas
   - Remove the geometric Islamic pattern textures in the corners
   - Remove the background paper/parchment texture entirely
   - Keep only the UAE landmass with its Arabic calligraphy fill, the 7 gold pin markers, and their emirate labels (Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, Fujairah)
   - Output on a solid white background
   - Use `transparent_background: true` so the result is a transparent PNG that visually floats on the cream section

2. Save as `src/assets/uae-map-isolated.png` and update the import in `src/routes/index.tsx`.

3. Since the new image is transparent PNG, drop `mix-blend-multiply` from the `<img>` classes (no longer needed and can dim the labels). Keep the existing:
   - `-mx-2 md:-mx-4 lg:scale-[1.07]` sizing
   - Faint blurred ground-shadow ellipse beneath it
   - `drop-shadow-[0_20px_35px_rgba(120,85,40,0.18)]` floating shadow

4. Delete the now-unused `src/assets/uae-map-themed.png`.

## Files touched

- `src/assets/uae-map-isolated.png` (new, generated via image edit)
- `src/routes/index.tsx` (swap import, remove `mix-blend-multiply` class)
- `src/assets/uae-map-themed.png` (delete)

## Risk

The image model may leave faint remnants of the removed elements. If that happens, re-run the edit with a stricter prompt before finalizing.
