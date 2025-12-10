import { useEffect, useState } from "react";

export default function Hero() {
  const fullCode = [
    "const developer = {",
    '   name: "Muhammet Enes İnal",',
    '   role: "Computer Engineer | Software Developer",',
    '   skills: ["HTML", "CSS", "JavaScript", "React", "ASP.NET MVC", "SQL", "Flutter", "Dart", "Python", "AI", "Deep Learning", "C", "C++", "C#", "Java"]',
    "};",
    "",
    "function introduce() {",
    '   console.log("Building modern web, mobile and AI-supported applications...");',
    "}",
  ];

  const [codeLines, setCodeLines] = useState([]);

  useEffect(() => {
    let isCancelled = false; // StrictMode double-run fix
    let index = 0;

    const interval = setInterval(() => {
      if (!isCancelled && index < fullCode.length) {
        setCodeLines((prev) => [...prev, fullCode[index]]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 200);

    return () => {
      isCancelled = true;
      clearInterval(interval);
    };
  }, []);

  return (
    <section
      id="hero"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-28 md:pt-32"
    >
      {/* LEFT SIDE */}
      <div className="max-w-2xl space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Merhaba, ben <span className="text-blue-600">Muhammet Enes İnal</span>{" "}
          👨‍💻
        </h1>

        <p className="text-xl md:text-2xl text-gray-700">
          Computer Engineer | Software Developer
        </p>

        <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
          Bilgisayar Mühendisliği öğrencisi olarak modern web teknolojileri,
          mobil uygulama geliştirme ve yapay zeka alanlarında projeler
          geliştiriyorum. Veri yapıları, algoritmalar ve yapay zeka üzerine
          yoğunlaşıyorum.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl shadow-lg transition-all hover:-translate-y-1"
          >
            Projelerimi Gör
          </a>

          <a
            href="/about"
            className="bg-gray-900 hover:bg-gray-800 text-white px-7 py-3 rounded-xl shadow-md transition-all hover:-translate-y-1"
          >
            Hakkımda
          </a>

          <a
            href="/contact"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-7 py-3 rounded-xl shadow-md transition-all hover:-translate-y-1"
          >
            İletişime Geç
          </a>

          <a
            href="/MuhammetEnesInalCV.pdf"
            download
            className="bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-xl shadow-md transition-all hover:-translate-y-1"
          >
            📄 CV İndir
          </a>
        </div>
      </div>

      {/* RIGHT SIDE – TERMINAL */}
      <div className="w-full md:w-[48%] mt-12 md:mt-0">
        <div className="bg-[#0d1117] text-green-400 rounded-2xl p-6 shadow-xl border border-gray-800">
          {/* Terminal Lights */}
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>

          {/* Animated Code */}
          <div className="font-mono text-[15px] whitespace-pre-line leading-7">
            {codeLines.map((line, i) => (
              <div key={i} className="animate-fadeIn">
                {line}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
