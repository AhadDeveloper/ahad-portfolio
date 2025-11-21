"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import EcommerceImg from "../../../public/projects/ecommerce.png";
import VotingImg from "../../../public/projects/3.png";
import TodoImg from "../../../public/projects/landing-page.png";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Ecommerce Store",
    description:
      "A complete ecommerce web app with product listings, cart, and Firebase integration.",
    tags: ["React", "Next.js", "Firebase", "Tailwind"],
    link: "#",
    image: EcommerceImg,
  },
  {
    id: 2,
    title: "Online Voting System",
    description:
      "A secure and real-time online voting system built with authentication and Firebase.",
    tags: ["React", "Firebase", "Node.js"],
    link: "#",
    image: VotingImg,
  },
  {
    id: 3,
    title: "Notes App",
    description: "A fast, minimal notes app with CRUD and local storage.",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "#",
    image: TodoImg,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A sleek portfolio site showcasing skills and projects with animations.",
    tags: ["Next.js", "Framer Motion", "Tailwind"],
    link: "#",
    image: "/projects/portfolio.jpg",
  },
  {
    id: 5,
    title: "AI Blog Writer",
    description:
      "An AI-powered tool that helps generate and refine blog content with OpenAI API integration.",
    tags: ["Next.js", "OpenAI API", "TypeScript"],
    link: "#",
    image: "/projects/aiblog.png",
  },
];

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="px-6 sm:px-10 md:px-24"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-10 text-foreground"
      >
        My <span className="text-primary">Projects</span>
      </motion.h2>

      <motion.div layout className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
        <AnimatePresence>
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="cursor-pointer"
            >
              <Card className="border border-border bg-card hover:border-primary/50 transition-all duration-300 overflow-hidden h-full flex flex-col pt-0">
                {/* Large Project Image */}
                <div className="relative w-full h-72 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full"
                    fill
                  />
                </div>

                <CardContent className="flex flex-col flex-grow">
                  <div className="mb-3">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {project.title}
                      </h3>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:opacity-80"
                      >
                        <ExternalLink size={17} />
                      </a>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {projects.length > 3 && (
        <div className="flex justify-center mt-10">
          <Button
            variant="secondary"
            onClick={() => setShowAll(!showAll)}
            className="text-sm h-9 px-5 rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </motion.section>
  );
}
