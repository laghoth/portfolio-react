import { motion } from "framer-motion";

/* ===== skills ===== */
import { skills as skillsData } from "../../data/projects.js";
import SectionTitle from "../ui/SectionTitle.jsx";
/* ===== Motion components ===== */
const MotionSection = motion.section;
const MotionDiv = motion.div;

const Skills = () => {
  return (
    <MotionSection
      id="skills"
      className="py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto px-16 xl:px-32 2xl:px-60">
        
        {/* ===== Title ===== */}
        <SectionTitle
          label="Skills"
          title="Tools & technologies I work with"
          className="w-full flex flex-col justify-center items-center text-center"
          paraghraphText="A focused set of technologies I use to build modern, responsive and performant interfaces."
        />

        {/* ===== Grid ===== */}
        <MotionDiv
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skillsData.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group rounded-2xl border border-gray-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-transparent p-8 flex flex-col items-center justify-center gap-4 hover:border-indigo-600/50 transition"
              >
                <Icon className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 transition" />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            );
          })}
        </MotionDiv>
      </div>
    </MotionSection>
  );
};

export default Skills;
