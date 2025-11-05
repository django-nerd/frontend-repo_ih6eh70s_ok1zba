import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, Lock } from "lucide-react";

export default function SignupForm() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function onSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.name.trim()) return setError("Введите имя");
    if (!validateEmail(form.email)) return setError("Некорректная почта");
    if (form.password.length < 6) return setError("Минимум 6 символов в пароле");
    if (form.password !== form.confirm) return setError("Пароли не совпадают");

    setSuccess(true);
  }

  return (
    <section id="signup" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div className="order-2 lg:order-1">
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Регистрация</h3>
          <p className="mt-1 text-neutral-600 dark:text-neutral-400">
            Создайте аккаунт, чтобы получить ранний доступ и персональные обновления.
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
                <User size={18} />
              </span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Ваше имя"
                className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 pl-10 pr-3 py-3 outline-none focus:ring-2 focus:ring-violet-500/60"
              />
            </div>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
                <Mail size={18} />
              </span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Электронная почта"
                className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 pl-10 pr-3 py-3 outline-none focus:ring-2 focus:ring-violet-500/60"
              />
            </div>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
                <Lock size={18} />
              </span>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Пароль"
                className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 pl-10 pr-3 py-3 outline-none focus:ring-2 focus:ring-violet-500/60"
              />
            </div>

            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
                <Lock size={18} />
              </span>
              <input
                type="password"
                name="confirm"
                value={form.confirm}
                onChange={handleChange}
                placeholder="Повторите пароль"
                className="w-full rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 pl-10 pr-3 py-3 outline-none focus:ring-2 focus:ring-violet-500/60"
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-rose-600"
              >
                {error}
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full rounded-xl px-6 py-3 text-white bg-gradient-to-tr from-violet-600 to-sky-600 shadow hover:shadow-lg"
            >
              Создать аккаунт
            </motion.button>

            {success && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-emerald-600"
              >
                Готово! Аккаунт создан локально. Подключим сервер по вашему запросу.
              </motion.p>
            )}
          </form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:order-2 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-8 bg-white/60 dark:bg-neutral-950/50 backdrop-blur"
        >
          <h4 className="text-lg font-semibold text-neutral-900 dark:text-white">Почему стоит зарегистрироваться?</h4>
          <ul className="mt-4 space-y-3 text-neutral-600 dark:text-neutral-300">
            <li className="flex items-start gap-3"><span className="mt-1 size-2 rounded-full bg-violet-500" /> Персональная лента и сохранения</li>
            <li className="flex items-start gap-3"><span className="mt-1 size-2 rounded-full bg-sky-500" /> Ранний доступ к новым функциям</li>
            <li className="flex items-start gap-3"><span className="mt-1 size-2 rounded-full bg-emerald-500" /> Бонусы за активность</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
