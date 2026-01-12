import { motion } from "framer-motion";

import { experiences } from "../../data/projects"; /* ===== experiences from data file ===== */
import SectionTitle from "../ui/SectionTitle";

/* ===== Motion components ===== */
const MotionSection = motion.section;
const MotionDiv = motion.div;

const Experience = () => {
  return (
    <MotionSection
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 "
    >
      <div className="mx-auto px-16 xl:px-32 2xl:px-60">
        {/* Title */}
        <SectionTitle
          label="Experience"
          title="My professional journey"
          className="w-full flex flex-col justify-center items-center text-center"
        />

        {/* Timeline */}
        <div className="relative border-l border-gray-300 dark:border-gray-700 mt-16">
          {experiences.map((item, index) => (
            <MotionDiv
              key={index}
              initial={{ x: 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 ml-8"
            >
              {/* Dot */}
              <span className="absolute -left-[6px] mt-2 w-3 h-3 rounded-full bg-indigo-600"></span>

              {/* Card */}
              <div className="bg-white dark:bg-gray-900 dark:hover:bg-transparent transition border border-gray-200 dark:border-gray-800 rounded-xl p-6 shadow-sm">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <span className="text-sm text-gray-500">{item.date}</span>
                <p className="mt-3 text-gray-600 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default Experience;
