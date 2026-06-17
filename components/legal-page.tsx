import Link from "next/link";

import { Container } from "@/components/container";
import { SiteFooter } from "@/components/sections/site-footer";

/** Shared shell for the static legal pages: a minimal header, prose, the footer. */
export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="border-b border-ax-line py-5">
        <Container className="flex items-center justify-between">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Link href="/" aria-label="Archthorpe — home">
            <img src="/logo.svg" alt="Archthorpe" className="h-6 w-auto" />
          </Link>
          <Link
            href="/"
            className="text-[14px] text-ax-muted transition-colors hover:text-ax-ink"
          >
            ← Back to home
          </Link>
        </Container>
      </header>

      <main className="py-[90px] max-[980px]:py-[56px]">
        <Container className="max-w-[760px]">
          <h1 className="font-serif text-[clamp(34px,5vw,52px)] leading-[1.05] tracking-[-0.02em] text-ax-ink">
            {title}
          </h1>
          <p className="mt-3 text-[13px] text-ax-faint">Last updated {updated}</p>
          <div className="legal-prose mt-10">{children}</div>
        </Container>
      </main>

      <SiteFooter />
    </>
  );
}
