import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeader({
  eyebrow,
  title,
  body,
  align = "left",
  className,
  children,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 font-display text-3xl leading-tight md:text-5xl">{title}</h2>
      {body ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{body}</p>
      ) : null}
      {children}
    </div>
  );
}
