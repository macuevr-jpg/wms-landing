import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function App() {
  // 🔹 Анимация появления при прокрутке
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
      {/* 🔹 Навигация */}
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

        {/* 🔹 Кнопки с плавным переходом к контактам */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <a
            href="#contacts"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded-2xl transition shadow-md hover:shadow-yellow-400/50"
          >
            Купити притиск
          </a>
          <a
            href="#contacts"
            className="bg-transparent border border-yellow-400 text-yellow-400 px-6 py-3 rounded-2xl hover:bg-yellow-500 hover:text-gray-900 transition shadow-md hover:shadow-yellow-400/40"
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
            className="fade-in-section bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition transform hover:-translate-y-2 opacity-0"
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
      <section
        id="contacts"
        className="bg-yellow-400 text-gray-900 py-16 px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          Хочете дізнатися більше або зробити замовлення?
        </h2>
        <p className="mb-6 text-lg">
          Зв’яжіться з нами — допоможемо підібрати оптимальне рішення для вашого виробництва.
        </p>

        {/* Телефони */}
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {/* Основний телефон */}
          <a
            href="tel:+380501471036"
            className="inline-flex items-center gap-2 bg-gray-900 text-yellow-400 font-semibold px-8 py-3 rounded-2xl shadow-lg hover:shadow-yellow-300/40 transition transform hover:scale-105 hover:text-yellow-300"
          >
            <span className="text-red-500 text-lg">📞</span> 050-147-10-36
          </a>

          {/* Телефон з Viber і Telegram */}
          <a
            href="tel:+380684324203"
            className="inline-flex items-center gap-2 bg-gray-900 text-yellow-400 font-semibold px-8 py-3 rounded-2xl shadow-lg hover:shadow-purple-400/40 transition transform hover:scale-105 hover:text-yellow-300"
          >
            <span className="text-purple-500 text-lg">💬</span> 068-432-42-03
          </a>
        </div>

        {/* Іконки месенджерів */}
        <div className="flex justify-center gap-6 mt-4">
          {/* Viber */}
          <a
            href="viber://chat?number=%2B380684324203"
            className="flex items-center gap-2 text-gray-800 hover:text-purple-600 transition font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="w-6 h-6">
              <path
                fill="#7b519d"
                d="M36 2H12C6.477 2 2 6.477 2 12v24c0 5.523 4.477 10 10 10h24c5.523 0 10-4.477 10-10V12c0-5.523-4.477-10-10-10z"
              />
              <path
                fill="#fff"
                d="M35.062 26.938a9.952 9.952 0 0 1-5.607-1.72c-.92-.6-1.955-.27-2.28.48l-.57 1.19c-.25.52-.92.66-1.43.36-1.46-.83-3.01-1.91-4.57-3.47s-2.64-3.11-3.47-4.57c-.3-.51-.16-1.18.36-1.43l1.19-.57c.75-.32 1.08-1.36.48-2.28A9.952 9.952 0 0 1 21.06 12H12c-.55 0-1 .45-1 1v3c0 8.837 7.163 16 16 16h3c.55 0 1-.45 1-1v-2.062z"
              />
            </svg>
            Viber
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/+380684324203"
            className="flex items-center gap-2 text-gray-800 hover:text-blue-500 transition font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" className="w-6 h-6">
              <circle cx="120" cy="120" r="120" fill="#37aee2" />
              <path
                fill="#fff"
                d="M190 69l-23 109c-2 9-7 11-14 7l-38-28-18 18c-2 2-3 3-6 3l2-40 72-65c3-2-1-3-5-1l-89 56-39-12c-8-3-8-8 2-12l152-58c7-3 14 1 11 13z"
              />
            </svg>
            Telegram
          </a>
        </div>
      </section>

      {/* 🔹 Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-6 text-center text-sm shadow-inner border-t border-gray-700">
        <p className="transition duration-300 hover:text-yellow-400 hover:drop-shadow-[0_0_6px_rgba(255,255,150,0.5)]">
          © {new Date().getFullYear()} WMS Service
        </p>
      </footer>
    </div>
  );
}
