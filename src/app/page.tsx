import HeroSection from "@/components/sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col gap-14">
      <section id="hero">
        <HeroSection />
      </section>
      <section className="h-[40rem] bg-amber-600"></section>
      <section className="h-[40rem] bg-purple-600"></section>
      <section className="h-[40rem] bg-pink-600"></section>
    </div>
  );
}
