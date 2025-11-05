import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import InteractivePanel from "./components/InteractivePanel";
import SignupForm from "./components/SignupForm";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-sky-50 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-100">
      <Navbar />
      <main>
        <Hero />
        <InteractivePanel />
        <SignupForm />
      </main>
      <footer id="contact" className="border-t border-neutral-200/60 dark:border-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 text-sm text-neutral-600 dark:text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Ваш бренд. Все права защищены.</p>
          <div className="flex items-center gap-4">
            <a href="#signup" className="hover:text-neutral-900 dark:hover:text-white transition">Регистрация</a>
            <a href="#features" className="hover:text-neutral-900 dark:hover:text-white transition">Функции</a>
            <a href="#" className="hover:text-neutral-900 dark:hover:text-white transition">Политика</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
