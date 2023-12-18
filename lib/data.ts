import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { BsPersonFill, BsPersonWorkspace } from "react-icons/bs";
import ecommerceImg from "@/public/ecommerce.png";
import todoappImg from "@/public/todoapp.png";
import portfolioImg from "@/public/portfolio.png";
import clinicImg from "@/public/clinic.png";
import internmonitoringImg from "@/public/internmonitoring.png";
import internmonitoringmobileImg from "@/public/internmonitoringmobile.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Freelancer",
    location: "",
    description: "I do graphic design, UI/UX, and game coaching.",
    icon: React.createElement(BsPersonFill),
    date: "2017 - 2018",
  },
  {
    title: "Full-Stack Developer",
    location: "Stealth Startup",
    description:
      "I'm currently working as a full-stack developer for 2 years in a stealth startup.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - Present",
  },
  {
    title: "Full-Stack Developer Intern",
    location: "Dinas Komunikasi dan Informatika, Pekalongan",
    description:
      "I developed the 'Internship Monitoring' and 'Head of Department Activities Agenda' website applications at the Dinas Komunikasi Dan Informatika of Pekalongan Regency.",
    icon: React.createElement(BsPersonWorkspace),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "E-commerce",
    description: "Login-free e-commerce.",
    tags: ["React", "Next.js", "Tailwind", "Sanity Studio", "Stripe"],
    imageUrl: ecommerceImg,
  },
  {
    title: "Todo App",
    description: "A simple but beautiful looking Todo App.",
    tags: ["React", "TypeScript", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: todoappImg,
  },
  {
    title: "Personal Portfolio",
    description: "My personal portfolio.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: portfolioImg,
  },
  {
    title: "Clinic",
    description:
      "A clinic app for managing employees, patients, drug stock, and invoices.",
    tags: ["PHP", "Laravel", "MySQL", "FilamentPHP"],
    imageUrl: clinicImg,
  },
  {
    title: "Intern Monitoring",
    description:
      "A web app for managing and monitoring interns in Dinas Komunikasi dan Informatika of Pekalongan Regency.",
    tags: ["PHP", "MySQL"],
    imageUrl: internmonitoringImg,
  },
  {
    title: "Intern Monitoring - Mobile",
    description:
      "A mobile app for managing and monitoring interns in Dinas Komunikasi dan Informatika of Pekalongan Regency.",
    tags: ["Java", "Android Studio"],
    imageUrl: internmonitoringmobileImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PHP",
  "Laravel",
  "FilamentPHP",
  "MySQL",
  "Java",
  "Android Studio",
  "Python",
] as const;
