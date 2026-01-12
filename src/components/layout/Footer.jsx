import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const MotionFooter = motion.footer;
const MotionDiv = motion.div;

const Footer = () => {
  return (
    <MotionFooter
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className=" px-16 py-16 border-t border-gray-200 dark:border-gray-800"
    >
      <div className="mx-auto flex flex-col items-center gap-6 xl:px-32 2xl:px-60">
        {/* ===== Badge ===== */}
        <MotionDiv
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="
              px-4 py-1 rounded-full text-sm font-medium
              bg-indigo-600/10 text-indigo-600
            "
        >
          Available for work
        </MotionDiv>
        {/* Name */}
        <h3 className="text-lg font-semibold">Othmane Laghlimi</h3>

        {/* Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://github.com/"
            target="_blank"
            className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-indigo-600 hover:text-white transition"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-indigo-600 hover:text-white transition"
          >
            <FaLinkedinIn size={18} />
          </a>

          <a
            href="mailto:your@email.com"
            className="p-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-indigo-600 hover:text-white transition"
          >
            <FaEnvelope size={18} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Othmane. All rights reserved.
        </p>
      </div>
    </MotionFooter>
  );
};

export default Footer;
