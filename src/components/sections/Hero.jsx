import { motion } from "framer-motion";

/* ===== Motion components ===== */
const MotionSection = motion.section;
const MotionDiv = motion.div;

const Hero = () => {
  return (
    <MotionSection
      id="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex justify-between px-16 xl:px-32 2xl:px-60"
    >
      <div className="mx-auto w-full grid md:grid-cols-2 items-center">
        {/* ===== Text ===== */}
        <MotionDiv
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex flex-col justify-center items-center lg:items-start">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Hi, I’m <span className="text-primary">Othmane</span>
            </h1>

            <p className="mt-4 max-w-md text-gray-600 dark:text-gray-400">
              {/* Frontend Developer specialized in React, Tailwind CSS and smooth
              UI animations. */}
              I build modern, fast websites with React & Tailwind CSS
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-primary text-white hover:bg-indigo-700 transition"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </MotionDiv>

        {/* ===== Image ===== */}
        <MotionDiv
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-2 rounded-full bg-primary opacity-30 blur-xl"></div>

            <img
              src="/me.jpeg"
              alt="Othmane"
              className="relative w-64 h-64 md:w-72 md:h-72 lg:w-100 lg:h-100 rounded-full object-cover border-4 border-white dark:border-gray-900 transform scale-x-[-1]"
            />
          </div>
        </MotionDiv>
      </div>
    </MotionSection>
  );
};

export default Hero;
