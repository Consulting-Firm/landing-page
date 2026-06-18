import Link from "next/link";

import { BookCall } from "@/components/book-call";
import { Container } from "@/components/container";
import { COMPANY, CONTACT_EMAIL } from "@/lib/site-data";

const EXPLORE = [
  { href: "/#services", label: "Services" },
  { href: "/#team", label: "Team" },
  { href: "/#work", label: "Work" },
  { href: "/#certifications", label: "Certifications" },
  { href: "/#process", label: "Process" },
];

const LEGAL = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/legal", label: "Legal Notice" },
];

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4 className="text-[12px] font-semibold tracking-[0.12em] text-ax-faint uppercase">
        {title}
      </h4>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[14px] text-ax-muted transition-colors hover:text-ax-ink"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-ax-line pt-16 pb-12">
      <Container>
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 max-[980px]:grid-cols-2 max-[560px]:grid-cols-1">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Archthorpe" className="h-6 w-auto" />
            <p className="mt-4 max-w-[34ch] text-[14px] leading-[1.6] text-ax-muted">
              Professional developers, end to end — durable software from product
              to cloud.
            </p>
          </div>

          <FooterCol title="Explore" links={EXPLORE} />
          <FooterCol title="Legal" links={LEGAL} />

          <div>
            <h4 className="text-[12px] font-semibold tracking-[0.12em] text-ax-faint uppercase">
              Get in touch
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-[14px]">
              <li>
                <BookCall
                  asLink
                  className="text-ax-muted transition-colors hover:text-ax-ink"
                >
                  Book a call
                </BookCall>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-ax-muted transition-colors hover:text-ax-ink"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-ax-line pt-7 text-[13px] text-ax-faint max-[560px]:flex-col max-[560px]:items-start">
          <span>© 2026 {COMPANY.name}. All rights reserved.</span>
          <span>
            CUI {COMPANY.cui} · Reg. Com. {COMPANY.regCom}
          </span>
        </div>
      </Container>
    </footer>
  );
}
