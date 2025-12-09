export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 mt-10 border-t border-gray-700">
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm font-medium">
            © {new Date().getFullYear()} Muhammet Enes İnal
          </p>

          <p className="text-xs text-gray-400">
            Computer Engineer • Full-Stack Developer
          </p>

          <p className="text-xs text-gray-500">
            Yapay zeka, modern web teknolojileri ve mobil uygulamalar üzerine
            projeler geliştiriyorum.
          </p>
        </div>

        <div className="flex gap-6 text-sm items-center">
          <a
            href="https://github.com/MuhammetEnesinal"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/enes-inal/"
            target="_blank"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a href="/contact" className="hover:text-white transition">
            İletişim
          </a>
        </div>
      </div>
    </footer>
  );
}
