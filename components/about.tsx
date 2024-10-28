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
      I'm currently pursuing a BSc in Information Technology, with a focus on
      <span className="bold"> Web Design</span> and <span className="bold">web development</span>. 
      Throughout my studies,  I have honed my skills in creating user-friendly, responsive, 
      and visually compelling websites, utilizing tools like  <span className="italic">React </span> 
      and <span className="italic">Next.js</span> to deliver seamless and engaging digital experience. 
      I am dedicated to applying my design expertise to solve 
      real-world problems, continually expanding my skill set through freelance projects.
      {" "}
      </p>

      <p>
        <span className="bold">In my free time</span>, I enjoy reading, watching movies, and singing songs . 
        I am also enthusiastic{" "}
        <span className="font-medium">about learning new things </span> and am currently exploring {" "}
        <span className="font-medium">Web Development</span>. 
        I aim to build a creer in Web Design, bringing creative and 
        accessible digital solution to life.
      </p>
    </motion.section>
  );
}
