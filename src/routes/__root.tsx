import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { I18nProvider } from "@/components/i18n-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 font-display text-5xl">Page not found</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Something went wrong. Try again or return home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-sm border border-input bg-background px-5 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Luxury Wedding Planner in Dubai | Awesome Events Weddings" },
      {
        name: "description",
        content:
          "Dubai's leading luxury wedding planner. Beach, desert, hotel and destination weddings across the UAE — planned end-to-end by our award-winning team.",
      },
      { name: "author", content: "Awesome Events Weddings" },
      { property: "og:title", content: "Luxury Wedding Planner in Dubai | Awesome Events Weddings" },
      {
        property: "og:description",
        content:
          "Dubai's leading luxury wedding planner. Beach, desert, hotel and destination weddings across the UAE — planned end-to-end by our award-winning team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Luxury Wedding Planner in Dubai | Awesome Events Weddings" },
      { name: "twitter:description", content: "Dubai's leading luxury wedding planner. Beach, desert, hotel and destination weddings across the UAE — planned end-to-end by our award-winning team." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8be68708-7d30-45bc-a85c-4a290f4301c9/id-preview-dee9a0bf--7b8db359-78a8-45f7-a27a-d52f3e88fd1b.lovable.app-1784116697597.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8be68708-7d30-45bc-a85c-4a290f4301c9/id-preview-dee9a0bf--7b8db359-78a8-45f7-a27a-d52f3e88fd1b.lovable.app-1784116697597.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Google Translate widget: renders into #google_translate_element,
            then applies translations based on the googtrans cookie set by
            the header language toggle. Hidden visually — we drive it via
            the cookie + reload flow instead of showing Google's UI. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:'en',includedLanguages:'en,ar',autoDisplay:false},'google_translate_element');}`,
          }}
        />
        <script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          async
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `#google_translate_element{position:absolute;left:-9999px;top:-9999px;visibility:hidden}.goog-te-banner-frame{display:none!important}body{top:0!important}.skiptranslate>iframe{display:none!important}`,
          }}
        />
      </head>
      <body>
        <div id="google_translate_element" aria-hidden="true" />
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">
            <Outlet />
          </main>
          <SiteFooter />
        </div>
        <WhatsAppWidget />
      </I18nProvider>
    </QueryClientProvider>
  );
}
