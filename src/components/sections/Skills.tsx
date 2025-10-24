"use client";

import { motion } from "framer-motion";
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
  { name: "Docker", icon: <DockerIcon /> },
];

export default function SkillsSection() {
  return (
    <section className="relative py-2 md:py-6 overflow-hidden">
      {/* Moving icons row */}
      <motion.div
        className="flex gap-6 sm:gap-10 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "linear",
        }}
      >
        {/* duplicate for seamless infinite scroll */}
        {[...skills, ...skills].map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center justify-center"
          >
            <Card className="border border-border bg-card hover:border-primary/50 transition-all duration-300 cursor-pointer w-12 h-12 sm:w-24 sm:h-24 flex items-center justify-center">
              <CardContent className="p-0 flex items-center justify-center">
                <div className="w-8 h-8 sm:w-14 sm:h-14 flex items-center justify-center">
                  {skill.icon}
                </div>
              </CardContent>
            </Card>

            {/* show name only on md+ */}
            <p className="hidden md:block text-xs sm:text-sm mt-2 font-medium text-center">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
