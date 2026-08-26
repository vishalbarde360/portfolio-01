import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  Code2,
  Server,
  Database,
  Layers,
  Search,
  PenLine,
  Rocket,
  Mail,
  Phone,
  MapPin,
  Quote,
  User,
  Smile,
  Award,
  Globe,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },

  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    name: "Real-Time Chat Application",
    tags: "React, Node.js, Socket.io",
    title: "Real-Time Chat Application",
    live: "https://chatapp-ecru-nine.vercel.app/",
    github: "https://github.com/vishalbarde360/whatsapp-clone",
    dark: false,
  },
  {
    name: "Customer Relationship Management",
    tags: "React, Node.js, Express.js, MongoDB",
    title: "Customer Relationship Management",
    live: "https://markwebix.vercel.app/",
    github: "https://github.com/vishalbarde360/Markwebix-",
    dark: true,
  },
  {
    name: "Music-Streaming Application",
    tags: "React, Node.js, Express.js, MongoDB",
    title: "Music-Streaming Application",
    live: "#",
    github: "#",
    dark: false,
  },
];

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "Responsive, accessible interfaces built with React and modern CSS.",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Robust REST APIs and server logic using Node.js and Express.js.",
  },
  {
    icon: Database,
    title: "Database Design",
    desc: "Efficient schemas and queries with MongoDB and SQL databases.",
  },
  {
    icon: Layers,
    title: "Full Stack Solutions",
    desc: "End-to-end web apps, from database to deployment, built to scale.",
  },
];

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "SQL",
  "REST APIs",
  "Socket.io",
  "Git & GitHub",
  "Tailwind CSS",
  "HTML5",
  "CSS3",
];




const process = [
  {
    num: "01",
    icon: Search,
    title: "Discover",
    desc: "I learn about your goals, users, and technical requirements.",
  },
  {
    num: "02",
    icon: PenLine,
    title: "Plan & Design",
    desc: "I architect the system and design clean, usable interfaces.",
  },
  {
    num: "03",
    icon: Code2,
    title: "Build",
    desc: "I develop the frontend and backend with clean, tested code.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Deploy",
    desc: "I ship, monitor, and refine the product after launch.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track which section is currently in view and mark its nav link active
  useEffect(() => {
    const sectionIds = navLinks
      .map((link) => link.href.replace("#", ""))
      .filter((id) => document.getElementById(id));

    if (sectionIds.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const isActive = (href) => activeSection === href.replace("#", "");

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-stone-50 text-stone-800 font-sans min-h-screen">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-stone-50/95 backdrop-blur border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="flex items-center gap-3"
          >
            <span className="flex items-center justify-center w-9 h-9 border-2 border-green-800 rounded-md text-green-800 font-bold text-sm">
              VB
            </span>
            <span className="leading-tight">
              <span className="block text-sm sm:text-base font-semibold tracking-wide text-stone-900">
                VISHAL BARDE
              </span>
              <span className="block text-[10px] sm:text-xs tracking-widest text-stone-500">
                FULL STACK DEVELOPER
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`relative text-xs font-medium tracking-widest uppercase transition-colors pb-1 ${isActive(link.href)
                  ? "text-green-800"
                  : "text-stone-600 hover:text-green-800"
                  }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute left-0 -bottom-[1px] w-full h-[2px] bg-green-800 rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="hidden lg:inline-flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white text-xs font-semibold tracking-wide uppercase px-5 py-3 rounded-md transition-colors"
          >
            Let's Talk <ArrowRight size={14} />
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden p-2 text-stone-800"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-stone-200 bg-stone-50 px-5 py-6 space-y-5">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-sm font-medium tracking-widest uppercase ${isActive(link.href)
                    ? "text-green-800"
                    : "text-stone-700 hover:text-green-800"
                    }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="border-t border-stone-200 pt-5 space-y-2">
              <p className="text-xs uppercase tracking-widest text-stone-400">
                About
              </p>
              <p className="text-sm text-stone-600 leading-relaxed">
                I'm Vishal Barde, a full stack developer building fast,
                scalable web applications with React, Node.js, Express.js,
                and MongoDB, from the database to the interface.
              </p>
            </div>

            <div className="border-t border-stone-200 pt-5 space-y-2 text-sm text-stone-600">
              <p className="flex items-center gap-2">
                <Mail size={14} className="text-green-800" />
                bardevishal92@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <Phone size={14} className="text-green-800" />
                +91 7796374853
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={14} className="text-green-800" />
                Hadapsar,Pune              </p>
            </div>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="inline-flex items-center gap-2 bg-green-800 text-white text-xs font-semibold tracking-wide uppercase px-5 py-3 rounded-md w-full justify-center"
            >
              Let's Talk <ArrowRight size={14} />
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="max-w-7xl mx-auto px-5 sm:px-8 pt-14 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-green-800 mb-4">
              Full stack development that scales
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl leading-tight text-stone-900 mb-6">
              I build full stack web applications that are fast, reliable
              and impactful.
            </h1>
            <p className="text-stone-500 text-base leading-relaxed mb-8 max-w-md">
              I'm Vishal Barde, a full stack developer crafting complete web
              solutions with React, Node.js, Express.js, and MongoDB, from
              database design to a polished user interface.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#work");
                }}
                className="inline-flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white text-xs font-semibold tracking-wide uppercase px-6 py-4 rounded-md transition-colors"
              >
                View My Work <ArrowRight size={14} />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="inline-flex items-center gap-2 border border-stone-300 hover:border-green-800 text-stone-800 text-xs font-semibold tracking-wide uppercase px-6 py-4 rounded-md transition-colors"
              >
                Let's Work Together <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-stone-200/70" />
            <div className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-3xl bg-gradient-to-b from-green-700 to-green-900 flex items-center justify-center overflow-hidden shadow-xl">
              <img src="/profile-photo.jpeg" alt="VB" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="work" className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-green-800 mb-2">
              Selected work
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900">
              Featured Projects
            </h2>
          </div>
          <a
            href="#work"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-stone-600 hover:text-green-800"
          >
            View all projects <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="bg-white rounded-xl border border-stone-200 overflow-hidden flex flex-col"
            >
              <div
                className={`h-48 flex items-center px-6 ${p.dark ? "bg-stone-900 text-white" : "bg-stone-100 text-stone-900"
                  }`}
              >
                <p className="font-serif text-xl sm:text-2xl leading-snug max-w-[70%]">
                  {p.title}
                </p>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold tracking-wide text-stone-900">
                    {p.name}
                  </p>
                  <p className="text-xs text-stone-500 mt-1">{p.tags}</p>
                </div>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold tracking-widest uppercase text-green-800 hover:text-green-900"
                  >
                    Live
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold tracking-widest uppercase text-green-800 hover:text-green-900"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <p className="text-xs font-semibold tracking-widest uppercase text-green-800 mb-2">
          What I do
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mb-10">
          Services
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title}>
                <div className="w-10 h-10 rounded-full bg-green-800 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* SKILLS */}
        <div className="mt-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-green-800 mb-4">
            Tech stack
          </p>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-medium px-4 py-2 rounded-full bg-stone-100 border border-stone-200 text-stone-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>





      {/* PROCESS */}
      <section id="process" className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <p className="text-xs font-semibold tracking-widest uppercase text-green-800 mb-2">
          My process
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mb-10">
          How I Work
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {process.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.num} className="text-center sm:text-left">
                <div className="w-12 h-12 rounded-full border-2 border-stone-300 flex items-center justify-center mb-4 mx-auto sm:mx-0 text-stone-700">
                  <Icon size={18} />
                </div>
                <p className="text-xs font-semibold text-stone-400 mb-1">
                  {p.num}
                </p>
                <h3 className="font-semibold text-stone-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section
        id="contact"
        className="bg-stone-100 py-16 border-t border-stone-200"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-green-800 mb-2">
              Let's create something great
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mb-6">
              Have a project in mind? I'd love to hear about it.
            </h2>
            <a
              href="mailto:bardevishal92@gmail.com"
              className="inline-flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white text-xs font-semibold tracking-wide uppercase px-6 py-4 rounded-md transition-colors"
            >
              Let's Talk <ArrowRight size={14} />
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div>
              <Mail size={18} className="text-green-800 mb-2" />
              <p className="text-sm font-semibold text-stone-900">Email</p>
              <p className="text-sm text-stone-500 break-words">
                bardevishal92@gmail.com
              </p>
            </div>
            <div>
              <Phone size={18} className="text-green-800 mb-2" />
              <p className="text-sm font-semibold text-stone-900">Phone</p>
              <p className="text-sm text-stone-500">+91 7796374853</p>
            </div>
            <div>
              <MapPin size={18} className="text-green-800 mb-2" />
              <p className="text-sm font-semibold text-stone-900">
                Location
              </p>
              <p className="text-sm text-stone-500">Hadapsar, Pune</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-300 pt-14 pb-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center justify-center w-9 h-9 border-2 border-stone-100 rounded-md text-stone-100 font-bold text-sm">
                VB
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-semibold tracking-wide text-white">
                  VISHAL BARDE
                </span>
                <span className="block text-[10px] tracking-widest text-stone-400">
                  FULL STACK DEVELOPER
                </span>
              </span>
            </div>
            <p className="text-sm text-stone-400 max-w-xs">
              Building full stack web applications that connect people and
              solve real problems.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-stone-500 mb-4">
              Navigation
            </p>
            <ul className="space-y-2 text-sm">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(l.href);
                    }}
                    className="hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-stone-500 mb-4">
              Resources
            </p>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">FAQ</li>
              <li className="hover:text-white cursor-pointer">Process</li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-stone-500 mb-4">
              Stay inspired
            </p>
            <p className="text-sm text-stone-400 mb-4">
              Get development tips and updates straight to your inbox.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-3 py-2 rounded-l-md text-sm text-stone-900 bg-white focus:outline-none"
              />
              <button className="bg-green-800 hover:bg-green-900 px-4 rounded-r-md flex items-center justify-center">
                <ArrowRight size={16} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 mt-10 pt-6 border-t border-stone-700 text-xs text-stone-500 flex flex-col sm:flex-row justify-between gap-2">
          <p>© 2026 Vishal Barde. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-stone-300 cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-stone-300 cursor-pointer">
              Terms of Service
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}