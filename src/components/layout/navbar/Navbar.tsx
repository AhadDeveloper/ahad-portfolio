"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import AhadLogo from "@/assets/Logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="w-full fixed z-50 top-0 left-0">
      <div className="flex justify-between items-center px-6 py-6">
        {/* Ahad Logo */}
        <Link href="#home">
          <AhadLogo />
        </Link>
        {/* Desktop Navbar */}
        <nav className="hidden md:flex items-center">
          <ul className="flex bg-card gap-8 py-3 px-6 rounded-md shadow-md border-border border-y">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.id}
                className="text-muted-foreground hover:text-primary transition-transform duration-200 hover:scale-105 hover:-translate-y-0.5"
              >
                <Link href={item.id}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop contact */}
        <div className="hidden md:flex">
          <Link href="#contact">
            <Button>Contact</Button>
          </Link>
        </div>

        {/* Mobile Menu with button */}
        <Button
          className="md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu container */}
            <motion.div
              className="md:hidden mx-5"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
              }}
              style={{ perspective: "1000px" }}
            >
              <div className="bg-card/95 border-y border-border rounded-2xl shadow-2xl overflow-hidden">
                {/* Menu items with staggered animation */}
                <motion.div
                  className="flex flex-col py-2"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={{
                    open: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.1,
                      },
                    },
                    closed: {
                      transition: {
                        staggerChildren: 0.05,
                        staggerDirection: -1,
                      },
                    },
                  }}
                >
                  {NAV_ITEMS.map((item) => (
                    <motion.div
                      key={item.id}
                      variants={{
                        open: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                          },
                        },
                        closed: {
                          opacity: 0,
                          x: -20,
                          transition: {
                            duration: 0.2,
                          },
                        },
                      }}
                      className="relative"
                    >
                      <Link
                        href={item.id}
                        className="block px-6 py-4 text-muted-foreground active:text-primary transition-colors duration-200 relative"
                        onClick={() => setIsOpen(false)}
                      >
                        <span className="font-medium tracking-wide">
                          {item.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}

                  {/* Contact button */}
                  <motion.div
                    variants={{
                      open: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                          delay: 0.1,
                        },
                      },
                      closed: {
                        opacity: 0,
                        x: -20,
                        transition: {
                          duration: 0.2,
                        },
                      },
                    }}
                    className="px-6 py-4"
                  >
                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                      <motion.div
                        whileTap={{ scale: 0.98 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 20,
                        }}
                      >
                        <Button className="w-full bg-gradient-to-r from-primary to-primary/80 shadow-lg transition-all duration-300">
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            Contact
                          </motion.span>
                        </Button>
                      </motion.div>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
