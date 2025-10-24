"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-24"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
      >
        A Little <span className="text-primary">About Me</span>
      </motion.h2>

      {/* Compact Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="max-w-5xl sm:text-lg text-muted-foreground leading-relaxed md:leading-loose"
      >
        {"I'm"} a
        <span className="font-semibold text-foreground">
          {" "}
          Full Stack Developer
        </span>{" "}
        who transforms ideas into fast, scalable web experiences using{" "}
        <span className="font-semibold text-foreground">React</span>,{" "}
        <span className="font-semibold text-foreground">Next.js</span>, and{" "}
        <span className="font-semibold text-foreground">Supabase</span>. I love
        building interfaces that feel intuitive and refined, balancing{" "}
        <span className="italic">clean code</span> with{" "}
        <span className="italic">thoughtful design</span>. Always learning,
        always experimenting — because every pixel and every line of code
        matters.
      </motion.p>
    </motion.section>
  );
}
