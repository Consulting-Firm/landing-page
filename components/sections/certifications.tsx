"use client";

import Image from "next/image";
import { useRef } from "react";

import { Container } from "@/components/container";
import { Em, Kicker, SectionTitle } from "@/components/typography";
import { CERTS, type Cert } from "@/lib/site-data";

/**
 * "Verified on AWS" — the official AWS digital badges (real Credly images)
 * arranged in a honeycomb that reacts to the cursor: each badge tilts in 3D
 * toward the pointer and glows, neighbours dim to focus the hovered one, and an
 * accent spotlight tracks the cursor across the cluster. Every badge links to
 * its public certmetrics verification record. Degrades to a clean static grid
 * on touch / reduced-motion / no-JS.
 */
function TiltBadge({ cert }: { cert: Cert }) {
  const ref = useRef<HTMLAnchorElement>(null);

  function handleMove(e: React.PointerEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - py) * 14}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * 14}deg`);
  }

  function reset() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  }

  return (
    <li className="cert-cell">
      <a
        ref={ref}
        href={cert.verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="cert-badge"
        onPointerMove={handleMove}
        onPointerLeave={reset}
        aria-label={`${cert.name}, issued ${cert.issued}. Opens the AWS verification page in a new tab.`}
      >
        <Image
          src={cert.badge}
          alt={cert.name}
          width={600}
          height={600}
          sizes="(max-width: 520px) 30vw, 150px"
          className="cert-badge__img"
        />
      </a>
    </li>
  );
}

export function Certifications() {
  const latticeRef = useRef<HTMLUListElement>(null);

  function handleMove(e: React.PointerEvent<HTMLUListElement>) {
    const el = latticeRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <section id="certifications" className="py-[120px] max-[980px]:py-[80px]">
      <Container className="cert-band grid grid-cols-1 items-center gap-14 max-[980px]:gap-10 min-[981px]:grid-cols-2">
        <div className="rv max-w-[620px]">
          <Kicker>Verified on AWS</Kicker>
          <SectionTitle>
            Nine certifications, <Em>independently</Em> verifiable.
          </SectionTitle>
          <p className="mt-7 text-[16px] leading-relaxed text-ax-muted">
            1 Professional · 1 Specialty · 5 Associate · 2 Foundational
          </p>
          <p className="mt-2.5 text-[14px] text-ax-faint">
            Hover a badge, then tap to verify it on AWS.
          </p>
        </div>

        <ul
          ref={latticeRef}
          className="cert-lattice rv d1"
          onPointerMove={handleMove}
          aria-label="AWS certifications, each linking to its verification record"
        >
          {CERTS.map((cert) => (
            <TiltBadge key={cert.verifyUrl} cert={cert} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
