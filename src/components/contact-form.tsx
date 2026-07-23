import { useContactForm } from "@/hooks/use-contact-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const weddingTypes = [
  "Luxury Wedding",
  "Beach Wedding",
  "Desert Wedding",
  "Indian Wedding",
  "Arabic Wedding",
  "Civil Wedding",
  "Elopement / Micro Wedding",
  "Destination Wedding",
  "Western Wedding",
];

const serviceOptions = [
  "End-to-End Planning",
  "Venue & Décor",
  "Photography & Videography",
  "AV & Lighting",
  "Drone & Fireworks",
  "Catering",
  "Entertainment",
  "AI Technology",
];

export function ContactForm({ initialWeddingType }: { initialWeddingType?: string } = {}) {
  const form = useContactForm(initialWeddingType ? { weddingType: initialWeddingType } : undefined);

  // Safety fallback: ensure form and form.values exist before rendering
  if (!form || !form.values) {
    return null;
  }

  if (form.submitted) {
    return (
      <div className="rounded-sm border border-border bg-card p-8 text-center">
        <h3 className="font-display text-2xl">Thank you</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          We received your enquiry. A wedding specialist will be in touch shortly.
        </p>
      </div>
    );
  }

  // Safe defaults for values to prevent `.includes` or `Select` crashes
  const nameValue = form.values.name ?? "";
  const phoneValue = form.values.phone ?? "";
  const emailValue = form.values.email ?? "";
  const weddingTypeValue = form.values.weddingType ?? "";
  const messageValue = form.values.message ?? "";
  const selectedServices = Array.isArray(form.values.services) ? form.values.services : [];

  return (
    <form onSubmit={form.handleSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="name">Full name</Label>
          <Input
            id="name"
            value={nameValue}
            onChange={(e) => form.update("name", e.target.value)}
            required
          />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            type="tel"
            value={phoneValue}
            onChange={(e) => form.update("phone", e.target.value)}
            required
          />
        </div>
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={emailValue}
          onChange={(e) => form.update("email", e.target.value)}
          required
        />
      </div>
      <div>
        <Label>Wedding type</Label>
        <Select value={weddingTypeValue} onValueChange={(v) => form.update("weddingType", v)}>
          <SelectTrigger>
            <SelectValue placeholder="Select wedding type" />
          </SelectTrigger>
          <SelectContent>
            {weddingTypes.map((t) => (
              <SelectItem key={t} value={t}>
                {t}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label>Services required</Label>
        <div className="mt-2 flex flex-wrap gap-2">
          {serviceOptions.map((s) => {
            const active = selectedServices.includes(s);
            return (
              <button
                type="button"
                key={s}
                onClick={() => form.toggleService?.(s)}
                className={
                  "rounded-full border px-3 py-1 text-xs transition-colors " +
                  (active
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border hover:border-primary")
                }
              >
                {s}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={5}
          value={messageValue}
          onChange={(e) => form.update("message", e.target.value)}
          placeholder="Tell us about your dream wedding — date, guest count, vision..."
        />
      </div>
      <Button type="submit" size="lg" className="justify-self-start">
        Send enquiry
      </Button>
    </form>
  );
}
