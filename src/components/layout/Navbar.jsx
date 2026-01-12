import {
  FaGithub,
  FaLinkedinIn,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import useDarkMode from "../../hooks/useDarkMode";
import { motion, AnimatePresence } from "framer-motion";

/* ===== Links ===== */
import { links } from "../../data/projects.js";

/* ===== Motion components (RULE) ===== */
const MotionNav = motion.nav;
const MotionDiv = motion.div;

const Navbar = () => {
  const [dark, setDark] = useDarkMode();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  /* 🔒 Scroll lock */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  /* ❌ Close menu on hash change */
  useEffect(() => {
    const closeMenu = () => setOpen(false);
    window.addEventListener("hashchange", closeMenu);
    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <MotionNav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 px-16 xl:px-32 2xl:px-60"
      >
        <div className="w-full h-16 flex items-center justify-between">
          {/* Logo */}
          <h1 className="font-bold text-lg p-0">Othmane</h1>

          {/* Desktop links */}
          <div className="hidden md:flex gap-6 text-sm">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`transition ${
                  active === link.href
                    ? "text-primary font-medium"
                    : "text-primary-hover"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <a className="hidden md:block hover:text-primary  " href="#">
              <FaGithub size={18} />
            </a>
            <a className="hidden md:block hover:text-primary" href="#">
              <FaLinkedinIn size={18} />
            </a>

            {/* Dark mode */}
            <button
              onClick={() => setDark(!dark)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {dark ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            {/* Burger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {open ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </MotionNav>

      {/* ===== Blur Overlay ===== */}
      <AnimatePresence>
        {open && (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* ===== Mobile Menu ===== */}
      <AnimatePresence>
        {open && (
          <MotionDiv
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-50 md:hidden bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="px-6 py-6 flex flex-col gap-5 text-sm">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActive(link.href);
                    setOpen(false);
                  }}
                  className={`${
                    active === link.href ? "text-primary font-medium" : ""
                  }`}
                >
                  {link.name}
                </a>
              ))}

              <div className="flex gap-4 pt-4">
                <a href="#">
                  <FaGithub size={18} />
                </a>
                <a href="#">
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </div>
          </MotionDiv>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
