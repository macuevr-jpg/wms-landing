import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* 🔹 Hero Section */}
      <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Про компанію WMS Service</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300">
          Ми створюємо ексцентрикові притиски для форматно-розкрійних верстатів, 
          поєднуючи інженерну точність і надійність у кожній деталі.
        </p>
      </section>

      {/* 🔹 Content Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto leading-relaxed text-lg">
        <p className="mb-6">
          Компанія <strong>WMS Service</strong> спеціалізується на виробництві високоякісних ексцентрикових притисків 
          для форматно-розкрійних верстатів. Ми забезпечуємо <span className="font-semibold">максимальну точність, стабільність і довговічність</span> нашої продукції.
        </p>

        <p className="mb-6">
          Наші притиски сумісні з популярними моделями верстатів <strong>SCM</strong>, <strong>Biesse</strong>, <strong>Altendorf</strong>, <strong>KDT</strong>, <strong>Holzmann</strong> та іншими верстатами, що використовуються на виробництвах по всій Україні.

        </p>

        <p className="mb-6">
          Виготовлення здійснюється з <strong>високоякісних металів</strong> на сучасному обладнанні, 
          а кожен виріб проходить перевірку перед відправленням клієнту.
        </p>

        <p>
          Ми прагнемо до того, щоб наші вироби служили довго, були зручними в роботі і підвищували 
          ефективність вашого виробництва.
        </p>
      </section>

      {/* 🔹 CTA Section */}
      <section className="bg-yellow-400 text-gray-900 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Хочете дізнатися більше?</h2>
        <p className="mb-6">Зв’яжіться з нами — допоможемо підібрати оптимальне рішення для вашого виробництва.</p>
        <a
          href="tel:+380501471036"
          className="inline-block bg-gray-900 text-yellow-400 font-semibold px-8 py-3 rounded-2xl hover:bg-gray-800 transition"
        >
          📞 050-147-10-36
        </a>
      </section>

      {/* 🔹 Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 text-center text-sm">
        <p>© {new Date().getFullYear()} WMS Service, м. Харків</p>
        <p className="mt-2">
          Створено за підтримки{' '}
          <a href="https://gptonline.ai/" className="text-yellow-400 hover:underline">
            GPTOnline.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
