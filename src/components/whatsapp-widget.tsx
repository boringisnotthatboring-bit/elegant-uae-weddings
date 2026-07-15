import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const PHONE = "971526232321";

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const text = message.trim() || "Hi, I'd like to enquire about wedding planning.";
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setMessage("");
    setOpen(false);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-[320px] overflow-hidden rounded-lg border border-border bg-card shadow-2xl">
          <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 font-semibold">
              RJ
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold leading-tight">{AGENT_NAME}</p>
              <p className="text-xs text-white/80">Wedding Specialist · Online</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-full p-1 transition-colors hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="bg-[#ECE5DD] px-4 py-5">
            <div className="max-w-[85%] rounded-lg rounded-tl-none bg-white px-3 py-2 text-sm shadow-sm">
              <p className="text-foreground">
                tell us more and we will cater to your requirements
              </p>
            </div>
          </div>
          <form onSubmit={send} className="flex items-center gap-2 border-t border-border bg-card p-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message…"
              className="flex-1 rounded-full border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
              autoFocus
            />
            <button
              type="submit"
              aria-label="Send via WhatsApp"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-colors hover:bg-[#1ebe57]"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-7 w-7" />}
      </button>
    </div>
  );
}
