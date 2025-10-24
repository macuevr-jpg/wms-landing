import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-fadeIn");
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".fade-in-section").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      {/* 🔹 Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Ексцентрикові притиски для форматно-розкрійних верстатів
        </h1>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Надійне фіксування заготовки. Максимальна точність розкрою. 
          Висока якість притисків від <span className="font-semibold">WMS Service</span>.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a
            href="#contacts"
            className="btn-primary"
          >
            Купити притиск
          </a>
          <a
            href="#contacts"
            className="btn-outline"
          >
            Отримати консультацію
          </a>
        </div>
      </section>

      {/* 🔹 Особливості */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
        {[
          {
            emoji: "🎯",
            title: "Точне фіксування",
            text: "Притиски забезпечують стабільне утримання заготовки без зсуву — чистий і точний розкрій.",
          },
          {
            emoji: "⚙️",
            title: "Універсальна сумісність",
            text: "Підходять для верстатів SCM, Biesse, KDT, Altendorf, Holzmann та інших аналогів.",
          },
          {
            emoji: "🧱",
            title: "Міцна конструкція",
            text: "Виготовлені з високоякісного металу з посиленою пружиною — довговічність і надійність у роботі.",
          },
          {
            emoji: "🧩",
            title: "Виготовлення нестандартних розмірів",
            text: "Ми приймаємо замовлення на виготовлення ексцентрикових притисків під індивідуальні параметри — діаметр, висоту, форму основи чи кріплення. Це дозволяє адаптувати інструмент під будь-який верстат або особливості вашого виробництва.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="fade-in-section card opacity-0"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <h3 className="text-xl font-semibold mb-2">
              {item.emoji} {item.title}
            </h3>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      {/* 🔹 Галерея */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Фото наших притисків</h2>
        <p className="text-gray-600 mb-8">
          Реальні зображення ексцентрикових притисків виробництва WMS Service.
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/photo_2023-06-07_16-56-04.jpg" alt="Притиск 1" className="rounded-2xl shadow" />
          <img src="/111.jpg" alt="Притиск 2" className="rounded-2xl shadow" />
          <img src="/photo_2023-06-07_16-55-40.jpg" alt="Притиск 3" className="rounded-2xl shadow" />
          <img src="/press4.jpg" alt="Притиск 4" className="rounded-2xl shadow" />
          <img src="/222.jpg" alt="Притиск 5" className="rounded-2xl shadow" />
        </div>
      </section>

      {/* 🔹 Контакти */}
      <section id="contacts" className="bg-yellow-400 text-gray-900 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Хочете дізнатися більше або зробити замовлення?
        </h2>
        <p className="mb-6 text-lg">
          Зв’яжіться з нами — допоможемо підібрати оптимальне рішення для вашого виробництва.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <a href="tel:+380501471036" className="contact-btn">
            <span className="text-red-500 text-lg">📞</span> 050-147-10-36
          </a>
          <a href="tel:+380684324203" className="contact-btn">
            <span className="text-purple-500 text-lg">💬</span> 068-432-42-03
          </a>
        </div>

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="viber://chat?number=%2B380684324203"
            className="flex items-center gap-2 text-gray-800 hover:text-purple-600 transition font-medium"
          >
            <img src="/viber-icon.svg" alt="Viber" className="w-6 h-6" /> Viber
          </a>
          <a
            href="https://t.me/+380684324203"
            className="flex items-center gap-2 text-gray-800 hover:text-blue-500 transition font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/telegram-icon.svg" alt="Telegram" className="w-6 h-6" /> Telegram
          </a>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-6 text-center text-sm shadow-inner border-t border-gray-700">
        <p className="transition duration-300 hover:text-yellow-400 hover:drop-shadow-[0_0_6px_rgba(255,255,150,0.5)]">
          © {new Date().getFullYear()} WMS Service
        </p>
      </footer>
    </div>
  );
}
