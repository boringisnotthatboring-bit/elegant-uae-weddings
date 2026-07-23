import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/section-header";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Awesome Events Weddings" },
      {
        name: "description",
        content:
          "How Awesome Events Weddings collects and uses information from couples enquiring about wedding planning.",
      },
      { name: "robots", content: "index, follow" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <section className="section-y">
      <div className="container-page max-w-3xl">
        <SectionHeader
          eyebrow="Legal"
          title="Privacy Policy"
          body="This policy explains what information we collect, how we use it, and the choices you have as a visitor to our website."
        />
        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            Awesome Events Weddings ("we", "us") collects only the information you provide directly
            through our contact and consultation forms — such as your name, email, phone number,
            wedding type and message. We use it exclusively to respond to your enquiry and plan your
            consultation.
          </p>
          <p>
            We do not sell or share your information with third parties. We may use trusted
            platforms (email, CRM) to communicate with you. You may request deletion of your data at
            any time by writing to us.
          </p>
          <p>
            This site uses essential cookies and privacy-friendly analytics to improve the
            experience. By using this site, you agree to this policy. For any questions, please
            contact us via the details on the Contact page.
          </p>
        </div>
      </div>
    </section>
  );
}
