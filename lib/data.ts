import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { BsPersonFill, BsPersonWorkspace } from "react-icons/bs";
import megacodifyImg from "@/public/megacodify.png";
import bpeImg from "@/public/bpe.png";
import cmsImg from "@/public/cms.png";
import rksImg from "@/public/rks.png";
import rksdigitalImg from "@/public/rks-digital.jpeg";
import ecommerceImg from "@/public/ecommerce.png";
import todoappImg from "@/public/todoapp.png";
import clinicImg from "@/public/clinic.png";
import internmonitoringImg from "@/public/intern.png";
import eklipingImg from "@/public/ekliping.png";
import ksdImg from "@/public/ksd.png";
import sitasibesarImg from "@/public/sitasibesar.png";
import inventoryImg from "@/public/inventory.png";
import pekalonganMailerImg from "@/public/mailer.png";

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
    title: "Full Stack Developer",
    location: "Megacodify Indonesia",
    description: "A full stack development talent.",
    icon: React.createElement(BsPersonWorkspace),
    date: "2025 - Now",
  },
  {
    title: "IT Staff",
    location:
      "Dinas Komunikasi dan Informatika Kabupaten Pekalongan, Indonesia",
    description:
      "Responsible for developing apps for e-governance, cyber security, and IT infrastructure.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Now",
  },
  {
    title: "Freelance Developer",
    location: "",
    description:
      "Responsible for various tasks in app development, including coding, debugging, and collaborating with clients to meet project requirements.",
    icon: React.createElement(BsPersonFill),
    date: "2023 - Now",
  },
] as const;

export const projectsData = [
  {
    title: "MegaCodify",
    description: "A stunning landing page for MegaCodify.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "PostgreSQL",
      "PrismaORM",
      "Docker",
      "Github Actions",
      "CI/CD",
    ],
    imageUrl: megacodifyImg,
  },
  {
    title: "Bali Property Expert",
    description:
      "Sell, Buy & Rent Property in Bali Easily and Quickly only with Bali Property Expert.",
    tags: ["React", "TypeScript", "Tailwind", "Laravel", "PHP", "MySQL"],
    imageUrl: bpeImg,
  },
  {
    title: "Batik Inventory System",
    description:
      "A web app for managing inventory and sales of batik products.",
    tags: ["React", "TypeScript", "Tailwind", "Laravel", "PHP", "MySQL"],
    imageUrl: inventoryImg,
  },
  {
    title: "SITaSiBesar",
    description:
      "An expert system for diagnosing and recommending treatment for stunting, wasting, and other child health issues.",
    tags: ["React", "TypeScript", "Tailwind", "Laravel", "PHP", "MySQL"],
    imageUrl: sitasibesarImg,
  },
  {
    title: "RKS Digital",
    description:
      "A mobile version for radio streaming app and blog for Radio Kota Santri, Pekalongan, Indonesia.",
    tags: [
      "React",
      "React Native",
      "Expo",
      "Tailwind",
      "TypeScript",
      "Laravel",
      "PHP",
      "MySQL",
    ],
    imageUrl: rksdigitalImg,
  },
  {
    title: "Pekalongan Mailer",
    description:
      "A web app for sending emails to the public in Pekalongan Regency, Indonesia with third party email service.",
    tags: ["React", "TypeScript", "Tailwind", "Laravel", "PHP", "MySQL", "Resend"],
    imageUrl: pekalonganMailerImg,
  },
  {
    title: "Government Website CMS",
    description:
      "Content Management System for government websites in Pekalongan Regency, Indonesia.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Strapi"],
    imageUrl: cmsImg,
  },
  {
    title: "Kajen Satu Data",
    description:
      "A web app for managing and monitoring data in Pekalongan Regency, Indonesia.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "MongoDB"],
    imageUrl: ksdImg,
  },
  {
    title: "Radio Kota Santri",
    description:
      "A radio streaming app and blog for Radio Kota Santri, Pekalongan, Indonesia.",
    tags: ["Laravel", "PHP", "FilamentPHP", "Tailwind", "MySQL"],
    imageUrl: rksImg,
  },
  {
    title: "E-Kliping Kabupaten Pekalongan",
    description:
      "A web app for clipping news articles from various sources related to Pekalongan Regency.",
    tags: ["Laravel", "PHP", "FilamentPHP", "Tailwind", "MySQL"],
    imageUrl: eklipingImg,
  },
  {
    title: "Intern Monitoring",
    description:
      "A web app for managing and monitoring interns at Dinas Komunikasi dan Informatika of Pekalongan Regency, Indonesia.",
    tags: ["React", "TypeScript", "Tailwind", "Laravel", "PHP", "MySQL"],
    imageUrl: internmonitoringImg,
  },
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
    title: "Clinic",
    description:
      "A clinic app for managing employees, patients, drug stock, and invoices.",
    tags: ["PHP", "Laravel", "MySQL", "FilamentPHP"],
    imageUrl: clinicImg,
  },
] as const;

export const skillsData = [
  "HTML/CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Expo",
  "Strapi CMS",
  "Tailwind",
  "Git",
  "Docker",
  "CI/CD",
  "MongoDB",
  "MySQL",
  "PostgreSQL",
  "PrismaORM",
  "PHP",
  "Laravel",
  "FilamentPHP",
  "Android Studio",
  "Python",
  "Stripe",
] as const;
