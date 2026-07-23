import {
  Sparkles,
  Camera,
  Lightbulb,
  Brush,
  Users,
  UtensilsCrossed,
  PartyPopper,
  Mic,
} from "lucide-react";

const services = [
  { icon: Sparkles, label: "Decor & Wedding Styling" },
  { icon: Camera, label: "Photography & Videography" },
  { icon: Lightbulb, label: "AV & Lighting" },
  { icon: Brush, label: "Makeup & Henna Artists" },
  { icon: Users, label: "Guest Hospitality & RSVP" },
  { icon: UtensilsCrossed, label: "Catering Services" },
  { icon: PartyPopper, label: "Entertainment" },
  { icon: Mic, label: "Emcee & Celebrities" },
];

export function ServiceIconRow() {
  return (
    <ul className="grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
      {services.map(({ icon: Icon, label }) => (
        <li
          key={label}
          className="grid grid-cols-[44px_1fr] items-center gap-3 text-sm text-foreground/75"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary">
            <Icon className="h-4 w-4" />
          </span>

          <span className="leading-snug">{label}</span>
        </li>
      ))}
    </ul>
  );
}
