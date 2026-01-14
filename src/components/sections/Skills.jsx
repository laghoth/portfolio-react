import { motion } from "framer-motion";
import { skills } from "../../data/projects.js";
import SectionTitle from "../ui/SectionTitle.jsx";

const MotionSection = motion.section;
const MotionDiv = motion.div;

/* ===== Reusable Grid ===== */
const SkillsGrid = ({ items, variant = "default" }) => {
  const gridCols =
    variant === "frontend"
      ? "lg:grid-cols-4"
      : "lg:grid-cols-3";

  return (
    <MotionDiv
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`grid grid-cols-2 sm:grid-cols-3 ${gridCols} gap-6`}
    >
      {items.map((skill) => {
        const Icon = skill.icon;
        return (
          <div
            key={skill.name}
            className="group rounded-2xl border border-gray-200 dark:border-gray-800 dark:bg-gray-900 p-8 flex flex-col items-center justify-center gap-4 hover:border-indigo-600/50 transition"
          >
            <Icon className="text-4xl text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 transition" />
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        );
      })}
    </MotionDiv>
  );
};

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
        <SectionTitle
          label="Skills"
          title="Tools & technologies I work with"
          className="w-full flex flex-col items-center text-center"
          paraghraphText="A focused set of technologies I use to build modern, responsive and performant web applications."
        />

        {/* ===== 2 LINES GRID ===== */}
        <div className="mt-16 grid grid-cols-1 gap-16">

          {/* ===== LINE 1 : FRONTEND ===== */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-gray-100">
              Frontend
            </h3>
            <SkillsGrid
              items={skills.frontend}
              variant="frontend"
            />
          </div>

          {/* ===== LINE 2 : BACKEND + TOOLS ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Backend */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Backend
              </h3>
              <SkillsGrid items={skills.backend} />
            </div>

            {/* Tools */}
            <div>
              <h3 className="mb-6 text-lg font-semibold text-gray-900 dark:text-gray-100">
                Tools
              </h3>
              <SkillsGrid items={skills.tools} />
            </div>

          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default Skills;
