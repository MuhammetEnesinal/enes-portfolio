import ProjectsList from "../components/projects/ProjectList";

export default function ProjectsPage() {
  return (
    <section className="min-h-screen px-6 md:px-20 py-24 bg-gray-100">
      <div className="text-center mb-12 fade-in">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Projelerim
        </h1>

        <div className="w-24 h-1 mx-auto mt-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          GitHub hesabımda geliştirdiğim tüm projeler otomatik olarak aşağıda
          listelenir. Web, mobil, yapay zeka ve derin öğrenme alanlarındaki
          çalışmalarımı keşfedebilirsiniz.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <ProjectsList />
      </div>
    </section>
  );
}
