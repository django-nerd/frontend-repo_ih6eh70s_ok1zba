import { Github, Twitter, Instagram, Linkedin, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const socials = [
    { href: "https://instagram.com/yourhandle", Icon: Instagram, label: "Instagram" },
    { href: "https://twitter.com/yourhandle", Icon: Twitter, label: "Twitter/X" },
    { href: "https://github.com/yourhandle", Icon: Github, label: "GitHub" },
    { href: "https://linkedin.com/in/yourhandle", Icon: Linkedin, label: "LinkedIn" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200/60 dark:border-neutral-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 select-none">
          <motion.span
            initial={{ rotate: -12, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="inline-flex p-2 rounded-xl bg-gradient-to-tr from-violet-500 to-sky-500 text-white shadow"
          >
            <Rocket size={18} />
          </motion.span>
          <span className="font-semibold tracking-tight text-neutral-900 dark:text-white">
            Flames Site
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition">Функции</a>
          <a href="#signup" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition">Регистрация</a>
          <a href="#contact" className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition">Контакты</a>
        </div>

        <div className="flex items-center gap-2">
          {socials.map(({ href, Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
              aria-label={label}
              title={label}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </nav>
    </header>
  );
}
