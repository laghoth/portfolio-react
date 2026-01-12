import { motion } from "framer-motion";

/* ===== Motion Components ===== */
const MotionSection = motion.section;
const MotionDiv = motion.div;

const Contact = () => {
  return (
    <MotionSection
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-16 px-16"
    >
      <div className="mx-auto text-center xl:px-32 2xl:px-60">
        {/* Title */}
        <MotionDiv
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s work together
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-gray-600 dark:text-gray-400">
            I’m open to freelance projects, collaborations or full-time
            opportunities. Feel free to reach out.
          </p>
        </MotionDiv>

        {/* CTA */}
        <MotionDiv
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10"
        >
          <a
            href="mailto:your@email.com"
            className="inline-block px-10 py-4 rounded-2xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            Get in touch
          </a>
        </MotionDiv>
      </div>
    </MotionSection>
  );
};

export default Contact;
