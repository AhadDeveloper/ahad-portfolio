"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  ReactIcon,
  NextIcon,
  TsIcon,
  TailwindIcon,
  NodeIcon,
  MongoIcon,
  PostgresIcon,
  PrismaIcon,
  ShadcnIcon,
  ExpressIcon,
  ReduxIcon,
  GitIcon,
  GithubIcon,
  DockerIcon,
} from "../icons";

const skills = [
  { name: "HTML", icon: <HtmlIcon /> },
  { name: "CSS", icon: <CssIcon /> },
  { name: "JavaScript", icon: <JsIcon /> },
  { name: "React", icon: <ReactIcon /> },
  { name: "Next.js", icon: <NextIcon /> },
  { name: "TypeScript", icon: <TsIcon /> },
  { name: "Tailwind CSS", icon: <TailwindIcon /> },
  { name: "Node.js", icon: <NodeIcon /> },
  { name: "MongoDB", icon: <MongoIcon /> },
  { name: "PostgreSQL", icon: <PostgresIcon /> },
  { name: "Prisma", icon: <PrismaIcon /> },
  { name: "ShadCn", icon: <ShadcnIcon /> },
  { name: "ExpressJS", icon: <ExpressIcon /> },
  { name: "Redux", icon: <ReduxIcon /> },
  { name: "Git", icon: <GitIcon /> },
  { name: "Github", icon: <GithubIcon /> },
  { name: "Docker", icon: <DockerIcon /> },
];

export default function SkillsSection() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: ["0%", "-50%"],
        transition: { repeat: Infinity, duration: 25, ease: "linear" },
      });
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative py-8 sm:py-12 px-6 sm:px-10 md:px-16"
    >
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-foreground">
        <span className="text-primary">Skills</span> & Tools
      </h2>

      {/* Mobile Grid */}
      <div className="grid grid-cols-4 gap-4 sm:hidden">
        {skills.slice(0, 16).map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center"
          >
            <Card className="border border-border bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer w-14 h-14 flex items-center justify-center">
              <CardContent className="p-0 flex items-center justify-center">
                <div className="w-8 h-8 flex items-center justify-center">
                  {skill.icon}
                </div>
              </CardContent>
            </Card>
            <p className="text-xs mt-2 font-medium">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Desktop Marquee */}
      <div className="hidden sm:block overflow-hidden">
        <motion.div className="flex gap-10 w-max" animate={controls}>
          {[...skills, ...skills].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center justify-center overflow-visible py-4"
            >
              <Card className="border border-border bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
                <CardContent className="p-0 flex items-center justify-center">
                  <div className="w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                    {skill.icon}
                  </div>
                </CardContent>
              </Card>
              <p className="text-sm mt-2 font-medium text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
