import profileImage from "../../assets/profile.jpeg";
export default function AboutProfileCard() {
  return (
    <div className="text-center fade-in w-full">
      <img
        src={profileImage}
        className="w-36 h-36 rounded-full mx-auto border-4 border-blue-500 shadow-xl object-cover"
        alt="profile"
      />

      <h2 className="text-2xl font-bold mt-4 text-gray-900">
        Muhammet Enes İnal
      </h2>

      <p className="text-gray-600">Computer Engineer | Software Developer</p>
      <div className="mt-6 text-left space-y-3 text-gray-700">
        <p>
          📧 <b>Email:</b> m.enesinal@gmail.com
        </p>

        <p>
          📱 <b>Telefon:</b> 0553 057 15 90
        </p>

        <p>
          📍 <b>Konum:</b> İstanbul, Türkiye
        </p>

        <p>
          🎓 <b>Eğitim:</b> İstanbul Topkapı Üniversitesi
        </p>

        <p>
          💼 <b>Alanlar:</b> Web Geliştirme, Mobil Geliştirme, Yapay Zeka
        </p>

        <div className="pt-3 flex flex-col gap-3">
          <a
            href="https://github.com/MuhammetEnesinal"
            className="bg-gray-900 text-white py-2 rounded-xl shadow hover:bg-gray-700 text-center transition"
            target="_blank"
          >
            GitHub Profilim
          </a>

          <a
            href="https://www.linkedin.com/in/enes-inal/"
            className="bg-blue-600 text-white py-2 rounded-xl shadow hover:bg-blue-700 text-center transition"
            target="_blank"
          >
            LinkedIn Profilim
          </a>

          <a
            href="/MuhammetEnesİnalCv.pdf"
            download="MuhammetEnesİnalCv.pdf"
            className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-xl shadow-lg shadow-green-200 transition-all hover:-translate-y-1"
          >
            📄 CV İndir
          </a>
        </div>
      </div>
    </div>
  );
}
