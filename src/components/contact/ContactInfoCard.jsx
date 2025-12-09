import profileImage from "../../assets/profile.jpeg";

export default function ContactInfoCard() {
  return (
    <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-200 fade-in text-center">
      <img
        src={profileImage}
        alt="profile"
        className="w-28 h-28 rounded-full mx-auto border-4 border-blue-500 shadow-md object-cover"
      />

      <h2 className="text-2xl font-bold text-gray-800 mt-4">
        İletişim Bilgilerim
      </h2>

      <p className="text-gray-600 mt-1">
        Bana her zaman bu kanallardan ulaşabilirsiniz.
      </p>

      <ul className="space-y-4 text-gray-700 text-left mt-6 mx-auto max-w-xs">
        <li className="flex items-start gap-3">
          <span className="text-xl">📧</span>
          <p>
            <b>E-posta:</b> <br />
            <span className="text-gray-600">m.enesinal@gmail.com</span>
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="text-xl">📱</span>
          <p>
            <b>Telefon:</b> <br />
            <span className="text-gray-600">0553 057 15 90</span>
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="text-xl">🔗</span>
          <p>
            <b>LinkedIn:</b> <br />
            <a
              href="https://www.linkedin.com/in/enes-inal/"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/enes-inal
            </a>
          </p>
        </li>

        <li className="flex items-start gap-3">
          <span className="text-xl">🐙</span>
          <p>
            <b>GitHub:</b> <br />
            <a
              href="https://github.com/MuhammetEnesinal"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              github.com/MuhammetEnesinal
            </a>
          </p>
        </li>
      </ul>
    </div>
  );
}
