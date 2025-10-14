import AboutSection from "@/components/sections/About";
import HeroSection from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-28">
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section className="h-[40rem] bg-purple-600"></section>
      <section className="h-[40rem] bg-pink-600"></section>
    </div>
  );
}
