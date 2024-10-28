import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import pastpaperImg from "@/public/pastpaper.png";
import ITImg from "@/public/IT.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import NewsImg from "@/public/News.png";

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
    title: "BSc IT Undergraduate",
    location: "University of Sri Jayewardenepura, Sri Lanka",
    description:
      "As an undergraduate, I am gaining practical experience in web designing and web development through hands-on projects and coursework, allowing me to apply my skills in real-world scenarios",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
  
  
] as const;

export const projectsData = [
  {
    title: "Past Paper Library",
    description:
      "This is a group project of a past paper management system created with Java and designed with forms and images for user and admin interfaces.",
    tags: ["OOP", "SQL"],
    imageUrl: pastpaperImg,
  },
  {
    title: "IT Community Mobile App",
    description:
      "A mobile app designed for IT students, featuring resources like past papers, learning aids, and departmental news.",
    tags: ["React", "Figma", "JavaScript", "SQL"],
    imageUrl: ITImg,
  },
  {
    title: "News Website UI design",
    description:
      "A news website UI design for university student to get all the information around them. ",
    tags: ["React", "Figma", "SQL", "CSS",],
    imageUrl: NewsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "UI/UX Design",
  "Figma", 
  "Adobe Photoshop",
  "React",
  "Next.js",
  "Tailwind",
  "PostgreSQL",
  "Python",
  "Java",
  "SQL",
  "OOP",
  "Problem-solving",
  "Time Management" ,
  "Collaboration",
  "Adaptability",
  "Communication",
  "Resource management",
  "Leadership",

  
] as const;
