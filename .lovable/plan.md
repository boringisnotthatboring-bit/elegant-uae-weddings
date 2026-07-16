Implement the requested footer updates in `src/components/site-footer.tsx` and `src/lib/content/nav.ts`:

1. Rename footer column heading from **Studio** to **Address**.
2. Replace the address text under that column from "Dubai, United Arab Emirates" to "Sheikh Zayed Rd - Trade Center First - Dubai".
3. Add an **Opening Hours** block under the **Contact** column with the text "By Appointment Only".
4. Remove **YouTube** from the **Follow** column, keeping only Instagram and LinkedIn.
5. Remove the WhatsApp widget so there are no direct-message prompts.
6. Remove the newsletter email form since the design notes state "There is no News Letter".
7. Reorganize the footer into a clean, multi-column layout with meaningful alignment: Address, Contact, Follow, and Explore links across two tiers, followed by the copyright bar.
8. Ensure all typography, spacing, and responsive alignment stay tidy and consistent with the existing design tokens.

Files to edit:
- `src/lib/content/nav.ts` (address text update)
- `src/components/site-footer.tsx` (footer layout and content changes)
- Root layout usage to remove the WhatsApp widget if it is rendered globally.