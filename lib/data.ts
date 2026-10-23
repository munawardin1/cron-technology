// All repeated content for the site, rendered with .map() in the components.
// Class strings are written out in full so Tailwind can find them.

export type NavLink = {
  label: string;
  href: string;
};

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#playbook" },
  { label: "Contact", href: "#contact" },
];

export type OrbitCard = {
  title: string;
  description: string;
  icon: string;
  positionClass: string;
  iconBoxClass: string;
  iconClass: string;
};

export const orbitCards: OrbitCard[] = [
  {
    title: "AI Agents",
    description: "Automate the boring stuff.",
    icon: "neurology",
    positionClass: "top-2 left-2 sm:-left-4 md:left-2 lg:left-6",
    iconBoxClass: "bg-ink text-cream",
    iconClass: "text-bronze",
  },
  {
    title: "3D Models",
    description: "See it before it exists.",
    icon: "view_in_ar",
    positionClass: "top-4 right-2 sm:-right-4 md:right-2 lg:right-6",
    iconBoxClass: "bg-forest text-cream",
    iconClass: "",
  },
  {
    title: "Software",
    description: "Custom built, fast.",
    icon: "terminal",
    positionClass: "bottom-24 -left-6 sm:-left-12 md:-left-8 lg:-left-12",
    iconBoxClass: "bg-bronze text-ink",
    iconClass: "",
  },
  {
    title: "Consulting",
    description: "Strategy that ships.",
    icon: "explore",
    positionClass: "bottom-24 -right-6 sm:-right-12 md:-right-8 lg:-right-12",
    iconBoxClass: "bg-mist text-ink",
    iconClass: "",
  },
];

export type Avatar = {
  initials: string;
  className: string;
};

export const sprintTeam: Avatar[] = [
  { initials: "JD", className: "bg-forest text-cream" },
  { initials: "AK", className: "bg-bronze text-ink" },
  { initials: "MR", className: "bg-mist text-ink" },
  { initials: "+", className: "bg-black/5 text-ink" },
];

export const trustedBy: Avatar[] = [
  { initials: "A", className: "bg-forest text-cream" },
  { initials: "N", className: "bg-bronze text-ink" },
  { initials: "C", className: "bg-mist text-ink" },
  { initials: "+", className: "bg-black/10 text-ink" },
];

export const marqueeItems: string[] = [
  "CUSTOM SOFTWARE",
  "AI AGENTS",
  "3D VISUALS",
  "CONSULTING",
  "NEXT-GEN PRODUCTS",
  "DIGITAL COMMERCE",
];

export type ServiceCategory = "software" | "ai" | "3d" | "consulting";

export type ServiceFilter = {
  key: ServiceCategory | "all";
  label: string;
  dotClass?: string;
};

export const serviceFilters: ServiceFilter[] = [
  { key: "all", label: "ALL" },
  { key: "software", label: "CUSTOM SOFTWARE", dotClass: "bg-bronze" },
  { key: "ai", label: "AI & WORKFLOW", dotClass: "bg-cream" },
  { key: "3d", label: "3D & PRODUCT", dotClass: "bg-forest" },
  { key: "consulting", label: "BUSINESS CONSULTING", dotClass: "border border-bronze" },
];

export const categoryLabels: Record<ServiceCategory, string> = {
  software: "CUSTOM SOFTWARE",
  ai: "AI & WORKFLOW",
  "3d": "3D & PRODUCT",
  consulting: "BUSINESS CONSULTING",
};

// Each category has its own sticker style in the pile.
export const pillStyles: Record<ServiceCategory, { pill: string; icon: string }> = {
  software: { pill: "bg-bronze text-ink", icon: "" },
  ai: { pill: "bg-cream text-ink", icon: "" },
  "3d": { pill: "bg-forest text-cream border border-sage/50", icon: "text-cream" },
  consulting: {
    pill: "bg-transparent border-[1.5px] border-bronze text-cream backdrop-blur-xs",
    icon: "text-bronze",
  },
};

export type ServicePill = {
  title: string;
  icon: string;
  category: ServiceCategory;
  sizeClass: string;
  rotateClass: string;
  description: string;
};

export type ServiceTier = {
  className: string;
  pills: ServicePill[];
};

// The pile is built from four overlapping rows, narrow at the top and wide at the base.
export const serviceTiers: ServiceTier[] = [
  {
    className: "gap-4 sm:gap-6 -mb-3 z-30",
    pills: [
      {
        title: "AI Agents",
        icon: "neurology",
        category: "ai",
        sizeClass: "sm:text-[19px]",
        rotateClass: "-rotate-[5deg]",
        description:
          "Autonomous LLM swarms and workflow agents built to resolve complex operations around the clock.",
      },
      {
        title: "Strategy",
        icon: "explore",
        category: "consulting",
        sizeClass: "sm:text-[20px]",
        rotateClass: "-rotate-[16deg]",
        description:
          "Comprehensive strategic advisory to align product architecture with venture-backed expansion.",
      },
      {
        title: "3D Visualization",
        icon: "view_in_ar",
        category: "3d",
        sizeClass: "sm:text-[19px]",
        rotateClass: "rotate-[12deg]",
        description:
          "Spatial interactive canvases, WebGL visualizers, and digital twin environments.",
      },
      {
        title: "Web Apps",
        icon: "code",
        category: "software",
        sizeClass: "sm:text-[20px]",
        rotateClass: "-rotate-[8deg]",
        description:
          "High-performance custom web applications with lightning fast interfaces and zero bloat.",
      },
    ],
  },
  {
    className: "gap-3 sm:gap-5 -mb-3 z-20",
    pills: [
      {
        title: "Tech Audits",
        icon: "track_changes",
        category: "consulting",
        sizeClass: "sm:text-[19px]",
        rotateClass: "rotate-[11deg]",
        description:
          "Deep architectural audits to uncover bottlenecks, reduce technical debt, and cut cloud burn.",
      },
      {
        title: "Chatbots",
        icon: "smart_toy",
        category: "ai",
        sizeClass: "sm:text-[21px]",
        rotateClass: "rotate-[16deg]",
        description:
          "Domain-grounded generative chat engines trained on your proprietary enterprise documentation.",
      },
      {
        title: "Product Models",
        icon: "deployed_code",
        category: "3d",
        sizeClass: "sm:text-[20px]",
        rotateClass: "-rotate-[15deg]",
        description:
          "Pixel-perfect digital models optimized for cross-platform real-time 3D configuration.",
      },
      {
        title: "Mobile Apps",
        icon: "smartphone",
        category: "software",
        sizeClass: "sm:text-[20px]",
        rotateClass: "rotate-[14deg]",
        description:
          "Native iOS and Android systems engineered with fluid gestures and instant load states.",
      },
      {
        title: "Roadmaps",
        icon: "signpost",
        category: "consulting",
        sizeClass: "sm:text-[19px]",
        rotateClass: "-rotate-[7deg]",
        description:
          "Precise multi-quarter engineering milestones prioritizing highest ROI releases.",
      },
      {
        title: "Automations",
        icon: "bolt",
        category: "ai",
        sizeClass: "sm:text-[20px]",
        rotateClass: "-rotate-[14deg]",
        description:
          "End-to-end event-triggered pipeline automations saving hundreds of manual team hours.",
      },
    ],
  },
  {
    className: "gap-3 sm:gap-4 -mb-3 w-full",
    pills: [
      {
        title: "Dashboards",
        icon: "data_thresholding",
        category: "software",
        sizeClass: "sm:text-[19px]",
        rotateClass: "-rotate-[18deg]",
        description:
          "Dense real-time command dashboards with sub-second websocket streaming updates.",
      },
      {
        title: "Renders",
        icon: "photo_camera",
        category: "3d",
        sizeClass: "sm:text-[21px]",
        rotateClass: "rotate-[7deg]",
        description:
          "Photorealistic product renders and cinematic motion ready for campaign launches.",
      },
      {
        title: "CRM Workflows",
        icon: "hub",
        category: "ai",
        sizeClass: "sm:text-[20px]",
        rotateClass: "rotate-[9deg]",
        description:
          "Autonomous lead classification, context-aware drafting, and intelligent deal routing.",
      },
      {
        title: "APIs",
        icon: "api",
        category: "software",
        sizeClass: "sm:text-[19px]",
        rotateClass: "rotate-[6deg]",
        description:
          "Ultra low-latency resilient GraphQL and REST APIs handling heavy throughput.",
      },
      {
        title: "Process Design",
        icon: "schema",
        category: "consulting",
        sizeClass: "sm:text-[20px]",
        rotateClass: "rotate-[18deg]",
        description:
          "Re-engineering operational org charts into rapid deployment software loops.",
      },
      {
        title: "Animations",
        icon: "motion_photos_on",
        category: "3d",
        sizeClass: "sm:text-[20px]",
        rotateClass: "-rotate-[10deg]",
        description: "Dynamic physics-based motion graphics and micro-interactions.",
      },
    ],
  },
  {
    className: "gap-3 sm:gap-5 z-10 w-full translate-y-2",
    pills: [
      {
        title: "SaaS Platforms",
        icon: "cloud",
        category: "software",
        sizeClass: "sm:text-[20px]",
        rotateClass: "-rotate-[12deg]",
        description:
          "Turnkey multi-tenant SaaS architectures complete with billing, auth, and analytics.",
      },
      {
        title: "Lead Bots",
        icon: "support_agent",
        category: "ai",
        sizeClass: "sm:text-[19px]",
        rotateClass: "-rotate-[21deg]",
        description:
          "Inbound conversion bots that qualify high-intent prospects and book calendars.",
      },
      {
        title: "AR Previews",
        icon: "view_in_ar_new",
        category: "3d",
        sizeClass: "sm:text-[20px]",
        rotateClass: "rotate-[22deg]",
        description:
          "Instant web-based augmented reality product staging for luxury retail & commerce.",
      },
      {
        title: "Team Training",
        icon: "groups",
        category: "consulting",
        sizeClass: "sm:text-[19px]",
        rotateClass: "-rotate-[23deg]",
        description:
          "Hands-on enablement upskilling in-house developers on modern AI and reactive tooling.",
      },
      {
        title: "Websites",
        icon: "language",
        category: "software",
        sizeClass: "sm:text-[21px]",
        rotateClass: "rotate-[20deg]",
        description:
          "Award-winning digital flagship storefronts crafted for category-defining brands.",
      },
      {
        title: "Advisory",
        icon: "verified",
        category: "consulting",
        sizeClass: "sm:text-[20px]",
        rotateClass: "rotate-[5deg]",
        description:
          "Fractional CTO leadership on architecture, equity planning, and enterprise governance.",
      },
    ],
  },
];

export type ProductMockup = "finmatrix" | "metromatrix" | "leadmagnet" | "trading";

export type Product = {
  name: string;
  tagline: string;
  status: "LIVE" | "BETA";
  mockup: ProductMockup;
  fresh?: boolean;
};

export const products: Product[] = [
  { name: "FinMatrix", tagline: "Money, clearly tracked.", status: "LIVE", mockup: "finmatrix" },
  { name: "MetroMatrix", tagline: "Every route, mapped.", status: "LIVE", mockup: "metromatrix" },
  {
    name: "CronLeadMagnet",
    tagline: "Leads, on autopilot.",
    status: "BETA",
    mockup: "leadmagnet",
    fresh: true,
  },
  { name: "Trading App", tagline: "Trade with clarity.", status: "BETA", mockup: "trading" },
];

export type PlaybookStep = {
  number: string;
  title: string;
  description: string;
};

export const playbookSteps: PlaybookStep[] = [
  { number: "01", title: "Discover", description: "Audit bottlenecks fast." },
  { number: "02", title: "Design", description: "High-fidelity prototype." },
  { number: "03", title: "Build", description: "Sprint-based deployment." },
  { number: "04", title: "Scale", description: "Autonomous long-term velocity." },
];

export type Stat = {
  icon: string;
  iconClass: string;
  badge: string;
  badgeClass: string;
  value: string;
  description: string;
};

export const stats: Stat[] = [
  {
    icon: "verified_user",
    iconClass: "text-bronze",
    badge: "UPTIME",
    badgeClass: "rotate-3 bg-bronze text-ink",
    value: "99.8%",
    description: "Sub-second fault-tolerant reliability.",
  },
  {
    icon: "speed",
    iconClass: "text-mist",
    badge: "BENCHMARK",
    badgeClass: "-rotate-3 bg-forest text-mist",
    value: "4.2x",
    description: "Verified acceleration across client workflows.",
  },
  {
    icon: "rocket_launch",
    iconClass: "text-bronze",
    badge: "SHIPPED",
    badgeClass: "rotate-2 bg-cream text-ink",
    value: "40+",
    description: "Production grade digital systems shipped globally.",
  },
];

export type Testimonial = {
  initials: string;
  name: string;
  role: string;
  quote: string;
  project: string;
};

export const testimonials: Testimonial[] = [
  {
    initials: "AV",
    name: "Dr. Alistair Vance",
    role: "CTO · NEXUS GLOBAL",
    quote:
      "“CRON shipped our entire multi-agent workflow in weeks. Straightforward, fast and effortless to work with. They made what is usually an excruciating engineering process feel simple.”",
    project: "FinMatrix Integration · Q1 2026",
  },
];

export type SocialLink = {
  label: string;
  short: string;
  href: string;
};

export const socialLinks: SocialLink[] = [
  { label: "X", short: "X", href: "#" },
  { label: "GitHub", short: "GH", href: "#" },
  { label: "LinkedIn", short: "LI", href: "#" },
  { label: "Instagram", short: "IG", href: "#" },
];
