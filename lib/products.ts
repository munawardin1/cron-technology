// Detail-page content for the products shown on Home (name, tagline and status live in lib/data.ts).

import { products, type Product } from "@/lib/data";

export type ProductFeature = {
  title: string;
  description: string;
};

export type ProductFact = {
  icon: string;
  iconClass: string;
  badge: string;
  badgeClass: string;
  value: string;
  description: string;
};

export type ProductDetail = {
  category: string;
  intro: string;
  features: ProductFeature[];
  facts: ProductFact[];
};

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export const productDetails: Record<string, ProductDetail> = {
  finmatrix: {
    category: "FINANCE",
    intro:
      "FinMatrix brings every account, transaction and treasury position into one live view. Spot trends early, catch anomalies fast and always know where your money is.",
    features: [
      { title: "Live treasury", description: "Balances and positions across every account, updated in real time." },
      { title: "Smart tracking", description: "Transactions categorised automatically, with clear spending trends." },
      { title: "Surveillance", description: "Unusual movements flagged the moment they happen." },
      { title: "Reports", description: "Board-ready financial reports generated in one click." },
    ],
    facts: [
      {
        icon: "verified_user",
        iconClass: "text-bronze",
        badge: "STATUS",
        badgeClass: "rotate-3 bg-bronze text-ink",
        value: "Live",
        description: "In production and used by finance teams every day.",
      },
      {
        icon: "speed",
        iconClass: "text-mist",
        badge: "SYNC",
        badgeClass: "-rotate-3 bg-forest text-mist",
        value: "24/7",
        description: "Accounts and positions kept in sync around the clock.",
      },
      {
        icon: "rocket_launch",
        iconClass: "text-bronze",
        badge: "SETUP",
        badgeClass: "rotate-2 bg-cream text-ink",
        value: "1 day",
        description: "From connecting your accounts to your first live dashboard.",
      },
    ],
  },
  metromatrix: {
    category: "LOGISTICS",
    intro:
      "MetroMatrix plans, tracks and dispatches every route across your fleet. Live positions, smarter routing and fewer missed deliveries, all from one map.",
    features: [
      { title: "Route planning", description: "The fastest routes calculated for every vehicle and stop." },
      { title: "Live map", description: "Every vehicle and delivery tracked in real time." },
      { title: "Dispatch", description: "Assign and re-assign jobs instantly as plans change." },
      { title: "Delivery insights", description: "On-time rates, delays and costs at a glance." },
    ],
    facts: [
      {
        icon: "verified_user",
        iconClass: "text-bronze",
        badge: "STATUS",
        badgeClass: "rotate-3 bg-bronze text-ink",
        value: "Live",
        description: "Running daily dispatch for fleets in production.",
      },
      {
        icon: "speed",
        iconClass: "text-mist",
        badge: "TRACKING",
        badgeClass: "-rotate-3 bg-forest text-mist",
        value: "1 map",
        description: "Every vehicle, route and job on a single live map.",
      },
      {
        icon: "rocket_launch",
        iconClass: "text-bronze",
        badge: "SETUP",
        badgeClass: "rotate-2 bg-cream text-ink",
        value: "1 week",
        description: "From importing your fleet to your first routed day.",
      },
    ],
  },
  cronleadmagnet: {
    category: "SALES",
    intro:
      "CronLeadMagnet finds, verifies and enriches leads automatically, then hands your team a clean pipeline. Less research, more conversations with the right people.",
    features: [
      { title: "Lead discovery", description: "New prospects found from the sources that fit your market." },
      { title: "Verification", description: "Emails and contact details checked before they hit your CRM." },
      { title: "Enrichment", description: "Company, role and context added to every lead." },
      { title: "CRM pipeline", description: "Qualified leads delivered straight into your sales tools." },
    ],
    facts: [
      {
        icon: "verified_user",
        iconClass: "text-bronze",
        badge: "STATUS",
        badgeClass: "rotate-3 bg-bronze text-ink",
        value: "Beta",
        description: "Open to early teams who want to shape the product.",
      },
      {
        icon: "speed",
        iconClass: "text-mist",
        badge: "AUTOPILOT",
        badgeClass: "-rotate-3 bg-forest text-mist",
        value: "24/7",
        description: "Lead discovery and enrichment running in the background.",
      },
      {
        icon: "rocket_launch",
        iconClass: "text-bronze",
        badge: "SETUP",
        badgeClass: "rotate-2 bg-cream text-ink",
        value: "1 day",
        description: "From defining your ideal customer to your first leads.",
      },
    ],
  },
  "trading-app": {
    category: "TRADING",
    intro:
      "A trading app built for clarity. Clean charts, fast execution and the numbers that matter, without the noise that gets in the way of good decisions.",
    features: [
      { title: "Clear charts", description: "Candlesticks and indicators that stay readable on any screen." },
      { title: "Fast execution", description: "Orders placed and confirmed with minimal delay." },
      { title: "Portfolio view", description: "Positions, profit and risk in one simple dashboard." },
      { title: "Price alerts", description: "Get notified the moment the market hits your levels." },
    ],
    facts: [
      {
        icon: "verified_user",
        iconClass: "text-bronze",
        badge: "STATUS",
        badgeClass: "rotate-3 bg-bronze text-ink",
        value: "Beta",
        description: "Open to early users ahead of the public launch.",
      },
      {
        icon: "speed",
        iconClass: "text-mist",
        badge: "MARKETS",
        badgeClass: "-rotate-3 bg-forest text-mist",
        value: "Live",
        description: "Real-time prices streamed straight to your screen.",
      },
      {
        icon: "rocket_launch",
        iconClass: "text-bronze",
        badge: "PLATFORMS",
        badgeClass: "rotate-2 bg-cream text-ink",
        value: "Web",
        description: "Available in the browser, with mobile on the way.",
      },
    ],
  },
};
