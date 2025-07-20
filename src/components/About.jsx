import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row scroll-mt-32" id="about">
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img src="/assets/about-me.svg" alt="About Me Illustration" />
      </motion.div>

      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>


        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
        I’m a passionate developer with a strong focus on frontend development and a Bachelor’s degree in Computer Applications. I specialize in building clean, responsive websites using HTML, CSS, JavaScript, and React.js. I also work with Python, PHP, and MySQL to develop dynamic web applications.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
        I’m always eager to learn new skills and keep up with the latest tech trends. I thrive on blending technical expertise with sleek UI/UX design to build high-performing, user-friendly applications.
        </p>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-5">
        I enjoy building projects that challenge me to learn and grow — from portfolio websites to practical web apps. Outside of coding, I love connecting with other developers, learning about new trends, and sharing what I know.
        </p>
      </motion.div>
    </div>
  );
}
