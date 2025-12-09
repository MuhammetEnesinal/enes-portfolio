import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const response = await fetch("https://formspree.io/f/mvgebzpy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-3xl shadow-xl border border-gray-200 fade-in"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Bana Mesaj Gönderin
      </h2>

      <div className="space-y-5">
        <div>
          <label className="block font-medium text-gray-700 mb-1">Adınız</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
            placeholder="Adınızı girin"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            E-posta
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
            placeholder="mail@ornek.com"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">Konu</label>
          <input
            type="text"
            name="subject"
            className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
            placeholder="Mesaj konusu"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Mesajınız
          </label>
          <textarea
            name="message"
            required
            className="w-full p-3 h-32 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
            placeholder="Mesajınızı yazın..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition"
        >
          Gönder
        </button>
      </div>

      {status === "loading" && (
        <p className="text-blue-600 font-medium mt-4">Gönderiliyor...</p>
      )}

      {status === "success" && (
        <p className="text-green-600 font-semibold mt-4">
          Mesajınız başarıyla gönderildi! 🚀
        </p>
      )}

      {status === "error" && (
        <p className="text-red-600 font-semibold mt-4">
          Bir hata oluştu. Lütfen tekrar deneyin.
        </p>
      )}
    </form>
  );
}
