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
  /** Team member name(s) credited on the project — must match TEAM[].name. */
  people: string[];
  /** The person's role on this specific engagement. */
  role: string;
  /** Engagement window, e.g. { start: "Jan 2025", end: "Present" }. */
  timeframe: { start: string; end: string };
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
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
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
    description: "Sharp scoping, honest roadmaps, and interfaces people trust.",
    viz: "rings",
  },
];

export const TEAM: TeamMember[] = [
  {
    initials: "CI",
    photo: "/ciprian.jpg",
    name: "Ciprian",
    role: "Backend & DevOps Engineer · AWS Expertise",
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint.",
    skills: ["Python", "LLMs", "MLOps", "Data pipelines"],
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
    initials: "SO",
    photo: "/sorin.jpg",
    name: "Sorin",
    role: "Fullstack Developer · Frontend Expertise",
    bio: "Software engineer at Adobe working on the Activate team in GenStudio for Performance Marketing. Ships features end to end — React frontends through Node.js services — with a strong eye for product and UX, and experience working in startup environments.",
    skills: ["TypeScript", "React", "Node.js", "Java", "PostgreSQL", "Docker"],
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
    name: "Adobe — GenStudio",
    tags: ["React", "Node.js (Fastify)", "BullMQ", "TypeScript"],
    description:
      "Software Engineer on the Activate team in GenStudio for Performance Marketing. Contributed to the launch of Google CM360, LinkedIn Ads, Innovid, and YouTube activation, built the full LinkedIn organic publishing flow, delivered HTML5 ad support end to end, and migrated Meta video ads from Airflow to BullMQ.",
    people: ["Sorin"],
    role: "Software Engineer",
    timeframe: { start: "Jan 2025", end: "Present" },
    background: "#8ee4f2",
  },
  {
    name: "Adobe — Experimentation",
    tags: ["Java", "Spring", "PostgreSQL"],
    description:
      "Software Engineer Intern on the Experience Optimization team, working on the Experimentation Admin — a Java Spring backend for configuring A/B experiments. Working with Java 11/21, JUnit, Docker, Prometheus, and Grafana.",
    people: ["Sorin"],
    role: "Software Engineer Intern",
    timeframe: { start: "Jul 2024", end: "Jan 2025" },
    background: "#cdeb8b",
  },
  {
    name: "Softwire — Compor",
    tags: ["TypeScript", "React", "Express", "PostgreSQL"],
    description:
      "Full-Stack Software Engineer Intern on the Compor app, an end-to-end HR and payroll solution. Built frontend components with React and Material-UI and worked the backend with Express, Yup validation, and Knex.js migrations into PostgreSQL.",
    people: ["Sorin"],
    role: "Full-Stack Engineer Intern",
    timeframe: { start: "Jul 2023", end: "Sep 2023" },
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
