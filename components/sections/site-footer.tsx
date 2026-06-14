import { Container } from "@/components/container";
import { CONTACT_EMAIL } from "@/lib/site-data";

const FOOTER_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#work", label: "Work" },
  { href: `mailto:${CONTACT_EMAIL}`, label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ax-line pt-[38px] pb-[60px]">
      <Container className="flex items-center justify-between text-[14px] text-ax-faint max-[980px]:flex-col max-[980px]:gap-4">
        <span>© 2026 Axon Consultancy</span>
        <div className="flex gap-7">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-ax-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
