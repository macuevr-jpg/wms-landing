import React from "react";
import Navbar from "./Navbar";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      {/* 🔹 Заголовок */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Про компанію WMS Service</h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-300">
          Ми створюємо ексцентрикові притиски для форматно-розкрійних верстатів,
          поєднуючи інженерну точність і надійність у кожній деталі.
        </p>
      </section>

      {/* 🔹 Опис компанії */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-lg leading-relaxed text-gray-700">
        <p className="mb-6">
          Компанія <strong>WMS Service</strong> спеціалізується на виробництві
          високоякісних ексцентрикових притисків для форматно-розкрійних верстатів.
          Ми забезпечуємо <strong>максимальну точність, стабільність і довговічність</strong> нашої продукції.
        </p>
        <p className="mb-6">
          Наші притиски сумісні з популярними моделями верстатів
          <strong> SCM, Biesse, Altendorf, KDT, Holzmann </strong>
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

      {/* 🔹 Контакти */}
      <section className="bg-yellow-400 text-gray-900 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Хочете дізнатися більше?</h2>
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
