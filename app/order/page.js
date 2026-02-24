"use client";

import { useState } from "react";

/* ===== Маска телефону ===== */
function phoneMask(value) {
  const digits = value.replace(/\D/g, "");

  if (!digits.startsWith("380")) {
    return "+380 ";
  }

  let result = "+380 ";
  const numbers = digits.slice(3, 12);

  if (numbers.length > 0) result += numbers.slice(0, 2);
  if (numbers.length > 2) result += " " + numbers.slice(2, 5);
  if (numbers.length > 5) result += " " + numbers.slice(5, 7);
  if (numbers.length > 7) result += " " + numbers.slice(7, 9);

  return result;
}

/* ===== Дані ===== */
const cities = [
  {
    name: "Камʼянське",
    districts: ["Центр", "Лівий берег", "Черемушки", "Соцмісто"]
  }
];

export default function OrderPage() {
  const [city, setCity] = useState("");
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCityChange = (value) => {
    setCity(value);
    const selected = cities.find(c => c.name === value);
    setDistricts(selected ? selected.districts : []);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/order", {
      method: "POST",
      body: formData
    });

    setLoading(false);

    if (res.ok) {
      form.reset();
      setCity("");
      setDistricts([]);
      setSubmitted(true);
    } else {
      alert("Помилка відправки. Спробуйте ще раз.");
    }
  }

  return (
    <section className="max-w-2xl mx-auto px-4 py-12">

      {/* ===== SUCCESS ===== */}
      {submitted ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold mb-2">
            Заявку прийнято
          </h2>
          <p className="text-gray-500">
            Ми звʼяжемось з вами найближчим часом
          </p>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-center mb-2">
            Замовити майстра
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Залиште заявку — ми підберемо спеціаліста у вашому районі
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Місто */}
            <select
              name="city"
              required
              className="select select-bordered w-full"
              onChange={(e) => handleCityChange(e.target.value)}
            >
              <option value="">Оберіть місто</option>
              {cities.map(city => (
                <option key={city.name} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>

            {/* Район */}
            <select
              name="district"
              required
              disabled={!districts.length}
              className="select select-bordered w-full"
            >
              <option value="">Оберіть район</option>
              {districts.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>

            {/* Імʼя */}
            <input
              type="text"
              name="name"
              required
              placeholder="Ваше імʼя"
              className="input input-bordered w-full"
            />

            {/* Телефон */}
            <input
              type="tel"
              name="phone"
              required
              defaultValue="+380 "
              placeholder="+380 00 000 00 00"
              onInput={(e) => {
                e.target.value = phoneMask(e.target.value);
              }}
              className="input input-bordered w-full"
            />

            {/* Майстер */}
            <select
              name="service"
              required
              className="select select-bordered w-full"
            >
              <option value="">Оберіть майстра</option>
              <option value="Електрик">Електрик</option>
              <option value="Сантехнік">Сантехнік</option>
              <option value="Майстер з ремонту">Майстер з ремонту</option>
              <option value="Майстер зі збірки меблів">Майстер зі збірки меблів</option>
            </select>

            {/* Опис */}
            <textarea
              name="description"
              required
              placeholder="Опишіть, що потрібно зробити"
              className="textarea textarea-bordered w-full"
            />

            <button
              disabled={loading}
              className="btn inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-lg font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 hover:text-white"
            >
              {loading ? "Надсилання..." : "Надіслати заявку"}
            </button>

          </form>
        </>
      )}
    </section>
  );
}
