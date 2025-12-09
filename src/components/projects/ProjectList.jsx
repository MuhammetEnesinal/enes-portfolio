import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsList() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/MuhammetEnesinal/repos")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (repo) =>
            !repo.fork && // kendi yazdıklarını al
            repo.name !== "MuhammetEnesinal" // profil repo'yu alma
        );
        setRepos(filtered);
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-center text-gray-600 text-lg">Yükleniyor...</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 fade-in">
      {repos.map((repo) => (
        <ProjectCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
}
