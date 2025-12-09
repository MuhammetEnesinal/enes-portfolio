export default function About() {
  return (
    <section
      id="about"
      className="w-full flex justify-center px-4 md:px-20 py-24"
    >
      <div className="bg-white/90 backdrop-blur-xl shadow-2xl rounded-3xl p-12 md:p-16 max-w-5xl border border-gray-200 relative">
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-xl">
          <span className="text-3xl">👨‍💻</span>
        </div>

        <h2 className="text-4xl font-bold text-gray-900 mt-10 text-center">
          Hakkımda
        </h2>

        <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-3 rounded-full"></div>

        <p className="text-lg text-gray-700 leading-relaxed mt-10 text-center">
          İstanbul Topkapı Üniversitesi Bilgisayar Mühendisliği öğrencisiyim.
          Yazılım geliştirmeye olan ilgim doğrultusunda; web geliştirme, mobil
          uygulama, yapay zeka ve modern yazılım teknolojileri üzerine aktif
          olarak projeler geliştiriyorum. Algoritmalar, veri yapıları ve yapay
          zekâ yaklaşımları üzerine hem akademik hem de gerçek dünya çalışmaları
          yürütüyorum.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mt-6 text-center">
          Amacım; teknoloji ve yazılım alanlarında kendimi sürekli geliştirerek,
          geleceğe değer katan yenilikçi ve sürdürülebilir projeler üretmek.
        </p>
      </div>
    </section>
  );
}
