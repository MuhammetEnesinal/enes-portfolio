export default function AboutEducation() {
  return (
    <div className="space-y-10 fade-in">
      <div className="relative pl-10">
        <div className="absolute left-3 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
        <div className="absolute left-1 top-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow"></div>

        <h3 className="text-xl font-semibold">
          Bilgisayar Mühendisliği Lisans Programı
        </h3>
        <p className="text-gray-500">
          İstanbul Topkapı Üniversitesi — 2022 - Devam Ediyor
        </p>

        <p className="mt-3 text-gray-700">
          Algoritmalar, yazılım mimarileri, veri yapıları, yapay zeka ve mobil
          uygulama geliştirme konularında kapsamlı bir akademik eğitim alıyorum.
          Hem teorik hem de proje tabanlı derslerde gerçek dünya problemlerine
          yönelik çözümler üreterek kendimi geliştirdim.
        </p>
      </div>

      <div className="relative pl-10">
        <div className="absolute left-3 top-0 w-1 h-full bg-gray-300 rounded-full"></div>
        <div className="absolute left-1 top-1 w-6 h-6 bg-gray-500 rounded-full border-4 border-white shadow"></div>

        <h3 className="text-xl font-semibold">Tuna İlköğretim Okulu</h3>
        <p className="text-gray-500">2010 - 2014</p>
      </div>

      <div className="relative pl-10">
        <div className="absolute left-3 top-0 w-1 h-full bg-gray-300 rounded-full"></div>
        <div className="absolute left-1 top-1 w-6 h-6 bg-gray-500 rounded-full border-4 border-white shadow"></div>

        <h3 className="text-xl font-semibold">Mustafa İleri Ortaokulu</h3>
        <p className="text-gray-500">2014 - 2018</p>
      </div>

      <div className="relative pl-10">
        <div className="absolute left-3 top-0 w-1 h-full bg-gray-300 rounded-full"></div>
        <div className="absolute left-1 top-1 w-6 h-6 bg-gray-500 rounded-full border-4 border-white shadow"></div>

        <h3 className="text-xl font-semibold">Tuna Anadolu Lisesi</h3>
        <p className="text-gray-500">2018 - 2022</p>
      </div>
    </div>
  );
}
