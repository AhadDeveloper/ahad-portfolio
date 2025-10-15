import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";

export default function Home() {
  return (
    <div className="flex flex-col gap-28">
      <section id="hero" className="scroll-mt-30 md:scroll-mt-52">
        <HeroSection />
      </section>
      <section id="about" className="scroll-mt-30 md:scroll-mt-52">
        <AboutSection />
      </section>
      <section
        id="skills"
        className="h-[40rem] bg-purple-600 scroll-mt-30 md:scroll-mt-52"
      ></section>
      <section
        id="projects"
        className="h-[40rem] bg-pink-600 scroll-mt-30 md:scroll-mt-52"
      ></section>
      <section
        id="resume"
        className="h-[40rem] bg-green-600 scroll-mt-30 md:scroll-mt-52"
      ></section>
    </div>
  );
}
``;
