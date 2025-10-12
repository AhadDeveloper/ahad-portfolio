"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import AhadLogo from "@/assets/Logo";

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
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const themeHandler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <header className="w-full fixed z-50 top-0 left-0 bg-card border-border border-b-2">
      <div className="flex justify-between gap-4 items-center px-6 lg:px-8 py-6 pb-7">
        {/* Ahad Logo */}
        <Link href="#home">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 2 }}
            className="xl:w-[130px] xl:h-[55px] cursor-pointer"
          >
            <AhadLogo className="w-full h-full" />
          </motion.div>
        </Link>

        {/* Desktop Navbar Links */}
        <nav className="hidden md:flex justify-center items-center bg-card shadow-md border-border border-y rounded-md">
          <ul className="flex gap-6 lg:gap-8 xl:gap-9 py-2.5 lg:py-3 xl:py-3.5 px-6">
            {NAV_ITEMS.map((item) => (
              <li
                key={item.id}
                className="text-muted-foreground hover:text-primary transition-transform duration-200 hover:scale-105 hover:-translate-y-0.5"
              >
                <Link href={item.id} className="text-base xl:text-lg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop theme and contact buttons */}
        <div className="hidden md:flex gap-4 lg:gap-6">
          <Button
            variant={theme === "light" ? "secondary" : "default"}
            size="lg"
            className="cursor-pointer xl:h-12"
            onClick={themeHandler}
          >
            {theme === "light" ? (
              <Moon className="size-4 xl:size-5" />
            ) : (
              <Sun className="size-4 xl:size-5" />
            )}
          </Button>

          <Button
            asChild
            size="lg"
            className="cursor-pointer xl:text-lg xl:h-12 xl:px-7"
          >
            <Link href="#contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile Menu with theme and menu buttons */}
        <div className="md:hidden flex gap-4">
          <Button
            variant={theme === "light" ? "secondary" : "default"}
            size="icon"
            onClick={themeHandler}
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </Button>
          <Button onClick={() => setIsOpen((prev) => !prev)}>
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
      </div>

      {/* Mobile Menu Links and contact button with Framer Motion */}
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
              <div className="bg-card border-y border-border rounded-2xl shadow-2xl overflow-hidden">
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
                    <motion.div
                      whileTap={{ scale: 0.98 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                      }}
                    >
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-primary to-primary/80 shadow-lg transition-all duration-300"
                      >
                        <Link href="#contact" onClick={() => setIsOpen(false)}>
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                          >
                            Contact
                          </motion.span>
                        </Link>
                      </Button>
                    </motion.div>
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
