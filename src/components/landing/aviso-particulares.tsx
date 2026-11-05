import { Receipt } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function AvisoParticulares({ className = "" }: { className?: string }) {
  return (
    <p
      className={`inline-flex max-w-full items-start gap-2.5 rounded-xl border border-primary/25 bg-background px-4 py-3 text-left text-sm font-medium leading-snug text-foreground shadow-sm shadow-foreground/5 sm:text-base ${className}`}
    >
      <Receipt
        className="mt-0.5 h-5 w-5 shrink-0 text-primary"
        strokeWidth={1.7}
        aria-hidden="true"
      />
      <span>{siteConfig.avisoParticulares}</span>
    </p>
  );
}
