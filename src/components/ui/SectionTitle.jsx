import { motion } from "framer-motion";

const MotionDiv = motion.div;

const SectionTitle = ({
  label,
  title,
  className = null,
  paraghraphText = null,
}) => {
  return (
    <div className={className}>
      <span className="text-sm uppercase tracking-widest text-primary font-extrabold">
        {label}
      </span>

      <h2 className="mt-4 text-4xl font-bold leading-tight">{title}</h2>
      <p className="mt-4 text-gray-600 dark:text-gray-400">{paraghraphText}</p>
    </div>
  );
};

export default SectionTitle;
