const MARQUEE_LOGOS = [
  { name: "Adobe", img: "/marquee/adobe.svg" },
  { name: "Deutsche Bank", img: "/marquee/deutsche-bank.svg" },
  { name: "eSolutions", img: "/marquee/esolutions.svg" },
  { name: "Upwork", img: "/marquee/upwork.svg" },
  { name: "Softwire", img: "/marquee/softwire.svg" },
  { name: "ING", img: "/marquee/ing.svg" },
  { name: "ByteSchool", img: "/marquee/byteschool.svg" },
];

/**
 * "Trusted by" logo strip beneath the hero CTAs. A single track holding two
 * back-to-back copies of the logo set slides left by 50%, so the seam is
 * invisible and the loop is continuous. Logos are full-colour SVGs on a
 * transparent background (page is dark), height-normalised by CSS.
 */
export function HeroMarquee() {
  return (
    <div className="logo-marquee" aria-hidden="true">
      <div className="logo-marquee-track">
        {[0, 1].map((copy) =>
          MARQUEE_LOGOS.map((logo) => (
            <span key={`${copy}-${logo.name}`} className="logo-marquee-item">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={logo.img} alt={logo.name} />
            </span>
          )),
        )}
      </div>
    </div>
  );
}
