export default function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      icon: "💻",
      skills: ["HTML", "CSS", "JavaScript", "React.js"],
    },
    {
      title: "Backend",
      icon: "🛠️",
      skills: ["ASP.NET MVC", "SQL", "PHP"],
    },
    {
      title: "Mobil Geliştirme",
      icon: "📱",
      skills: ["Flutter", "Dart"],
    },
    {
      title: "Programlama Dilleri",
      icon: "⚙️",
      skills: ["C", "C++", "C#", "Java"],
    },
    {
      title: "Yapay Zeka • Veri Madenciliği ",
      icon: "🧠",
      skills: [
        "Python",
        "Machine Learning",
        "Artificial Neural Networks",
        "Data Mining",
      ],
    },
  ];

  return (
    <section id="skills" className="w-full px-6 md:px-20 py-24">
      {/* Title */}
      <h2 className="text-4xl font-bold text-gray-900 text-center">
        Yetenekler
      </h2>
      <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-3 rounded-full"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 justify-items-center">
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className="w-full bg-white/90 backdrop-blur-xl border border-gray-200 shadow-lg rounded-2xl p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 max-w-sm"
          >
            <h3 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
              <span className="text-2xl">{group.icon}</span>
              {group.title}
            </h3>

            <ul className="mt-4 text-gray-700 space-y-1">
              {group.skills.map((skill, i) => (
                <li key={i} className="pl-2 border-l-2 border-blue-500/40">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
