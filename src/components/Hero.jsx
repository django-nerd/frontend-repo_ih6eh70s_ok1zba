import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-70">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-500/30 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-500/30 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white"
            >
              Современный сайт с интерактивом и регистрацией
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-neutral-600 dark:text-neutral-300"
            >
              Красивые анимации, удобные кнопки и ваши соцсети — всё в одном месте.
            </motion.p>

            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href="#signup"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-gradient-to-tr from-violet-600 to-sky-600 text-white shadow hover:shadow-lg transition"
              >
                Начать сейчас
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#features"
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition"
              >
                <Sparkles size={18} />
                Посмотреть возможности
              </motion.a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-6"
          >
            <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 grid place-items-center overflow-hidden">
              <motion.div
                animate={{ rotate: [0, 8, 0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className="size-40 sm:size-56 rounded-2xl bg-gradient-to-tr from-violet-500 to-sky-500 shadow-2xl"
              />
            </div>
            <p className="mt-3 text-center text-sm text-neutral-500 dark:text-neutral-400">
              Эффектная демонстрация анимации. Настоящий контент — ниже.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
