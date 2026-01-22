import { motion } from "framer-motion";
import { services } from "../../data/projects"; /*  List Services from data File */
import SectionTitle from "../ui/SectionTitle";

/* ===== Motion components ===== */
const MotionSection = motion.section;
const MotionDiv = motion.div;

const About = () => {
  return (
    <MotionSection
      id="about"
      className="relative py-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* subtle background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-indigo-50/40 to-transparent dark:via-indigo-500/5" />

      <div className="mx-auto w-full grid lg:grid-cols-2 gap-20 px-16 xl:px-32 2xl:px-60 items-center">
        {/* ===== Left / Text ===== */}
        <MotionDiv
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Title */}
          <SectionTitle
            label="About me"
            title="Building clean & modern
            user experiences"
            className="w-full flex flex-col justify-center items-start text-start"
          />

          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
            I’m a frontend developer who enjoys crafting elegant interfaces with
            attention to detail. My focus is on performance, accessibility and
            smooth user interactions using modern web technologies.
          </p>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
            I care about clean code, scalable components and creating
            experiences that feel intuitive and polished.
          </p>
        </MotionDiv>

        {/* ===== Right / Cards ===== */}
        <MotionDiv
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {services.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-gray-200 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-transparent p-8 hover:border-indigo-600/50 transition"
            >
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </MotionDiv>
      </div>
    </MotionSection>
  );
};

export default About;
