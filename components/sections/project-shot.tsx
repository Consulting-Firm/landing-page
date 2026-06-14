// Per-card line layout; each project highlights its accent line in a different
// spot so the mock screenshots don't read as identical.
const LINE_PATTERNS = [
  ["w45", "w80", "w60"],
  ["w60", "w45", "w80"],
  ["w80", "w60", "w45"],
];

/** Abstract product screenshot that bleeds off the bottom of a project card. */
export function ProjectShot({ index }: { index: number }) {
  const lines = LINE_PATTERNS[index % LINE_PATTERNS.length];
  return (
    <div className="shot" aria-hidden="true">
      <div className="bar">
        <i />
        <i />
        <i />
      </div>
      {lines.map((width, i) => (
        <div key={i} className={`ln ${width}`} />
      ))}
      <div className="blocks">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
