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
  { icon: Sparkles, label: "Decor & Wedding styling" },
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
    <ul className="flex flex-wrap items-center gap-x-8 gap-y-4">
      {services.map(({ icon: Icon, label }) => (
        <li
          key={label}
          className="flex items-center gap-2 text-sm text-foreground/75"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-primary">
            <Icon className="h-4 w-4" />
          </span>
          {label}
        </li>
      ))}
    </ul>
  );
}
