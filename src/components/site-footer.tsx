import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { footerExplore, socialLinks, company } from "@/lib/content/nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl">{company.name}</div>
          <p className="eyebrow mt-1 text-primary-foreground/70">
            {company.tagline}
          </p>
          <p className="mt-6 max-w-md text-sm text-primary-foreground/80">
            Bespoke luxury wedding planning across Dubai, Abu Dhabi, Ras Al
            Khaimah, Sharjah, Fujairah, Ajman and the wider UAE.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-primary-foreground/30 p-2 transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full border border-primary-foreground/30 p-2 transition-colors hover:border-accent hover:text-accent"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="eyebrow text-primary-foreground/70">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {footerExplore.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-primary-foreground/85 transition-colors hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-primary-foreground/70">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/85">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {company.address}
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {company.phone}
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              {company.email}
            </li>
          </ul>

          <form
            className="mt-6 flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Input
              type="email"
              placeholder="Newsletter email"
              className="border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60"
              aria-label="Newsletter email"
            />
            <Button
              type="submit"
              variant="secondary"
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Join
            </Button>
          </form>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-primary-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Crafted for couples across the UAE.</p>
        </div>
      </div>
    </footer>
  );
}
