"use client";
import { useState } from "react";

/* Маска телефону */
function phoneMask(value) {
  const digits = value.replace(/\D/g, "");
  if (!digits.startsWith("380")) return "+380 ";
  let result = "+380 ";
  const numbers = digits.slice(3, 12);
  if (numbers.length > 0) result += numbers.slice(0, 2);
  if (numbers.length > 2) result += " " + numbers.slice(2, 5);
  if (numbers.length > 5) result += " " + numbers.slice(5, 7);
  if (numbers.length > 7) result += " " + numbers.slice(7, 9);
  return result;
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      setLoading(false);

      if (res.ok) {
        form.reset();
        setSubmitted(true);
      } else {
        const data = await res.json();
        alert(data.error || "Помилка відправки. Спробуйте ще раз.");
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
      alert("Помилка відправки. Спробуйте ще раз.");
    }
  }

  return (
    <section className="max-w-2xl mx-auto">
      {submitted ? (
        <div className="text-center py-20">
          <div className="text-6xl mb-4">📬</div>
          <h2 className="text-2xl font-bold mb-2">Повідомлення надіслано</h2>
          <p className="text-gray-500">
            Дякуємо! Ми зв’яжемось з вами найближчим часом.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            required
            placeholder="Ваше ім'я"
            className="input input-bordered w-full"
          />
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
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="input input-bordered w-full"
          />
          <textarea
            name="message"
            required
            placeholder="Ваше повідомлення"
            className="textarea textarea-bordered w-full"
          />
          <button
            disabled={loading}
            className="text-center inline-flex items-center justify-center rounded-lg bg-brand px-6 py-3 text-lg font-semibold text-white transition hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {loading ? "Надсилання..." : "Надіслати повідомлення"}
          </button>
        </form>
      )}
    </section>
  );
}