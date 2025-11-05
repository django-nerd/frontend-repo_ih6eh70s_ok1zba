import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, ThumbsUp, Check, Sparkles } from "lucide-react";

export default function InteractivePanel() {
  const [likes, setLikes] = useState(32);
  const [faved, setFaved] = useState(false);
  const [active, setActive] = useState(true);
  const [color, setColor] = useState("violet");

  const colors = [
    { key: "violet", class: "from-violet-600 to-sky-600" },
    { key: "emerald", class: "from-emerald-600 to-teal-600" },
    { key: "rose", class: "from-rose-600 to-orange-600" },
  ];

  return (
    <section id="features" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-stretch">
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white/60 dark:bg-neutral-950/50 backdrop-blur">
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">
            Игровые кнопки и состояния
          </h3>
          <p className="mt-1 text-neutral-600 dark:text-neutral-400">
            Реакции, избранное, переключатели и выбор цветовой темы блока.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setLikes((v) => v + 1)}
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-100"
            >
              <ThumbsUp size={18} /> Понравилось <span className="ml-1 text-neutral-500">{likes}</span>
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setFaved((s) => !s)}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-white shadow ${
                faved ? "bg-rose-600" : "bg-neutral-900 dark:bg-neutral-800"
              }`}
            >
              <Heart size={18} className={faved ? "fill-white" : ""} />
              {faved ? "В избранном" : "В избранное"}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={() => setActive((s) => !s)}
              className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 border ${
                active
                  ? "border-emerald-300 text-emerald-700 bg-emerald-50 dark:bg-emerald-950/30"
                  : "border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300"
              }`}
            >
              <Check size={18} /> {active ? "Активно" : "Выключено"}
            </motion.button>
          </div>

          <div className="mt-6">
            <p className="text-sm text-neutral-500 mb-2">Цвет панели</p>
            <div className="flex gap-2">
              {colors.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setColor(c.key)}
                  className={`h-9 w-9 rounded-full border-2 ${
                    color === c.key ? "border-neutral-900 dark:border-white" : "border-transparent"
                  } bg-gradient-to-tr ${c.class}`}
                  aria-label={c.key}
                  title={c.key}
                />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          key={color}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white/60 dark:bg-neutral-950/50`}
        >
          <div
            className={`h-40 bg-gradient-to-tr ${
              color === "violet"
                ? "from-violet-600 to-sky-600"
                : color === "emerald"
                ? "from-emerald-600 to-teal-600"
                : "from-rose-600 to-orange-600"
            }`}
          />
          <div className="p-6">
            <h4 className="text-lg font-semibold text-neutral-900 dark:text-white flex items-center gap-2">
              <Sparkles size={18} /> Ваша карточка
            </h4>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">
              Этот блок меняет акцентные цвета. Попробуйте варианты слева.
            </p>

            <AnimatePresence mode="popLayout">
              {active ? (
                <motion.div
                  key="on"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="mt-4 rounded-xl border border-emerald-300/60 text-emerald-900 dark:text-emerald-200 bg-emerald-50/60 dark:bg-emerald-950/30 px-3 py-2 text-sm"
                >
                  Режим активен: доступны дополнительные эффекты.
                </motion.div>
              ) : (
                <motion.div
                  key="off"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  className="mt-4 rounded-xl border border-neutral-300/60 text-neutral-700 dark:text-neutral-300 bg-neutral-50/60 dark:bg-neutral-900/40 px-3 py-2 text-sm"
                >
                  Режим отключён: включите его для дополнительных возможностей.
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
