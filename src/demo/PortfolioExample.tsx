const PortfolioExample: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="font-heading text-xl font-bold text-foreground">
              John Doe
            </div>
            <div className="hidden md:flex space-x-6">
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Get In Touch
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground mb-6">
            Full Stack Developer
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            I create beautiful and functional web applications using modern
            technologies. Passionate about clean code and exceptional user
            experiences.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium">
              View My Work
            </button>
            <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors font-medium">
              Download CV
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-muted-foreground mb-6">
                With over 5 years of experience in web development, I specialize
                in creating responsive and performant applications using React,
                Next.js, and Node.js.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    Frontend
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    React, Next.js, TypeScript
                  </p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-border">
                  <h4 className="font-heading font-semibold text-foreground mb-2">
                    Backend
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Node.js, Python, PostgreSQL
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-card p-8 rounded-xl border border-border">
              <div className="w-32 h-32 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary rounded-full"></div>
              </div>
              <p className="text-center text-muted-foreground">
                &quot;Clean code is not written by following a set of rules.
                Clean code is written by someone who cares.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow group"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                    Project {project}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    A modern web application built with React and Node.js
                    featuring real-time updates and beautiful UI.
                  </p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">
                      React
                    </span>
                    <span className="bg-secondary/10 text-secondary px-2 py-1 rounded text-xs font-medium">
                      Next.js
                    </span>
                    <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium">
                      TypeScript
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <button className="text-primary hover:text-primary/80 transition-colors font-medium text-sm">
                      Live Demo →
                    </button>
                    <button className="text-secondary hover:text-secondary/80 transition-colors font-medium text-sm">
                      GitHub →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground mb-8">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s
            discuss how we can bring your ideas to life.
          </p>
          <div className="bg-card p-8 rounded-xl border border-border">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-left">
                <h4 className="font-heading font-semibold text-foreground mb-2">
                  Email
                </h4>
                <p className="text-primary">john@example.com</p>
              </div>
              <div className="text-left">
                <h4 className="font-heading font-semibold text-foreground mb-2">
                  Location
                </h4>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>
            <button className="w-full mt-6 bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 John Doe. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioExample;
