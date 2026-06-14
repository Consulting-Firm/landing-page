import type { VizKind } from "@/lib/site-data";

/**
 * Decorative, CSS-animated artwork for each service card. Pure presentation —
 * the empty divs are styling hooks (see `.viz*` rules in globals.css).
 */
export function ServiceViz({ kind }: { kind: VizKind }) {
  switch (kind) {
    case "planes":
      return (
        <div className="viz viz-planes" aria-hidden="true">
          <div className="plane p-a" />
          <div className="plane p-b" />
          <div className="plane p-c" />
        </div>
      );
    case "stack":
      return (
        <div className="viz viz-stack" aria-hidden="true">
          <div className="disc d-a" />
          <div className="disc d-b" />
          <div className="disc d-c" />
        </div>
      );
    case "orb":
      return (
        <div className="viz viz-orb" aria-hidden="true">
          <div className="disc d-b" />
          <div className="ball" />
          <div className="disc d-a" />
        </div>
      );
    case "rings":
      return (
        <div className="viz viz-rings" aria-hidden="true">
          <div className="disc d-c" />
          <div className="disc d-b" />
          <div className="disc d-a" />
          <div className="core" />
        </div>
      );
  }
}
