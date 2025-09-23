"use client";

import { useState, useEffect } from "react";
import {
  Sun,
  Moon,
  Palette,
  User,
  Mail,
  Code,
  Briefcase,
  Home,
  ExternalLink,
} from "lucide-react";

const ColorShowcase = () => {
  const [isDark, setIsDark] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  // Apply dark class to body
  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* Header with Dark Mode Toggle */}
        <header className="border-b border-border bg-card">
          <div className="container mx-auto flex items-center justify-between p-4">
            <h1 className="text-2xl font-heading font-bold text-primary">
              Portfolio Color Guide
            </h1>
            <button
              onClick={toggleDarkMode}
              className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
              {isDark ? "Light" : "Dark"} Mode
            </button>
          </div>
        </header>

        <div className="container mx-auto p-6 space-y-8">
          {/* Color Palette Overview */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h2 className="text-xl font-heading font-semibold text-card-foreground mb-4 flex items-center gap-2">
              <Palette className="text-primary" size={20} />
              Color Palette Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Primary Colors */}
              <div className="space-y-3">
                <h3 className="font-medium text-foreground">Primary Colors</h3>
                <div className="bg-primary rounded-lg p-4 text-primary-foreground">
                  <p className="font-medium">Primary</p>
                  <p className="text-sm opacity-90">
                    CTA buttons, links, brand elements
                  </p>
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-primary">
                  <p className="font-medium">Primary Variant</p>
                  <p className="text-sm">Subtle highlights, hover states</p>
                </div>
              </div>

              {/* Secondary Colors */}
              <div className="space-y-3">
                <h3 className="font-medium text-foreground">
                  Secondary Colors
                </h3>
                <div className="bg-secondary rounded-lg p-4 text-secondary-foreground">
                  <p className="font-medium">Secondary</p>
                  <p className="text-sm">Secondary buttons, tags</p>
                </div>
                <div className="bg-muted rounded-lg p-4 text-muted-foreground">
                  <p className="font-medium">Muted</p>
                  <p className="text-sm">Disabled states, placeholders</p>
                </div>
              </div>

              {/* Surface Colors */}
              <div className="space-y-3">
                <h3 className="font-medium text-foreground">Surface Colors</h3>
                <div className="bg-card border border-border rounded-lg p-4 text-card-foreground">
                  <p className="font-medium">Card</p>
                  <p className="text-sm">Content cards, modals, panels</p>
                </div>
                <div className="bg-accent rounded-lg p-4 text-accent-foreground">
                  <p className="font-medium">Accent</p>
                  <p className="text-sm">Subtle highlights, selections</p>
                </div>
              </div>

              {/* Status Colors */}
              <div className="space-y-3">
                <h3 className="font-medium text-foreground">Status Colors</h3>
                <div className="bg-destructive rounded-lg p-4 text-destructive-foreground">
                  <p className="font-medium">Destructive</p>
                  <p className="text-sm">Errors, delete actions</p>
                </div>
                <div className="bg-ring/10 border border-ring rounded-lg p-4 text-ring">
                  <p className="font-medium">Ring</p>
                  <p className="text-sm">Focus states, outlines</p>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio Component Examples */}
          <section className="space-y-6">
            <h2 className="text-xl font-heading font-semibold text-foreground">
              Portfolio Component Examples
            </h2>

            {/* Hero Section Example */}
            <div className="bg-card rounded-lg border border-border p-6">
              <div className="text-center space-y-4">
                <h1 className="text-4xl font-heading font-bold text-foreground">
                  John <span className="text-primary">Developer</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Full-stack developer creating modern web applications with
                  passion and precision
                </p>
                <div className="flex gap-3 justify-center">
                  <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    View Projects
                  </button>
                  <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors">
                    Contact Me
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Example */}
            <div className="bg-card rounded-lg border border-border p-4">
              <nav className="flex items-center justify-between">
                <div className="text-primary font-heading font-bold text-lg">
                  Portfolio
                </div>
                <div className="flex gap-6">
                  {[
                    { icon: Home, label: "Home" },
                    { icon: User, label: "About" },
                    { icon: Code, label: "Projects" },
                    { icon: Mail, label: "Contact" },
                  ].map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <item.icon size={16} />
                      {item.label}
                    </a>
                  ))}
                </div>
              </nav>
            </div>

            {/* Project Card Example */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-lg border border-border overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="bg-muted h-32 flex items-center justify-center">
                  <Code className="text-muted-foreground" size={32} />
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="font-heading font-semibold text-card-foreground">
                    E-Commerce Platform
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Modern e-commerce solution built with Next.js and TypeScript
                  </p>
                  <div className="flex gap-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs">
                      React
                    </span>
                    <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-md text-xs">
                      Node.js
                    </span>
                  </div>
                  <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                    <ExternalLink size={14} />
                    View Project
                  </button>
                </div>
              </div>

              <div className="bg-card rounded-lg border border-border overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="bg-muted h-32 flex items-center justify-center">
                  <Briefcase className="text-muted-foreground" size={32} />
                </div>
                <div className="p-4 space-y-3">
                  <h3 className="font-heading font-semibold text-card-foreground">
                    Portfolio Website
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Personal portfolio showcasing projects and skills
                  </p>
                  <div className="flex gap-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-md text-xs">
                      Next.js
                    </span>
                    <span className="bg-secondary/10 text-secondary px-2 py-1 rounded-md text-xs">
                      Tailwind
                    </span>
                  </div>
                  <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                    <ExternalLink size={14} />
                    View Project
                  </button>
                </div>
              </div>
            </div>

            {/* Contact Form Example */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-heading font-semibold text-card-foreground mb-4">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="your.email@example.com"
                    className="w-full p-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your message..."
                    rows={4}
                    className="w-full p-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <button
                  type="button"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
          </section>

          {/* Color Usage Guide */}
          <section className="bg-card rounded-lg border border-border p-6">
            <h3 className="font-heading font-semibold text-card-foreground mb-4">
              Color Usage Guide
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-medium text-foreground mb-2">
                  🎨 When to use each color:
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <strong className="text-primary">Primary:</strong> Main
                    CTAs, brand elements, active states
                  </li>
                  <li>
                    <strong className="text-secondary">Secondary:</strong>{" "}
                    Secondary buttons, supporting elements
                  </li>
                  <li>
                    <strong className="text-card-foreground">Card:</strong>{" "}
                    Content containers, modals, overlays
                  </li>
                  <li>
                    <strong className="text-accent">Accent:</strong> Subtle
                    highlights, hover states
                  </li>
                  <li>
                    <strong className="text-muted-foreground">Muted:</strong>{" "}
                    Placeholder text, disabled states
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-2">
                  📱 Portfolio sections:
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    <strong>Hero:</strong> background + primary for name/title
                  </li>
                  <li>
                    <strong>Navigation:</strong> card + muted-foreground for
                    links
                  </li>
                  <li>
                    <strong>Projects:</strong> card for containers + primary for
                    tags
                  </li>
                  <li>
                    <strong>Forms:</strong> input borders + ring for focus
                  </li>
                  <li>
                    <strong>Footer:</strong> muted background + muted-foreground
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ColorShowcase;
