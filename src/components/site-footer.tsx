import { Link } from "@tanstack/react-router";
import { footerExplore, socialLinks, company } from "@/lib/content/nav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary text-primary-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-3">
        <div>
          <h4 className="text-xs font-medium uppercase tracking-widest text-primary-foreground/60">Studio</h4>
          <p className="mt-4 text-sm text-primary-foreground/80">
            {company.address}
          </p>
        </div>

        <div>
          <h4 className="eyebrow text-primary-foreground/60">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li>
              <a
                href={`mailto:${company.email}`}
                className="transition-colors hover:text-accent"
              >
                {company.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="transition-colors hover:text-accent"
              >
                {company.phone}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow text-primary-foreground/60">Follow</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page grid gap-8 py-8 md:grid-cols-2 md:items-center">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-primary-foreground/60">
            {footerExplore.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="transition-colors hover:text-accent"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <form
            className="flex gap-2 md:justify-end"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Input
              type="email"
              placeholder="Newsletter email"
              className="max-w-[16rem] border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/60"
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
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Crafted for couples across the UAE.</p>
        </div>
      </div>
    </footer>
  );
}
