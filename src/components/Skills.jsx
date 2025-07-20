import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaJs, FaReact, FaNodeJs, FaPython, FaDatabase, FaJava, FaGithub, FaGitAlt, FaMagic, FaHtml5 } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";
import { MdDesignServices } from "react-icons/md";
import { SiPostman, SiVercel, SiApollographql } from "react-icons/si";

export default function Skills() {
  const [skills] = useState([
    { id: 1, name: "HTML & CSS", icon: <FaHtml5 size={36} /> },
    { id: 2, name: "JavaScript", icon: <FaJs size={36} /> },
    { id: 3, name: "React", icon: <FaReact size={36} /> },
    { id: 4, name: "Node.js", icon: <FaNodeJs size={36} /> },
    { id: 5, name: "MySQL", icon: <FaDatabase size={36} /> },
    { id: 6, name: "Python", icon: <FaPython size={36} /> },
    { id: 7, name: "Next.js", icon: <RiNextjsFill size={36} /> },
    { id: 8, name: "Tailwind", icon: <RiTailwindCssFill size={36} /> },
    { id: 9, name: "Figma", icon: <CgFigma size={36} /> },
    { id: 10, name: "Git & GitHub", icon: <FaGithub size={36} /> },
    { id: 11, name: "RESTful APIs", icon: <SiApollographql size={36} /> },
    { id: 12, name: "Vercel", icon: <SiVercel size={36} /> },
    { id: 13, name: "Postman (API)", icon: <SiPostman size={36} /> },
    { id: 14, name: "UI/UX", icon: <MdDesignServices size={36} /> },
    { id: 15, name: "Prompt Engineering", icon: <FaMagic size={36} /> },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "Cognifyz Tecchnologies",
      role: "Frontend Developer",
      period: "Feb - March 2025",
      description:
        "Built a Weather App using real-time API integration and a Stopwatch Application with JavaScript. Enhanced skills in frontend development, API handling, and responsive design.",
      logo: "/assets/cognifyz.png",
    },
    {
      id: 2,
      company: "Prodigy Infotech",
      role: "Web Development Internship",
      period: "Jan - Feb 2025",
      description:
        "Developed a clean, semantic HTML page structure to ensure proper content organization. Applied inline CSS for styling, enhancing the page's visual appeal and consistency. Strengthened skills in HTML elements, attributes, and layout principles for improved user experience. Gained hands-on experience with frontend design techniques and web content structuring",
      logo: "/assets/pi.svg",
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        {/* Skill Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="bg-white border-2 hover:bg-black hover:text-white transition-all cursor-pointer border-black rounded p-3 h-36 w-36 lg:h-44 lg:w-44 flex flex-col items-center justify-center gap-5"
              initial={{ opacity: 0, y: 5 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: skill.id * 0.1 }}
              viewport={{ once: true }}
            >
              {skill.icon}
              <p>{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Experience Section */}
      <div className="bg-black w-full my-8 py-8 lg:my-16 lg:py-16">
        <motion.h2
          className="text-2xl lg:text-4xl text-center text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        {/* Experience Cards */}
        <div className="px-5 lg:px-28 my-8 lg:mt-16 space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-black p-5 border border-[#D4D4D8] rounded-md hover:bg-[#27272A] transition-all cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between flex-col items-start lg:flex-row lg:items-center">
                <div className="flex items-center gap-5">
                  <img className="w-16" src={exp.logo} alt="" />
                  <h2 className="font-semibold text-white text-lg lg:text-xl">
                    {exp.role} at {exp.company}
                  </h2>
                </div>
                <span className="text-[#D4D4D8] font-semibold text-sm mt-4 lg:mt-0 lg:text-base">
                  {exp.period}
                </span>
              </div>
              <p className="text-[#D4D4D8] mt-6 text-sm/6 lg:text-base font-light">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

    </div>
  );
}
