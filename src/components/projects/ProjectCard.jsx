export default function ProjectCard({ repo }) {
  return (
    <div className="p-[2px] rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 fade-in">
      <div className="bg-white rounded-3xl p-6 shadow-xl h-full flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{repo.name}</h3>

          <p className="text-gray-600 mt-3 leading-relaxed">
            {repo.description || "Bu proje için açıklama girilmemiş."}
          </p>

          <div className="flex flex-wrap gap-2 mt-4">
            {repo.language && (
              <span className="px-3 py-1 bg-gray-100 rounded-xl text-sm shadow">
                {repo.language}
              </span>
            )}
          </div>
        </div>

        <a
          href={repo.html_url}
          target="_blank"
          className="mt-6 block text-center bg-gray-900 text-white py-2 rounded-xl hover:bg-gray-700 transition"
        >
          GitHub'da Gör
        </a>
      </div>
    </div>
  );
}
