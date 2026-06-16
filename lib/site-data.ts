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
  photo: string;
  name: string;
  role: string;
  bio: string;
  skills: string[];
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
  /** Company name — used as the image alt text. */
  name: string;
  /** Self-contained logo tile in /public (background baked into the SVG). */
  img: string;
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
    photo: "/sorin.jpg",
    name: "Sorin",
    role: "Fullstack Developer · Frontend Expertise",
    bio: "Software engineer at Adobe working on the Activate team in GenStudio for Performance Marketing. Ships features end to end — React frontends through Node.js services — with a strong eye for product and UX, and experience working in startup environments.",
    skills: ["TypeScript", "React", "Node.js", "Java", "PostgreSQL", "Docker"],
  },
  {
    initials: "CA",
    photo: "/catalin.jpg",
    name: "Catalin",
    role: "Backend Developer · AI Pipelines Expertise",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.",
    skills: ["Product discovery", "UX", "Roadmapping", "Analytics"],
  },
  {
    initials: "CI",
    photo: "/ciprian.jpg",
    name: "Ciprian",
    role: "Backend & DevOps Engineer · AWS Expertise",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.",
    skills: ["Python", "LLMs", "MLOps", "Data pipelines"],
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
 * Client logos wrapped around the 3D hero cylinder — a rotating "trusted by"
 * wall. Files live in /public.
 */
export const HERO_CARDS: HeroCard[] = [
  { name: "Adobe", img: "/adobe.svg" },
  { name: "Deutsche Bank", img: "/deutsche-bank.svg" },
  // { name: "ByteSchool", img: "/byteschool.svg" },
  { name: "eSolutions", img: "/esolutions.svg" },
  { name: "Upwork", img: "/upwork.svg" },
  { name: "safeINIT", img: "/safeinit.svg" },
  { name: "Softwire", img: "/softwire.svg" },
  { name: "ING Hubs", img: "/ing-hubs.svg" },
];

export const CONTACT_EMAIL = "hello@archthorpe.com";
