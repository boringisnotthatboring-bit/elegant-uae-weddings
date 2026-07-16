import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const PHONE = "971526232321";
const WHATSAPP_URL = `https://wa.me/${PHONE}`;

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-auto min-w-[240px] overflow-hidden rounded-lg border border-border bg-card p-4 shadow-2xl">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#25D366] px-5 py-3 text-sm font-medium text-white shadow-lg transition-colors hover:bg-[#1ebe57]"
          >
            Chat on WhatsApp, tell us more
          </a>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close WhatsApp widget" : "Open WhatsApp widget"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
      </button>
    </div>
  );
}
