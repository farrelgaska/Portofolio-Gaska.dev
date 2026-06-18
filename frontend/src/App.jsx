import { useEffect, useState } from "react";

import profilePhoto from "./assets/gaska-google.jpg";
import speakingPhoto from "./assets/gaska-speaking.jpg";
import epengaduanImg from "./assets/projects/e-pengaduan.png";
import lifeosImg from "./assets/projects/lifeos-mobile.png";
import iterationImg from "./assets/projects/iteration-coffee.png";
import portfolioImg from "./assets/projects/portfolio-website.png";
import "./index.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Work", href: "#work", id: "work" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const sectionIds = ["home", "about", "work", "skills", "contact"];

    const handleScroll = () => {
      const currentSection = sectionIds.find((id) => {
        const section = document.getElementById(id);
        if (!section) return false;

        const rect = section.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-paper-off-white font-body-md text-ink-black overflow-x-hidden selection:bg-accent-orange selection:text-paper-off-white">

<nav className="bg-paper-off-white dark:bg-ink-black text-primary dark:text-primary-fixed font-headline-md text-headline-md md:font-label-bold md:text-label-bold w-full sticky top-0 z-50 border-b-4 border-outline-navy shadow-[4px_4px_0px_0px_rgba(6,27,58,1)] transition-all active:translate-y-0.5">
<div className="max-w-container-max mx-auto px-gutter py-4 flex justify-between items-center">
<div className="font-headline-md text-headline-md text-ink-black dark:text-paper-off-white italic hover:-translate-y-1 transition-transform duration-200">
        Gaska.dev
      </div>

<ul className="hidden md:flex items-center gap-6">
  {navItems.map((item) => {
    const isActive = activeSection === item.id;

    return (
      <li key={item.id}>
        <a
          href={item.href}
          onClick={() => setActiveSection(item.id)}
          className={
            isActive
              ? "bg-secondary-container text-on-secondary-container border-2 border-outline-navy rounded-full px-4 py-1 flex items-center gap-2 hover:-translate-y-1 transition-transform duration-200"
              : "text-ink-black dark:text-paper-off-white hover:text-primary flex items-center gap-2 hover:-translate-y-1 transition-transform duration-200"
          }
        >
          {item.label}
          <span>{isActive ? "✨" : "✦"}</span>
        </a>
      </li>
    );
  })}
</ul>

<a
  className="hidden md:inline-flex items-center justify-center bg-primary-container text-on-primary-container border-2 border-outline-navy rounded-full px-6 py-2 font-label-bold uppercase shadow-[4px_4px_0px_0px_rgba(6,27,58,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(6,27,58,1)] transition-all"
  href="#contact"
  onClick={() => setActiveSection("contact")}
>
  Let's Chat
</a>

<button className="md:hidden p-2 text-ink-black dark:text-paper-off-white">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>menu</span>
</button>
</div>
</nav>

<section className="relative pt-20 pb-32 overflow-hidden bg-surface-container-low" id="home">

<div className="absolute top-10 left-10 w-32 h-32 bg-secondary-container rounded-full mix-blend-multiply opacity-70 blur-xl"></div>
<div className="absolute bottom-10 right-10 w-48 h-48 bg-primary-container rounded-full mix-blend-multiply opacity-70 blur-xl"></div>
<div className="max-w-container-max mx-auto px-gutter relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8 relative">

<div className="absolute -top-10 -left-6 transform -rotate-12 bg-secondary-container border-2 border-outline-navy px-3 py-1 rounded-sm font-label-bold text-outline-navy shadow-[2px_2px_0px_0px_rgba(6,27,58,1)]">
          HELLO WORLD!
        </div>
<h1 className="font-display-hero-mobile md:font-display-hero text-display-hero-mobile md:text-display-hero text-ink-black" style={{ WebkitTextStroke: "2px #061B3A", color: "transparent", textShadow: "4px 4px 0px #009FE3" }}>
          FARREL GASKA <br/> <span className="text-ink-black" style={{ WebkitTextStroke: "0" }}>HARYADI</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          I'm a frontend developer and Informatics student blending chaotic creativity with clean code. Let's make something loud.
        </p>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center justify-center bg-secondary-container text-on-secondary-container border-4 border-outline-navy rounded-full px-8 py-3 font-label-bold uppercase shadow-[6px_6px_0px_0px_rgba(6,27,58,1)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(6,27,58,1)] transition-all" href="#work">
            View My Projects
          </a>
<a className="inline-flex items-center justify-center bg-paper-off-white text-ink-black border-4 border-outline-navy rounded-full px-8 py-3 font-label-bold uppercase shadow-[6px_6px_0px_0px_rgba(6,27,58,1)] hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(6,27,58,1)] transition-all" href="#contact">
            Contact Me
          </a>
</div>
</div>

<div className="relative min-h-[500px]">

<div className="absolute top-1/2 left-0 right-0 h-32 bg-secondary-container -translate-y-1/2 transform -rotate-3 border-y-4 border-outline-navy torn-paper-edge-top torn-paper-edge-bottom shadow-xl"></div>

<div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-container rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] border-4 border-outline-navy shadow-[8px_8px_0px_0px_rgba(6,27,58,1)] animate-[spin_10s_linear_infinite]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-80 bg-surface border-4 border-outline-navy transform rotate-2 shadow-[12px_12px_0px_0px_rgba(6,27,58,1)] overflow-hidden">
<img className="w-full h-full object-cover filter contrast-125 saturate-150" data-alt="A bold pop-art style portrait photo cutout of a young male developer in a bright studio, wearing stylish casual streetwear. The background is completely knocked out revealing the colorful collage behind him. The lighting is harsh and direct, creating a high-contrast, editorial fashion aesthetic. He looks confident, holding a vintage camera or a laptop with stickers. The image has a slight halftone print texture applied to it, fitting a chaotic scrapbook theme." src={profilePhoto} alt="Foto Farrel Gaska Haryadi di Google" />

<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#fff9c4] opacity-80 transform rotate-[-5deg] shadow-sm"></div>
</div>

<div className="absolute bottom-10 right-10 w-32 h-32 bg-accent-orange text-paper-off-white border-4 border-outline-navy rounded-full flex items-center justify-center transform rotate-12 shadow-[4px_4px_0px_0px_rgba(6,27,58,1)] animate-pulse">
<svg className="absolute w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100">
<path d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" id="curve"></path>
<text className="font-headline-sm text-xs" fontWeight="bold">
<textPath href="#curve" startOffset="0%">BUILD • CREATE • SHIP •</textPath>
</text>
</svg>
<span className="font-headline-md text-headline-md">GO</span>
</div>

<div className="absolute top-10 right-20 bg-paper-off-white border-2 border-outline-navy p-2 rounded-lg transform rotate-12 shadow-[2px_2px_0px_0px_rgba(6,27,58,1)] hover:rotate-0 transition-transform">
<span className="material-symbols-outlined text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>laptop_mac</span>
</div>
<div className="absolute bottom-20 left-10 bg-paper-off-white border-2 border-outline-navy p-2 rounded-lg transform -rotate-12 shadow-[2px_2px_0px_0px_rgba(6,27,58,1)] hover:rotate-0 transition-transform">
<span className="material-symbols-outlined text-4xl text-accent-orange" style={{ fontVariationSettings: "'FILL' 1" }}>code</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-paper-off-white relative" id="about">
<div className="max-w-container-max mx-auto px-gutter">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

<div className="lg:col-span-7 bg-surface-container-high border-4 border-outline-navy p-8 md:p-12 transform -rotate-1 shadow-[8px_8px_0px_0px_rgba(6,27,58,1)] relative z-10">
<h2 className="font-headline-lg text-headline-lg mb-6 uppercase text-ink-black">
            Who am I?
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant mb-6">
            I'm an Informatics student at Telkom University Purwokerto, moonlighting as a frontend developer. I believe digital experiences shouldn't be sterile—they should have texture, personality, and maybe a few jagged edges.
          </p>
<p className="font-body-md text-body-md text-on-surface-variant">
            When I'm not wrestling with flexbox or debugging React components, I'm probably drinking way too much coffee or sketching out ideas that shouldn't work (but somehow do).
          </p>

<div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary-container border-2 border-outline-navy p-4 transform rotate-12 shadow-md">
<span className="font-label-bold text-xs uppercase block mb-1">Status:</span>
<span className="font-headline-sm text-sm">Open to Projects!</span>
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-4 bg-[#ffccbc] shadow-sm transform -rotate-3"></div>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="w-full aspect-video bg-paper-off-white border-4 border-outline-navy transform rotate-3 shadow-[8px_8px_0px_0px_rgba(6,27,58,1)] overflow-hidden">
<img
  className="w-full h-full object-cover object-center"
  src={speakingPhoto}
  alt="Gaska giving a welcome speech at an event"
/>
</div>

<div className="absolute -bottom-6 -left-6 bg-paper-off-white border-4 border-outline-navy px-4 py-2 flex items-center gap-2 transform -rotate-6 shadow-[4px_4px_0px_0px_rgba(6,27,58,1)]">
<span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
<span className="font-label-bold uppercase">Purwokerto</span>
</div>
</div>
</div>
</div>
</section>

{/* Projects Section */}
<section
  className="py-24 bg-secondary-container border-y-4 border-outline-navy relative overflow-visible"
  id="work"
>
  <div className="max-w-container-max mx-auto px-gutter">
    <div className="text-center mb-16 relative z-10">
      <h2 className="inline-block font-headline-lg text-headline-lg text-ink-black uppercase bg-paper-off-white border-4 border-outline-navy px-8 py-4 shadow-[8px_8px_0px_0px_rgba(6,27,58,1)] transform -rotate-2">
        Projects That Don&apos;t Look Boring
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
      {/* Card 1 */}
      <div className="bg-paper-off-white border-4 border-outline-navy p-6 transform rotate-1 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(6,27,58,1)] transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(6,27,58,1)] group">
        <div className="aspect-video bg-surface-variant border-2 border-outline-navy mb-4 overflow-hidden relative">
          <img
            src={epengaduanImg}
            alt="E-Pengaduan Wanasari project preview"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute top-2 -left-4 w-16 h-6 bg-red-200 opacity-80 transform -rotate-45"></div>

          <div className="absolute top-3 right-3 bg-paper-off-white border-2 border-outline-navy px-3 py-1 font-label-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(6,27,58,1)]">
            Web App
          </div>
        </div>

        <h3 className="font-headline-md text-headline-md mb-2">
          E-Pengaduan Wanasari
        </h3>

        <p className="font-body-md text-on-surface-variant mb-4">
          A public complaint web application for users and admins, featuring
          complaint submission, tracking, category management, and admin
          dashboard.
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          <span className="bg-primary-container text-on-primary-container px-3 py-1 border-2 border-outline-navy rounded-full font-label-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(6,27,58,1)]">
            HTML
          </span>
          <span className="bg-secondary-container text-on-secondary-container px-3 py-1 border-2 border-outline-navy rounded-full font-label-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(6,27,58,1)]">
            CSS
          </span>
          <span className="bg-accent-orange text-paper-off-white px-3 py-1 border-2 border-outline-navy rounded-full font-label-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(6,27,58,1)]">
            JS
          </span>
          <span className="bg-paper-off-white text-ink-black px-3 py-1 border-2 border-outline-navy rounded-full font-label-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(6,27,58,1)]">
            Node
          </span>
        </div>

        <div className="flex gap-3">
          <a
            href="#"
            className="bg-outline-navy text-paper-off-white px-5 py-2 rounded-full font-label-bold uppercase border-2 border-outline-navy hover:-translate-y-1 transition-all"
          >
            Live Demo
          </a>
          <a
            href="#"
            className="bg-paper-off-white text-outline-navy px-5 py-2 rounded-full font-label-bold uppercase border-2 border-outline-navy hover:-translate-y-1 transition-all"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-paper-off-white border-4 border-outline-navy p-6 transform -rotate-2 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(6,27,58,1)] transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(6,27,58,1)] group md:mt-12">
        <div className="aspect-video bg-[#1f1f1f] border-2 border-outline-navy mb-4 overflow-hidden relative">
          <img
            src={lifeosImg}
            alt="LifeOS mobile app project preview"
            className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute -top-2 right-4 w-16 h-6 bg-blue-200 opacity-80 transform rotate-12"></div>

          <div className="absolute top-3 right-3 bg-paper-off-white border-2 border-outline-navy px-3 py-1 font-label-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(6,27,58,1)]">
            Mobile App
          </div>
        </div>

        <h3 className="font-headline-md text-headline-md mb-2">
          LifeOS Habit Tracker
        </h3>

        <p className="font-body-md text-on-surface-variant mb-4">
          A mobile productivity concept for tracking habits, tasks, goals,
          finance, notes, and personal progress.
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          <span className="bg-primary-container text-on-primary-container px-3 py-1 border-2 border-outline-navy rounded-full font-label-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(6,27,58,1)]">
            React Native
          </span>
          <span className="bg-secondary-container text-on-secondary-container px-3 py-1 border-2 border-outline-navy rounded-full font-label-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(6,27,58,1)]">
            Expo
          </span>
          <span className="bg-paper-off-white text-ink-black px-3 py-1 border-2 border-outline-navy rounded-full font-label-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(6,27,58,1)]">
            UI/UX
          </span>
        </div>

        <div className="flex gap-3">
          <a
            href="#"
            className="bg-outline-navy text-paper-off-white px-5 py-2 rounded-full font-label-bold uppercase border-2 border-outline-navy hover:-translate-y-1 transition-all"
          >
            Live Demo
          </a>
          <a
            href="#"
            className="bg-paper-off-white text-outline-navy px-5 py-2 rounded-full font-label-bold uppercase border-2 border-outline-navy hover:-translate-y-1 transition-all"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-paper-off-white border-4 border-outline-navy p-6 transform -rotate-1 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(6,27,58,1)] transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(6,27,58,1)] group">
        <div className="aspect-video bg-surface-variant border-2 border-outline-navy mb-4 overflow-hidden relative">
          <img
            src={iterationImg}
            alt="IterationCoffee Cashier project preview"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute top-3 right-3 bg-paper-off-white border-2 border-outline-navy px-3 py-1 font-label-bold text-xs uppercase transform rotate-6 shadow-[2px_2px_0px_0px_rgba(6,27,58,1)]">
            Coffee
          </div>

          <div className="absolute bottom-3 left-3 bg-accent-orange text-paper-off-white border-2 border-outline-navy px-3 py-1 font-label-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(6,27,58,1)]">
            Cashier App
          </div>
        </div>

        <h3 className="font-headline-md text-headline-md mb-2">
          IterationCoffee Cashier
        </h3>

        <p className="font-body-md text-on-surface-variant mb-4">
          A cashier web application for a coffee shop, featuring product menu
          management, order transactions, cart system, payment summary, sales
          history, and dashboard interface.
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          <span className="bg-primary-container text-on-primary-container px-3 py-1 border-2 border-outline-navy rounded-full font-label-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(6,27,58,1)]">
            HTML
          </span>
          <span className="bg-secondary-container text-on-secondary-container px-3 py-1 border-2 border-outline-navy rounded-full font-label-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(6,27,58,1)]">
            CSS
          </span>
          <span className="bg-accent-orange text-paper-off-white px-3 py-1 border-2 border-outline-navy rounded-full font-label-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(6,27,58,1)]">
            JavaScript
          </span>
        </div>

        <div className="flex gap-3">
          <a
            href="#"
            className="bg-outline-navy text-paper-off-white px-5 py-2 rounded-full font-label-bold uppercase border-2 border-outline-navy hover:-translate-y-1 transition-all"
          >
            Live Demo
          </a>
          <a
            href="#"
            className="bg-paper-off-white text-outline-navy px-5 py-2 rounded-full font-label-bold uppercase border-2 border-outline-navy hover:-translate-y-1 transition-all"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-paper-off-white border-4 border-outline-navy p-6 transform rotate-2 hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(6,27,58,1)] transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(6,27,58,1)] group md:mt-12">
        <div className="aspect-video bg-surface-variant border-2 border-outline-navy mb-4 overflow-hidden relative">
          <img
            src={portfolioImg}
            alt="Personal portfolio website project preview"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute bottom-3 left-3 bg-accent-orange text-paper-off-white border-2 border-outline-navy px-3 py-1 font-label-bold text-xs uppercase transform -rotate-6 shadow-[2px_2px_0px_0px_rgba(6,27,58,1)]">
            Frontend
          </div>

          <div className="absolute top-3 right-3 bg-paper-off-white border-2 border-outline-navy px-3 py-1 font-label-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(6,27,58,1)]">
            Portfolio
          </div>
        </div>

        <h3 className="font-headline-md text-headline-md mb-2">
          Personal Portfolio Website
        </h3>

        <p className="font-body-md text-on-surface-variant mb-4">
          A creative developer portfolio website with bold visual identity,
          responsive layout, project showcase, and interactive sections.
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          <span className="bg-primary-container text-on-primary-container px-3 py-1 border-2 border-outline-navy rounded-full font-label-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(6,27,58,1)]">
            React
          </span>
          <span className="bg-secondary-container text-on-secondary-container px-3 py-1 border-2 border-outline-navy rounded-full font-label-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(6,27,58,1)]">
            Tailwind
          </span>
          <span className="bg-accent-orange text-paper-off-white px-3 py-1 border-2 border-outline-navy rounded-full font-label-bold text-xs uppercase shadow-[2px_2px_0px_0px_rgba(6,27,58,1)]">
            JSX
          </span>
        </div>

        <div className="flex gap-3">
          <a
            href="#"
            className="bg-outline-navy text-paper-off-white px-5 py-2 rounded-full font-label-bold uppercase border-2 border-outline-navy hover:-translate-y-1 transition-all"
          >
            Live Demo
          </a>
          <a
            href="#"
            className="bg-paper-off-white text-outline-navy px-5 py-2 rounded-full font-label-bold uppercase border-2 border-outline-navy hover:-translate-y-1 transition-all"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-24 bg-paper-off-white relative overflow-hidden" id="skills">

<span className="absolute top-10 left-10 material-symbols-outlined text-outline-variant text-6xl transform rotate-45 opacity-50">star</span>
<span className="absolute bottom-10 right-20 material-symbols-outlined text-outline-variant text-8xl transform -rotate-12 opacity-50">change_history</span>
<div className="max-w-container-max mx-auto px-gutter relative z-10">
<div className="text-center mb-16">
<h2 className="font-headline-lg text-headline-lg text-ink-black uppercase">
          Skills &amp; Tools
        </h2>
</div>
<div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">

<div className="bg-primary-container text-on-primary-container border-2 border-outline-navy px-6 py-3 rounded-full font-label-bold uppercase transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(6,27,58,1)] hover:scale-110 transition-transform cursor-pointer">
          React.js
        </div>
<div className="bg-secondary-container text-on-secondary-container border-2 border-outline-navy px-6 py-3 rounded-full font-label-bold uppercase transform rotate-3 shadow-[4px_4px_0px_0px_rgba(6,27,58,1)] hover:scale-110 transition-transform cursor-pointer">
          Tailwind CSS
        </div>
<div className="bg-accent-orange text-paper-off-white border-2 border-outline-navy px-6 py-3 rounded-full font-label-bold uppercase transform -rotate-1 shadow-[4px_4px_0px_0px_rgba(6,27,58,1)] hover:scale-110 transition-transform cursor-pointer">
          HTML/CSS
        </div>

<div className="bg-surface-container-high text-on-surface border-2 border-outline-navy px-6 py-3 rounded-full font-label-bold uppercase transform rotate-2 shadow-[4px_4px_0px_0px_rgba(6,27,58,1)] hover:scale-110 transition-transform cursor-pointer">
          Node.js
        </div>
<div className="bg-paper-off-white text-ink-black border-2 border-outline-navy px-6 py-3 rounded-full font-label-bold uppercase transform -rotate-3 shadow-[4px_4px_0px_0px_rgba(6,27,58,1)] hover:scale-110 transition-transform cursor-pointer">
          Figma
        </div>
<div className="bg-primary-container text-on-primary-container border-2 border-outline-navy px-6 py-3 rounded-full font-label-bold uppercase transform rotate-1 shadow-[4px_4px_0px_0px_rgba(6,27,58,1)] hover:scale-110 transition-transform cursor-pointer">
          Git
        </div>
</div>
</div>
</section>

<footer
  id="contact"
  className="bg-paper-off-white dark:bg-ink-black text-ink-black dark:text-paper-off-white font-body-md text-body-md w-full mt-section-gap border-t-4 border-outline-navy border-dashed py-12"
><div className="max-w-container-max mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-6">
<div className="font-headline-sm text-headline-sm text-outline-navy dark:text-outline-variant">
        Built with Chaos &amp; Seatbelts
      </div>
<div className="text-center md:text-left">
        © 2024 Farrel Gaska Haryadi • Built with Chaos &amp; Seatbelts
      </div>
<ul className="flex items-center gap-4">
<li>
<a className="text-on-surface-variant dark:text-outline-variant hover:text-accent-orange hover:rotate-2 transition-all duration-300" href="#">
            Twitter
          </a>
</li>
<li>
<a className="text-on-surface-variant dark:text-outline-variant hover:text-accent-orange hover:rotate-2 transition-all duration-300" href="#">
            GitHub
          </a>
</li>
<li>
<a className="text-on-surface-variant dark:text-outline-variant hover:text-accent-orange hover:rotate-2 transition-all duration-300" href="#">
            LinkedIn
          </a>
</li>
</ul>
</div>
</footer>
    </div>
  );
}
