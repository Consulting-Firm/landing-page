/**
 * Single source of truth for the landing page copy. Keeping content out of the
 * section components lets the markup stay focused on layout and styling.
 */

export type VizKind = "planes" | "stack" | "orb" | "rings";

export interface Service {
  title: string;
  description: string;
  viz: VizKind;
}

export interface TeamMember {
  initials: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
  work: { project: string; meta: string }[];
}

export interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

export interface Project {
  name: string;
  tags: string[];
  description: string;
  results: { value: string; label: string }[];
  /** Card background — projects are the one light surface on a dark page. */
  background: string;
}

export interface HeroCard {
  name: string;
  tag: string;
  img: string;
  /** Solid fallback shown until the photo loads. */
  bg: string;
  /** Label colour tuned for each fallback. */
  fg: string;
}

export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
] as const;

export const SERVICES: Service[] = [
  {
    title: "Product Engineering",
    description:
      "Web and mobile products built to last — from first commit to production.",
    viz: "planes",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Architecture, migrations, and reliability work that scales with you.",
    viz: "stack",
  },
  {
    title: "Data & AI",
    description:
      "Pipelines, models, and applied AI that earn their keep in production.",
    viz: "orb",
  },
  {
    title: "Strategy & Design",
    description:
      "Sharp scoping, honest roadmaps, and interfaces people trust.",
    viz: "rings",
  },
];

export const TEAM: TeamMember[] = [
  {
    initials: "SO",
    name: "Sorin",
    role: "Co-founder · Engineering Lead",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    skills: ["TypeScript", "React", "Node.js", "AWS", "Postgres"],
    work: [
      { project: "Project Lorem", meta: "Fintech · 2025" },
      { project: "Project Ipsum", meta: "Logistics · 2024" },
    ],
  },
  {
    initials: "CA",
    name: "Catalin",
    role: "Co-founder · Product & Strategy",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.",
    skills: ["Product discovery", "UX", "Roadmapping", "Analytics"],
    work: [
      { project: "Project Dolor", meta: "Retail · 2025" },
      { project: "Project Amet", meta: "SaaS · 2023" },
    ],
  },
  {
    initials: "CI",
    name: "Ciprian",
    role: "Co-founder · Data & AI",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.",
    skills: ["Python", "LLMs", "MLOps", "Data pipelines"],
    work: [
      { project: "Project Sed", meta: "Healthcare · 2025" },
      { project: "Project Tempor", meta: "Energy · 2024" },
    ],
  },
];

export const PROCESS: ProcessStep[] = [
  {
    num: "01",
    title: "Discover",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
  },
  {
    num: "02",
    title: "Design",
    description:
      "Tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.",
  },
  {
    num: "03",
    title: "Build",
    description:
      "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
  {
    num: "04",
    title: "Scale",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
];

export const PROJECTS: Project[] = [
  {
    name: "Nordwind Platform",
    tags: ["Fintech", "Platform rebuild", "2025"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua veniam.",
    results: [
      { value: "3×", label: "faster releases" },
      { value: "−42%", label: "infra cost" },
    ],
    background: "#8ee4f2",
  },
  {
    name: "PayCore Console",
    tags: ["Payments", "Greenfield build", "2024"],
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.",
    results: [
      { value: "6 wks", label: "to first launch" },
      { value: "99.99%", label: "uptime since" },
    ],
    background: "#cdeb8b",
  },
  {
    name: "Verda Mobile",
    tags: ["Healthcare", "iOS · Android", "2024"],
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.",
    results: [
      { value: "4.8★", label: "store rating" },
      { value: "120k", label: "monthly users" },
    ],
    background: "#f0e7cf",
  },
];

/**
 * Cards wrapped around the 3D hero cylinder. `img` is the only place to swap in
 * real project photography; deterministic picsum seeds stand in for now.
 */
export const HERO_CARDS: HeroCard[] = [
  { name: "Nordwind", tag: "Fintech", img: "https://picsum.photos/seed/nordwind/640/860", bg: "#f25c2a", fg: "#fdf3e7" },
  { name: "PayCore", tag: "Payments", img: "https://picsum.photos/seed/paycore/640/860", bg: "#2451f5", fg: "#eef1ff" },
  { name: "Atlas", tag: "Logistics", img: "https://picsum.photos/seed/atlas/640/860", bg: "#ffd233", fg: "#161306" },
  { name: "Verda", tag: "Healthcare", img: "https://picsum.photos/seed/verda/640/860", bg: "#1c2b22", fg: "#cdeb8b" },
  { name: "Mireo", tag: "SaaS", img: "https://picsum.photos/seed/mireo/640/860", bg: "#e9e5dc", fg: "#171511" },
  { name: "Quanta", tag: "Energy", img: "https://picsum.photos/seed/quanta/640/860", bg: "#17171d", fg: "#f5f3ee" },
];

export const CONTACT_EMAIL = "hello@axon.studio";
