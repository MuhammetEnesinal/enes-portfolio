import { useEffect, useState } from "react";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/MuhammetEnesinal/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((repo) => !repo.fork && !repo.archived);
        setRepos(filtered);
      })
      .catch((err) => console.error("GitHub fetch error:", err));
  }, []);

  const generateDescription = (repoName) => {
    const name = repoName.toLowerCase();

    if (name.includes("bank") && name.includes("python"))
      return "Python ile geliştirilmiş banka yönetim sistemi.";

    if (name.includes("bank") && name.includes("java"))
      return "Java tabanlı banka otomasyon projesi.";

    if (name.includes("shopping"))
      return "Mağaza ve ürün yönetimi sağlayan küçük ölçekli sistem.";

    if (name.includes("ai") || name.includes("tumor") || name.includes("mri"))
      return "Derin öğrenme ile MR görüntülerinden tümör tespiti yapan model.";

    if (name.includes("airport"))
      return "Havalimanı terminali yönetimi için simülasyon projesi.";

    if (name.includes("terminal")) return "Terminal / konsol tabanlı uygulama.";

    if (name.includes("portfolio"))
      return "React ve Tailwind CSS kullanılarak geliştirilmiş portföy sitesi.";

    return "Bu proje için açıklama henüz eklenmemiş.";
  };

  return (
    <section id="projects" className="w-full px-6 md:px-20 py-24 bg-gray-50">
      <h2 className="text-4xl font-bold text-gray-900 text-center">Projeler</h2>
      <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-3 rounded-full"></div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {repos.map((repo) => {
          const description =
            repo.description?.trim() || generateDescription(repo.name);

          return (
            <div
              key={repo.id}
              className="bg-white/90 border border-gray-200 rounded-2xl shadow-lg p-6 max-w-xl w-full hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {repo.name.replace(/-/g, " ")}
              </h3>

              <p className="text-sm text-gray-700 mb-4">{description}</p>

              <a
                href={repo.html_url}
                target="_blank"
                className="text-blue-600 hover:underline text-sm"
              >
                GitHub Repo →
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}
