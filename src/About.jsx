import React from "react";
import Navbar from "./Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* 🔹 Навігація */}
      <Navbar />

      {/* 🔹 Заголовок сторінки */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Про компанію WMS Service</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-300">
          Ми створюємо ексцентрикові притиски для форматно-розкрійних верстатів, 
          поєднуючи інженерну точність і надійність у кожній деталі.
        </p>
      </section>

      {/* 🔹 Твоя текстова секція */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700">
        <p className="mb-6">
          Компанія <strong>WMS Service</strong> спеціалізується на виробництві
          високоякісних ексцентрикових притисків для форматно-розкрійних верстатів.
          Ми забезпечуємо <strong>максимальну точність, стабільність і довговічність</strong> нашої продукції.
        </p>
        <p className="mb-6">
  Наші притиски сумісні з популярними моделями верстатів{" "}
  <strong>SCM, Biesse, Altendorf, KDT, Holzmann</strong>{" "}
  та іншими моделями верстатів, що використовуються на виробництвах по всій Україні.
</p>
        <p className="mb-6">
          Виготовлення здійснюється з <strong>високоякісних металів</strong> на сучасному обладнанні, 
          а кожен виріб проходить перевірку перед відправленням клієнту.
        </p>
        <p>
          Ми прагнемо до того, щоб наші вироби служили довго, були зручними у роботі 
          й підвищували ефективність вашого виробництва.
        </p>
      </section>

      {/* 🔹 Контакти компанії */}
      <section className="bg-yellow-400 text-gray-900 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Хочете дізнатися більше?
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
