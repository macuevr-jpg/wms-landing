import React from 'react';
import Navbar from './Navbar'; // 👈 добавлено
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar /> {/* 👈 меню вынесено сюда */}

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
          <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded-2xl transition">
            Купити притиск
          </button>
          <button className="bg-transparent border border-yellow-400 text-yellow-400 px-6 py-3 rounded-2xl hover:bg-yellow-500 hover:text-gray-900 transition">
            Отримати консультацію
          </button>
        </div>
      </section>

      {/* 🔹 Features */}
      <section className="py-16 px-6 max-w-5xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">🎯 Точне фіксування</h3>
          <p>Притиски забезпечують стабільне утримання заготовки без зсуву — чистий і точний розкрій.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">⚙️ Універсальна сумісність</h3>
          <p>Підходять для верстатів SCM, Biesse, KDT, Altendorf, Holzmann та шнших верстатів.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">🧱 Міцна конструкція</h3>
          <p>Виготовлені з високоякісного металу з посиленою пружиною — довговічність і надійність у роботі.</p>
        </div>
      </section>

      {/* 🔹 Gallery */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Фото наших притисків</h2>
        <p className="text-gray-600 mb-8">Реальні зображення ексцентрикових притисків виробництва WMS Service.</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/photo_2023-06-07_16-56-04.jpg" alt="Притиск 1" className="rounded-2xl shadow" />
          <img src="/111.jpg" alt="Притиск 2" className="rounded-2xl shadow" />
          <img src="/photo_2023-06-07_16-55-40.jpg" alt="Притиск 3" className="rounded-2xl shadow" />
          <img src="/press4.jpg" alt="Притиск 4" className="rounded-2xl shadow" />
          <img src="/222.jpg" alt="Притиск 5" className="rounded-2xl shadow" />
        </div>
      </section>

      {/* 🔹 CTA */}
      <section className="bg-yellow-400 text-gray-900 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Хочете дізнатися більше або зробити замовлення?</h2>
        <p className="mb-6">Телефонуйте або залишайте заявку — допоможемо підібрати притиск під ваш верстат.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
  {/* Основной телефон */}
  <a
    href="tel:+380501471036"
    className="inline-flex items-center gap-2 bg-gray-900 text-yellow-400 font-semibold px-8 py-3 rounded-2xl hover:bg-gray-800 transition"
  >
    📞 050-147-10-36
  </a>

  {/* Телефон с Viber и Telegram */}
  <div className="inline-flex flex-col items-center sm:items-start">
    <a
      href="tel:+380684324203"
      className="inline-flex items-center gap-2 bg-gray-900 text-yellow-400 font-semibold px-8 py-3 rounded-2xl hover:bg-gray-800 transition"
    >
      💬 068-432-42-03
    </a>
    <div className="flex justify-center sm:justify-start gap-3 mt-2">
      <a
        href="viber://chat?number=%2B380684324203"
        className="text-gray-700 hover:text-purple-500 transition font-medium"
      >
        📱 Viber
      </a>
      <span className="text-gray-500">•</span>
      <a
        href="https://t.me/+380684324203"
        className="text-gray-700 hover:text-blue-500 transition font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        ✈️ Telegram
      </a>
    </div>
  </div>
</div>
