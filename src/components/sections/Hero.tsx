"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Button } from "@/components/ui/button";
import ahadProfile from "@/assets/ahad-gray-profile.png";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-10 md:px-24 py-24">
      {/* Left Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-6 max-w-xl text-center md:text-left mt-10 md:mt-0"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
          Hi, I'm <span className="text-primary">Ahad</span>
        </h1>

        {/* Typing Animation */}
        <TypeAnimation
          sequence={[
            "Full Stack Developer 💻",
            1500,
            "React.js Expert ⚛️",
            1500,
            "Next.js Developer 🚀",
            1500,
            "Firebase & Supabase Pro 🔥",
            1500,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground"
        />

        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          I specialize in building scalable and performant web applications
          using <span className="font-semibold text-foreground">React</span>,{" "}
          <span className="font-semibold text-foreground">Next.js</span>,{" "}
          <span className="font-semibold text-foreground">TypeScript</span>,{" "}
          <span className="font-semibold text-foreground">Firebase</span> and{" "}
          <span className="font-semibold text-foreground">Supabase</span>.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center md:justify-start"
        >
          <Button className="px-6 py-3 text-base font-medium">
            Download Resume
          </Button>
          <Button
            variant="secondary"
            className="px-6 py-3 text-base font-medium"
          >
            View Projects
          </Button>
        </motion.div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex justify-center mb-10 md:mb-0"
      >
        <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary shadow-lg shadow-primary/20">
          <Image
            src={ahadProfile}
            alt="Ahad profile photo"
            fill
            className="object-cover rounded-full"
            priority
          />
        </div>

        {/* Glow behind image */}
        <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-3xl"></div>
      </motion.div>
    </section>
  );
}
