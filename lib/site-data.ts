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
  /** Full LinkedIn profile URL, e.g. https://www.linkedin.com/in/handle. */
  linkedin: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  description: string;
}

export interface Project {
  name: string;
  /** Optional one-line subtitle shown under the project title. */
  subtitle?: string;
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
  /**
   * Optional screenshot in /public. When set, the card shows it inside a
   * browser frame; otherwise it falls back to the abstract ProjectShot mock.
   */
  image?: string;
  /** Alt text for {@link image}. */
  imageAlt?: string;
  /** Intrinsic pixel dimensions of {@link image} (crisp, shift-free render). */
  imageW?: number;
  imageH?: number;
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
    linkedin: "https://www.linkedin.com/in/pirvuciprian/",
  },
  {
    initials: "CA",
    photo: "/catalin.jpg",
    name: "Catalin",
    role: "Backend Developer · AI Pipelines Expertise",
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.",
    linkedin: "https://www.linkedin.com/in/nickcatalin/",
  },
  {
    initials: "SO",
    photo: "/sorin.jpg",
    name: "Sorin",
    role: "Fullstack Developer · Frontend Expertise",
    bio: "Software engineer at Adobe working on the Activate team in GenStudio for Performance Marketing. Ships features end to end — React frontends through Node.js services — with a strong eye for product and UX, and experience working in startup environments.",
    linkedin: "https://www.linkedin.com/in/sorin-barbu/",
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
    name: "Adobe GenStudio",
    subtitle: "Performance Marketing Activation",
    tags: ["React", "Node.js (Fastify)", "BullMQ", "TypeScript"],
    description:
      "Software Engineer on the Activate team in GenStudio for Performance Marketing. Contributed to the launch of Google CM360, LinkedIn Ads, Innovid, and YouTube activation, built the full LinkedIn organic publishing flow, delivered HTML5 ad support end to end, and migrated Meta video ads from Airflow to BullMQ.",
    people: ["Sorin"],
    role: "Software Engineer",
    timeframe: { start: "Jan 2025", end: "Present" },
    background: "#8ee4f2",
    image: "/work-genstudio.png",
    imageAlt: "Adobe GenStudio activation interface",
    imageW: 3288,
    imageH: 2146,
  },
  {
    name: "Adobe Experimentation",
    subtitle: "A/B Experimentation Platform",
    tags: ["Java", "Spring", "PostgreSQL"],
    description:
      "Software Engineer Intern on the Experience Optimization team, working on the Experimentation Admin — a Java Spring backend for configuring A/B experiments. Working with Java 11/21, JUnit, Docker, Prometheus, and Grafana.",
    people: ["Sorin"],
    role: "Software Engineer Intern",
    timeframe: { start: "Jul 2024", end: "Jan 2025" },
    background: "#cdeb8b",
    image: "/work-experimentation.jpg",
    imageAlt: "Adobe Experimentation Admin dashboard",
    imageW: 2000,
    imageH: 1126,
  },
  {
    name: "Softwire Compor",
    subtitle: "HR & Payroll Platform",
    tags: ["TypeScript", "React", "Express", "PostgreSQL"],
    description:
      "Full-Stack Software Engineer Intern on the Compor app, an end-to-end HR and payroll solution. Built frontend components with React and Material-UI and worked the backend with Express, Yup validation, and Knex.js migrations into PostgreSQL.",
    people: ["Sorin"],
    role: "Full-Stack Engineer Intern",
    timeframe: { start: "Jul 2023", end: "Sep 2023" },
    background: "#f0e7cf",
    image: "/work-compor.png",
    imageAlt: "Compor HR and payroll application",
    imageW: 3840,
    imageH: 1990,
  },
  {
    name: "Valence Workout",
    subtitle: "AI Calisthenics Tracker",
    tags: [
      "React",
      "TypeScript",
      "Supabase",
      "Mediapipe Pose",
      "Ionic",
      "Vercel",
    ],
    description:
      "Startup MVP — a progressive web app for workout tracking that counts reps through the phone camera, bundled as an Android app with Ionic. Built for calisthenics, it handles every exercise type, both dynamic reps and static holds. React + TypeScript UI deployed on Vercel, Supabase backend migrated over from Firebase, and Google authentication.",
    people: ["Sorin"],
    role: "Solo Developer",
    timeframe: { start: "Jun 2024", end: "Jul 2024" },
    background: "#ffd6a5",
    image: "/work-valence.png",
    imageAlt: "Valence Workout rep-counting app",
    imageW: 3838,
    imageH: 1984,
  },
  {
    name: "ByteSchool",
    subtitle: "Coding School for Kids",
    tags: [
      "React",
      "TypeScript",
      "Convex",
      "Judge0",
      "React Three Fiber",
      "shadcn/ui",
    ],
    description:
      "Co-founded an online platform that teaches kids to code through live lessons and an interactive playground — students run code in the browser that drives game visualizations, with quizzes, animations, and LeetCode-style problems embedded in each lesson. Built group-based access control, a live-session calendar, and a full admin UI for authoring courses, managing groups, and scheduling sessions. React + TypeScript front end with shadcn/ui and React Big Calendar, a Convex backend, Judge0 for code execution, and React Three Fiber for the game visuals.",
    people: ["Sorin", "Catalin"],
    role: "Co-founder & Engineer",
    timeframe: { start: "2025", end: "Present" },
    background: "#e7d8f0",
    image: "/work-byteschool.png",
    imageAlt: "ByteSchool coding-for-kids learning platform",
    imageW: 3836,
    imageH: 1864,
  },
  {
    name: "SNPC",
    subtitle: "Postal Union Site",
    tags: [
      "Next.js 16",
      "Payload CMS v3",
      "PostgreSQL",
      "Cloudflare R2",
      "Docker + Caddy",
    ],
    description:
      "Built the full news and members site for the SNPC postal & courier trade union on Next.js 16 and Payload CMS v3 over PostgreSQL — news, document library, galleries, partner benefits, and a downloadable membership form. Engineered a non-destructive Facebook sync (Payload cron, images re-hosted to R2, debounced email alerts), nightly pg_dump backups, and a dual deploy: Vercel plus a standalone Docker image on a Hetzner VPS behind Caddy.",
    people: ["Ciprian"],
    role: "Backend & Cloud Engineer",
    timeframe: { start: "Jun 2026", end: "Present" },
    background: "#f2a3a0",
    image: "/work-snpc.png",
    imageAlt: "SNPC union news site homepage",
    imageW: 3586,
    imageH: 1940,
  },
  {
    name: "Spotlite",
    subtitle: "Geospatial Mapping Platform",
    tags: [
      "Azure Container Apps",
      "TiTiler / FastAPI",
      "Python (GDAL)",
      "MapLibre + deck.gl",
    ],
    description:
      "Replaced Spotlite's GeoServer stack with a cloud-native serverless platform on Azure — TiTiler on Container Apps serving Cloud-Optimized GeoTIFFs straight from Blob Storage, behind a catalog-driven MapLibre viewer for land cover, NDVI/RGB rasters, building footprints, and COPC LiDAR point clouds. Built the Python publishing pipelines (COG validation, tippecanoe → PMTiles), OIDC GitHub Actions deploys with health smoke tests, and on-the-fly CRS reprojection.",
    people: ["Ciprian"],
    role: "Backend & Cloud Engineer",
    timeframe: { start: "May 2026", end: "Present" },
    background: "#a8e6cf",
    image: "/work-spotlite.jpg",
    imageAlt:
      "Spotlite geospatial map viewer showing LiDAR layers over Portugal",
    imageW: 2668,
    imageH: 1305,
  },
  {
    name: "CuriaSelf",
    subtitle: "Legislative Data Platform",
    tags: [
      "Docker Compose",
      "Traefik",
      "Keycloak",
      "PostgreSQL",
      "GitHub Actions",
    ],
    description:
      "Stood up and operate the self-hosted infrastructure for CuriaSelf (alpha.curiaself.ch), a Swiss legislative-data platform running the OpenParlData stack on a single Swiss vServer. Brought up 13 memory-capped containers behind Traefik + Let's Encrypt and Keycloak OIDC, then built the push-to-main deploy pipeline, pg_dump backups, disk-fill guards, and a FastAPI + opendata.swiss / Lobbywatch ETL ingestion layer.",
    people: ["Ciprian"],
    role: "Backend & Cloud Engineer",
    timeframe: { start: "Apr 2026", end: "Present" },
    background: "#c9b8f0",
    image: "/work-curiaself.png",
    imageAlt: "CuriaSelf legislative affairs search interface",
    imageW: 1206,
    imageH: 1948,
  },
  {
    name: "Netop",
    subtitle: "Deployment Controller",
    tags: ["Node.js", "AWS ECS/ECR", "AWS SDK", "GitLab CI", "CloudWatch"],
    description:
      "Built the internal `pdc` CLI that orchestrates deploying ~40 Netop Portal microservices to AWS ECS across alpha, beta, staging, and live. Shipped the blue-green traffic switcher that rewrites ALB listener-rule weights, the ECS task/service redeploy flows, and a post-deploy validator checking CloudWatch Logs Insights error counts and ALB 5XX metrics — plus YAML-preset GitLab pipeline orchestration and CycloneDX SBOM generation.",
    people: ["Ciprian"],
    role: "Backend & Cloud Engineer",
    // NOTE: placeholder — git shows no commits authored by you in this repo
    // (authors are netop staff; your branches are exploration branches), so the
    // real engagement window couldn't be derived. Replace with your actual dates.
    timeframe: { start: "2025", end: "Present" },
    background: "#b3d4f5",
    image: "/work-netop.jpg",
    imageAlt: "Netop secure remote access site hero",
    imageW: 2910,
    imageH: 1424,
  },
  {
    name: "IU Studio",
    subtitle: "Architecture Portfolio",
    tags: ["Next.js", "Tailwind CSS", "Editorial layout", "Responsive"],
    description:
      "Designed and built the portfolio site for IU Studio, an architecture practice spanning architecture, interiors, and product design. A restrained black-and-white editorial layout puts the work first — full-bleed project photography, a clean project index (Casa NIU19 and more), and a polished responsive mobile experience.",
    people: ["Ciprian"],
    role: "Designer & Developer",
    timeframe: { start: "Mar 2025", end: "May 2025" },
    background: "#d6d3cc",
    image: "/work-iustudio.jpg",
    imageAlt: "IU Studio architecture portfolio homepage",
    imageW: 2388,
    imageH: 1293,
  },
  {
    name: "Accounting Business Expert",
    subtitle: "Fiscal Consultancy Site",
    tags: ["Next.js", "Tailwind CSS", "Tax calculator", "Responsive"],
    description:
      "Built the marketing and services site for Accounting Business Expert, a Romanian accounting and fiscal-consultancy firm. A clean, trust-forward layout with a bold hero, headline stats (23+ years, 100+ active clients), service listings, and an interactive tax calculator — EU/PNRR-funded and fully responsive down to mobile.",
    people: ["Ciprian"],
    role: "Designer & Developer",
    timeframe: { start: "Sep 2024", end: "Nov 2024" },
    background: "#b8c4ec",
    image: "/work-accounting.png",
    imageAlt: "Accounting Business Expert services site homepage",
    imageW: 3598,
    imageH: 1888,
  },
  {
    name: "BLNG",
    subtitle: "Real-Time Collaboration Backend",
    tags: [
      "TypeScript",
      "Yjs (CRDT)",
      "AWS Fargate / DynamoDB",
      "SST v3 + Pulumi",
      "Redis",
    ],
    description:
      "Built the per-layer storage and real-time collaboration backend for the BLNG design-journeys platform, replacing a monolithic JSON blob with per-layer DynamoDB rows. Owned the Yjs CRDT server on Fargate — WebSocket sync, Cognito JWT auth, a write-ahead journal with tiered checkpointing, cold-start replay, and Redis pub/sub fan-out — alongside the SST/Pulumi infra and an idempotent migration/backfill Lambda.",
    people: ["Ciprian"],
    role: "Backend & Cloud Engineer",
    timeframe: { start: "Mar 2026", end: "Present" },
    background: "#f6c89a",
    image: "/work-blng.png",
    imageAlt: "BLNG creative suite for the jewelry industry",
    imageW: 3586,
    imageH: 2014,
  },
  {
    name: "Rudig Consultores",
    subtitle: "BESSMO · Battery Storage SaaS",
    tags: [
      "FastAPI",
      "AWS ECS Fargate",
      "Terraform",
      "Amazon SQS",
      "PostgreSQL",
    ],
    description:
      "Turned a single-user Streamlit battery-storage optimiser into a multi-tenant AWS SaaS. Built the FastAPI backend (Cognito auth, org-level credit metering, scenarios, and runs) and an SQS-backed Fargate worker fleet that scales from zero with heartbeats, mid-run cancellation, and a DLQ sweeper that idempotently refunds credits on failure. Owned the full Terraform stack and the GitHub Actions OIDC deploy pipeline.",
    people: ["Ciprian"],
    role: "Backend & Cloud Engineer",
    timeframe: { start: "Apr 2026", end: "Present" },
    background: "#cfe3a3",
    image: "/work-bessmo.png",
    imageAlt: "bessmo BESS revenue analysis tool homepage",
    imageW: 3594,
    imageH: 2002,
  },
  {
    name: "Nine International",
    subtitle: "BI & ESG Platform",
    tags: ["FastAPI", "PostgreSQL", "Neo4j", "Elasticsearch", "React"],
    description:
      "RomBiz Intelligence, the business-intelligence platform behind Nine International Group — it aggregates 12+ official public sources (ONRC, ANAF, balance sheets) into 360° company profiles, A–E risk scores (Altman Z-Score), ESG/CSRD ratings aligned to EU Taxonomy and SFDR, and a Neo4j fraud graph that flags circular ownership and phoenix networks. Built on async FastAPI + PostgreSQL with Elasticsearch, Celery, Redis, and an Anthropic Claude agent for natural-language queries; Ciprian worked the backend and the ESG integration.",
    people: ["Ciprian"],
    role: "Backend Engineer · ESG",
    timeframe: { start: "May 2026", end: "Present" },
    background: "#eccf9b",
    image: "/work-nine.png",
    imageAlt: "Nine International Group sustainability & ESG platform homepage",
    imageW: 3572,
    imageH: 1910,
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
