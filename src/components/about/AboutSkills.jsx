const techSkills = [
  { name: "HTML", icon: "📘" },
  { name: "CSS", icon: "🎨" },
  { name: "JavaScript", icon: "🟨" },
  { name: "React.js", icon: "⚛️" },
  { name: "ASP.NET MVC", icon: "🧩" },
  { name: "PHP", icon: "🐘" },
  { name: "Flutter", icon: "📱" },
  { name: "Dart", icon: "🎯" },
  { name: "Python", icon: "🐍" },
  { name: "Artificial Intelligence", icon: "🧠" },
  { name: "Data Mining", icon: "⛏️" },
  { name: "SQL", icon: "🗄️" },
  { name: "Java", icon: "☕" },
  { name: "C++", icon: "💠" },
  { name: "C", icon: "🔹" },
];

export default function AboutSkills() {
  return (
    <div className="space-y-4 fade-in">
      <p className="text-gray-700 leading-relaxed">
        Yazılım geliştirme sürecinin hem front-end hem back-end tarafında aktif
        rol alıyorum. Ayrıca derin öğrenme, makine öğrenimi ve veri madenciliği
        üzerine teknik bilgi birikimine sahibim.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {techSkills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-3 bg-gray-100 py-2 px-3 rounded-xl 
                       shadow hover:shadow-lg transition cursor-default"
          >
            <span className="text-2xl">{skill.icon}</span>
            <span className="font-medium text-gray-800">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
