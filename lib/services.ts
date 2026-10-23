// Detail-page content for every service in the Home "services pile".
// The short title/description/icon/category live in lib/data.ts; this file adds the long copy.

import { categoryLabels, serviceTiers, type ServiceCategory, type ServicePill } from "@/lib/data";
import { slugify } from "@/lib/slug";

export type Service = ServicePill & { slug: string };

// Every pill from the pile, flattened, with a URL slug (e.g. "3D Visualization" → "3d-visualization").
export const services: Service[] = serviceTiers.flatMap((tier) =>
  tier.pills.map((pill) => ({ ...pill, slug: slugify(pill.title) })),
);

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function servicesInCategory(category: ServiceCategory, exceptSlug?: string): Service[] {
  return services.filter((service) => service.category === category && service.slug !== exceptSlug);
}

export type Deliverable = {
  title: string;
  description: string;
};

export type ServiceDetail = {
  intro: string;
  deliverables: Deliverable[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "ai-agents": {
    intro:
      "We design and ship autonomous agents that take real work off your team's plate. They read, decide and act inside your existing tools, with guardrails and a human in the loop wherever it matters.",
    deliverables: [
      { title: "Agent design", description: "Map the workflow, the decisions and the hand-offs before a line of code." },
      { title: "Tool integrations", description: "Agents that work inside your CRM, inbox, docs and internal APIs." },
      { title: "Guardrails", description: "Approval steps, limits and full logs so nothing runs unchecked." },
      { title: "Monitoring", description: "Dashboards for cost, accuracy and every action the agent takes." },
    ],
  },
  strategy: {
    intro:
      "Clear technical direction before you spend the budget. We align product, architecture and roadmap with where the business is going, so every sprint moves the numbers that matter.",
    deliverables: [
      { title: "Product audit", description: "An honest look at what you have, what works and what holds you back." },
      { title: "Architecture plan", description: "A stack and system design that fits your scale and your team." },
      { title: "Build vs. buy", description: "Clear calls on what to build, what to buy and what to skip." },
      { title: "Investor-ready brief", description: "A technical narrative your board and investors can follow." },
    ],
  },
  "3d-visualization": {
    intro:
      "Interactive 3D that lets people explore a product, a space or a system right in the browser. Built with WebGL for fast loads and smooth motion on every device.",
    deliverables: [
      { title: "Interactive scenes", description: "Rotate, zoom and explore products and spaces in real time." },
      { title: "WebGL builds", description: "Optimised assets and code that load fast, even on mobile." },
      { title: "Digital twins", description: "Live 3D views of machines, sites or systems fed by real data." },
      { title: "Embeds", description: "Drop-in components for your site, store or sales deck." },
    ],
  },
  "web-apps": {
    intro:
      "Custom web applications with fast interfaces and clean, maintainable code. From first prototype to production, we build exactly what your users need and nothing they don't.",
    deliverables: [
      { title: "Product UI", description: "Responsive interfaces that feel instant and stay consistent." },
      { title: "Backend & data", description: "Secure APIs, databases and auth designed to scale." },
      { title: "Admin tools", description: "Internal panels so your team can run the product without engineers." },
      { title: "Launch & hosting", description: "CI/CD, monitoring and a smooth path to production." },
    ],
  },
  "tech-audits": {
    intro:
      "A deep review of your codebase, infrastructure and delivery process. You get a ranked list of what slows you down, what risks your uptime and what wastes cloud spend.",
    deliverables: [
      { title: "Code review", description: "Quality, structure and technical debt, mapped file by file." },
      { title: "Infra & cost review", description: "Where your cloud bill goes and how to cut it." },
      { title: "Security check", description: "Common vulnerabilities, secrets and access issues flagged." },
      { title: "Action plan", description: "A prioritised fix list with effort and impact for each item." },
    ],
  },
  chatbots: {
    intro:
      "Chat assistants trained on your own documents, products and policies. They answer customers and staff accurately, cite their sources and hand over to a person when needed.",
    deliverables: [
      { title: "Knowledge base", description: "Your docs, FAQs and data turned into a searchable source of truth." },
      { title: "Custom assistant", description: "A chatbot with your tone, your rules and your branding." },
      { title: "Channel setup", description: "Live on your website, app, WhatsApp, Slack or help desk." },
      { title: "Human hand-off", description: "Smooth escalation to your team with the full conversation." },
    ],
  },
  "product-models": {
    intro:
      "Accurate digital models of your products, ready for configurators, stores and real-time 3D. One clean source asset that works across web, mobile and AR.",
    deliverables: [
      { title: "3D modelling", description: "Detailed models built from CAD files, photos or samples." },
      { title: "Materials & variants", description: "Every colour, finish and option set up for configuration." },
      { title: "Web-ready assets", description: "Lightweight files tuned for real-time rendering." },
      { title: "Configurator", description: "Let customers build and preview their own version." },
    ],
  },
  "mobile-apps": {
    intro:
      "Native-quality iOS and Android apps with fluid gestures and instant load states. One codebase where it makes sense, fully native where performance demands it.",
    deliverables: [
      { title: "App design", description: "Flows and screens designed for thumbs, not desktops." },
      { title: "iOS & Android", description: "Production apps built, tested and signed for both stores." },
      { title: "Offline & sync", description: "Apps that keep working with a weak or missing connection." },
      { title: "Store launch", description: "Listings, review submission and release management." },
    ],
  },
  roadmaps: {
    intro:
      "Turn a long wish list into a sequenced plan your team can actually ship. We prioritise by impact and effort, then break the work into milestones with clear owners.",
    deliverables: [
      { title: "Discovery workshop", description: "Goals, constraints and priorities agreed in one session." },
      { title: "Prioritised backlog", description: "Every feature ranked by value, effort and risk." },
      { title: "Quarterly milestones", description: "Releases planned quarter by quarter with clear outcomes." },
      { title: "Resourcing plan", description: "The team, budget and timeline needed to deliver." },
    ],
  },
  automations: {
    intro:
      "Event-driven automations that connect your tools and remove repetitive work. Data moves, reports build themselves and your team gets hours back every week.",
    deliverables: [
      { title: "Process mapping", description: "Find the manual steps that cost the most time." },
      { title: "Integrations", description: "Connect CRM, finance, ops and messaging tools end to end." },
      { title: "AI steps", description: "Classification, extraction and drafting built into each flow." },
      { title: "Alerts & logs", description: "Know instantly when a run fails and why." },
    ],
  },
  dashboards: {
    intro:
      "Real-time dashboards that put your key numbers in one place. Live data, fast filters and views built for the people who make decisions every day.",
    deliverables: [
      { title: "Metric design", description: "Agree which numbers matter and how they're calculated." },
      { title: "Data pipelines", description: "Clean, reliable feeds from every source you use." },
      { title: "Live views", description: "Streaming updates without refreshing the page." },
      { title: "Roles & sharing", description: "The right view for every team, with secure access." },
    ],
  },
  renders: {
    intro:
      "Photorealistic product renders and motion ready for launches, stores and ads. No photoshoot needed, and every angle, colour and scene is available on demand.",
    deliverables: [
      { title: "Still renders", description: "Studio-quality images for stores, ads and packaging." },
      { title: "Lifestyle scenes", description: "Products placed in real-looking spaces and settings." },
      { title: "Product films", description: "Short animated clips for launches and social." },
      { title: "Colour variants", description: "Every finish rendered from the same master scene." },
    ],
  },
  "crm-workflows": {
    intro:
      "AI-powered CRM workflows that sort leads, draft replies and route deals to the right person. Your pipeline stays clean and nobody waits on a follow-up.",
    deliverables: [
      { title: "Lead scoring", description: "Every new lead classified and ranked automatically." },
      { title: "Smart drafting", description: "Context-aware emails and notes, ready for review." },
      { title: "Deal routing", description: "Opportunities assigned by territory, size or fit." },
      { title: "CRM hygiene", description: "Duplicates merged and records kept up to date." },
    ],
  },
  apis: {
    intro:
      "Fast, reliable REST and GraphQL APIs built for heavy traffic. Clear contracts, strong security and documentation your partners can integrate with on day one.",
    deliverables: [
      { title: "API design", description: "Clean contracts agreed before implementation." },
      { title: "Build & scale", description: "Low-latency services that handle traffic spikes." },
      { title: "Auth & security", description: "Keys, OAuth, rate limits and audit logs built in." },
      { title: "Docs & SDKs", description: "Reference docs and examples developers actually use." },
    ],
  },
  "process-design": {
    intro:
      "We redesign how work moves through your company so software can carry more of it. Fewer hand-offs, clearer ownership and faster delivery loops.",
    deliverables: [
      { title: "Current-state map", description: "How work really flows today, step by step." },
      { title: "Bottleneck analysis", description: "Where time, money and quality are lost." },
      { title: "Future-state design", description: "A leaner process with software doing the heavy lifting." },
      { title: "Rollout plan", description: "Change introduced in steps your team can adopt." },
    ],
  },
  animations: {
    intro:
      "Motion graphics and micro-interactions that make products feel alive. From launch films to UI animation, built to look sharp and load light.",
    deliverables: [
      { title: "Motion design", description: "Animated explainers, launches and brand moments." },
      { title: "UI animation", description: "Micro-interactions that guide and delight users." },
      { title: "Physics motion", description: "Natural, physics-based movement for 3D and UI." },
      { title: "Web-ready export", description: "Lightweight formats that play smoothly everywhere." },
    ],
  },
  "saas-platforms": {
    intro:
      "Complete multi-tenant SaaS platforms with billing, auth and analytics built in. Launch faster on a foundation that's ready for your first thousand customers.",
    deliverables: [
      { title: "Multi-tenant core", description: "Secure separation of every customer's data." },
      { title: "Billing", description: "Plans, trials, invoices and usage-based pricing." },
      { title: "Auth & teams", description: "Sign-up, SSO, roles and team management." },
      { title: "Product analytics", description: "See how customers use the product from day one." },
    ],
  },
  "lead-bots": {
    intro:
      "Conversion bots that greet visitors, qualify intent and book meetings straight into your calendar. Your sales team only talks to leads that are ready.",
    deliverables: [
      { title: "Qualification flow", description: "The right questions to separate buyers from browsers." },
      { title: "Calendar booking", description: "Meetings booked instantly with the right person." },
      { title: "CRM sync", description: "Every conversation and lead saved to your CRM." },
      { title: "Conversion tracking", description: "See exactly which pages and replies convert." },
    ],
  },
  "ar-previews": {
    intro:
      "Web-based augmented reality that lets customers place products in their own space. No app download, just tap and see it at true size.",
    deliverables: [
      { title: "AR-ready models", description: "Accurate, lightweight models built for phones." },
      { title: "Web AR viewer", description: "One tap from the product page into AR." },
      { title: "True-to-size", description: "Real dimensions so customers buy with confidence." },
      { title: "Store integration", description: "Works with your existing product pages and catalogue." },
    ],
  },
  "team-training": {
    intro:
      "Hands-on training that upskills your developers on modern AI and front-end tooling. Practical sessions built around your own codebase and real problems.",
    deliverables: [
      { title: "Skills assessment", description: "Know where your team is strong and where to grow." },
      { title: "Workshops", description: "Live, hands-on sessions on your own stack." },
      { title: "AI tooling", description: "Use AI assistants and agents safely in daily work." },
      { title: "Playbooks", description: "Written guides your team keeps after the training." },
    ],
  },
  websites: {
    intro:
      "Flagship websites and storefronts for brands that want to stand out. Fast, accessible and easy for your team to update without a developer.",
    deliverables: [
      { title: "Design & build", description: "A custom site that matches your brand to the pixel." },
      { title: "CMS setup", description: "Edit pages, posts and products on your own." },
      { title: "Performance & SEO", description: "Fast load times and clean structure for search." },
      { title: "Commerce", description: "Online stores with checkout, payments and inventory." },
    ],
  },
  advisory: {
    intro:
      "Fractional CTO leadership for teams that need senior technical judgement without a full-time hire. Architecture, hiring and governance, on your schedule.",
    deliverables: [
      { title: "Fractional CTO", description: "Senior technical leadership a few days each month." },
      { title: "Architecture reviews", description: "Second opinions before big technical decisions." },
      { title: "Hiring support", description: "Role design, interviews and team structure." },
      { title: "Board reporting", description: "Clear technical updates for founders and investors." },
    ],
  },
};

// Typical engagement facts, shown in the Performance-style cards on each service page.
export type EngagementFact = {
  icon: string;
  iconClass: string;
  badge: string;
  badgeClass: string;
  value: string;
  description: string;
};

const engagementByCategory: Record<ServiceCategory, [string, string]> = {
  software: ["4–12", "Weeks from kickoff to production release."],
  ai: ["2–6", "Weeks from first workflow to a live agent."],
  "3d": ["1–4", "Weeks from brief to final assets."],
  consulting: ["1–3", "Weeks from first call to a clear plan."],
};

export function engagementFacts(category: ServiceCategory): EngagementFact[] {
  const [weeks, weeksText] = engagementByCategory[category];
  return [
    {
      icon: "speed",
      iconClass: "text-bronze",
      badge: "TIMELINE",
      badgeClass: "rotate-3 bg-bronze text-ink",
      value: weeks,
      description: weeksText,
    },
    {
      icon: "groups",
      iconClass: "text-mist",
      badge: "TEAM",
      badgeClass: "-rotate-3 bg-forest text-mist",
      value: "1 team",
      description: "For design, build and launch. No hand-offs between agencies.",
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
}

export function categoryLabel(category: ServiceCategory): string {
  return categoryLabels[category];
}
