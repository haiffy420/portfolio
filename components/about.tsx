"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a full stack web developer with a passion for creating interactive
        and responsive web applications.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with{" "}
        <span className="font-medium">Laravel, TypeScript</span> and
        <span className="font-medium"> Python</span>. I am a quick learner and I
        am always looking to expand my knowledge and skill set. I am currently
        learning about{" "}
        <span className="font-medium">Artificial Intelligence</span> and{" "}
        <span className="font-medium">Machine Learning</span>.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my cat.
      </p>
    </motion.section>
  );
}
