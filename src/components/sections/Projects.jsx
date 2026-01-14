import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";

import { projectsPortfolio } from "../../data/projects";

/* ===== Motion components ===== */
const MotionSection = motion.section;
const MotionDiv = motion.div;

const Projects = () => {
  return (
    <MotionSection
      id="projects"
      className="py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Container>
        {/* ===== Title ===== */}

        <SectionTitle
          label="Projects"
          title="Selected work"
          className="w-full flex flex-col justify-center items-center text-center"
          paraghraphText="A selection of projects showcasing my frontend skills and attention to detail."
        ></SectionTitle>

        {/* ===== Grid ===== */}
        <MotionDiv
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projectsPortfolio.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-indigo-600/50 transition"
            >
              {/* Image */}
              <div className="relative overflow-hidden group h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className=" w-full transition-transform duration-[4000ms] ease-linear group-hover:-translate-y-1/2"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4 justify-between h-[calc(100%-224px)]">
                <div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
                <div>
                  {/* Tech */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-4 flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-sm hover:text-indigo-600 transition"
                    >
                      <FaGithub /> Code
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 text-sm hover:text-indigo-600 transition"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </MotionDiv>
      </Container>
    </MotionSection>
  );
};

export default Projects;
