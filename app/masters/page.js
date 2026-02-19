"use client";

import { useState } from "react";

/* ===== Маска телефону ===== */
function phoneMask(value) {
  const digits = value.replace(/\D/g, "");

  if (!digits.startsWith("380")) {
    return "+380 ";
  }

  let result = "+380 ";
  const numbers = digits.slice(3, 12); // 9 цифр після 380

  if (numbers.length > 0) result += numbers.slice(0, 2);
  if (numbers.length > 2) result += " " + numbers.slice(2, 5);
  if (numbers.length > 5) result += " " + numbers.slice(5, 7);
  if (numbers.length > 7) result += " " + numbers.slice(7, 9);

  return result;
}

/* ===== Стандартні напрями ===== */
const defaultServices = [
  "Електрик",
  "Сантехнік",
  "Майстер з ремонту",
  "Майстер з кондиціонерів",
  "Майстер з побутової техніки"
];

export default function MastersPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [otherService, setOtherService] = useState("");

  /* ===== Обробка чекбоксів ===== */
  const handleServiceChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setSelectedServices([...selectedServices, value]);
    } else {
      setSelectedServices(selectedServices.filter(s => s !== value));
    }
  };

  async function handleSubmit(e) {
  e.preventDefault();
  setLoading(true);

  const form = e.currentTarget;

  // Оновлюємо hidden input прямо перед FormData
  const hiddenInput = form.querySelector('input[name="services"]');
  hiddenInput.value = selectedServices.concat(otherService ? [otherService.trim()] : []).join(", ");

  const formData = new FormData(form);

  const res = await fetch("/api/masters", {
    method: "POST",
    body: formData
  });

  setLoading(false);

  if (res.ok) {
    form.reset();
    setSelectedServices([]);
    setOtherService("");
    setSubmitted(true);
  } else {
    alert("Помилка відправки. Спробуйте ще раз.");
  }
}


  return (
    <section className="max-w-2xl mx-auto px-4 py-12">

      {submitted ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🤝</div>
          <h2 className="text-2xl font-bold mb-2">
            Заявку прийнято
          </h2>
          <p className="text-gray-500">
            Ми звʼяжемось з вами для співпраці найближчим часом
          </p>
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold text-center mb-2">
            Співпраця з майстрами
          </h1>

          <p className="text-center text-gray-500 mb-8">
            Залиште заявку — і ми запропонуємо вам співпрацю
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

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

            {/* Ваші напрями (чекбокси) */}
            <div className="space-y-2">
              <label className="font-semibold">Ваші напрями:</label>
              {defaultServices.map(s => (
                <div key={s} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={s}
                    onChange={handleServiceChange}
                    checked={selectedServices.includes(s)}
                  />
                  <span>{s}</span>
                </div>
              ))}

              {/* Інший напрям */}
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Інший напрям"
                  value={otherService}
                  onChange={(e) => setOtherService(e.target.value)}
                  className="input input-bordered w-full"
                />
              </div>

              {/* Невидимий input для FormData */}
              <input
                type="hidden"
                name="services"
                value={selectedServices.concat(otherService ? [otherService] : []).join(", ")}
              />
            </div>

            {/* Досвід */}
            <select
              name="experience"
              required
              className="select select-bordered w-full"
            >
              <option value="">Досвід роботи</option>
              <option value="1-2 роки">1–2 роки</option>
              <option value="3-5 років">3–5 років</option>
              <option value="5+ років">5+ років</option>
            </select>

            {/* Про себе */}
            <textarea
              name="description"
              required
              placeholder="Коротко про себе, досвід, міста роботи"
              className="textarea textarea-bordered w-full"
            />

            <button
              disabled={loading}
              className="btn btn-primary w-full"
            >
              {loading ? "Надсилання..." : "Надіслати заявку"}
            </button>

          </form>
        </>
      )}
    </section>
  );
}
