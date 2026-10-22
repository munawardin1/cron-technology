import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Services from "@/components/sections/Services";
import Products from "@/components/sections/Products";
import Playbook from "@/components/sections/Playbook";
import Performance from "@/components/sections/Performance";
import Testimonials from "@/components/sections/Testimonials";
import ContactCta from "@/components/sections/ContactCta";

export const metadata: Metadata = {
  title: "CRON Technologies — Creative Engineering Studio",
  description: "Software, AI agents and 3D, built to ship fast.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Products />
      <Playbook />
      <Performance />
      <Testimonials />
      <ContactCta />
    </>
  );
}
