import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-gray-50 border-t border-indigo-100 pt-16 pb-10">
      {/* efek background lembut */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-100 via-purple-50 to-transparent pointer-events-none" />

      <div className="container relative mx-auto px-6">
        {/* Bagian atas */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-b border-gray-200 pb-10">
          {/* Info kampus */}
          <div className="text-center md:text-left max-w-md">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Politeknik Baja Tegal
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Kampus vokasi unggulan yang berkomitmen mencetak generasi profesional,
              kreatif, dan inovatif di bidang teknologi dan industri masa depan.
            </p>
          </div>

          {/* Navigasi */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm font-medium">
            <a
              href="#Tentang"
              className="text-gray-700 hover:text-indigo-600 hover:scale-105 transition-all"
            >
              Tentang
            </a>
            <a
              href="#Prospek Kerja"
              className="text-gray-700 hover:text-indigo-600 hover:scale-105 transition-all"
            >
              Prospek Kerja
            </a>
            <a
              href="#Alumni"
              className="text-gray-700 hover:text-indigo-600 hover:scale-105 transition-all"
            >
              Alumni
            </a>
            <a
              href="#Hubungi Kami"
              className="text-gray-700 hover:text-indigo-600 hover:scale-105 transition-all"
            >
              Kontak
            </a>
          </div>
        </div>

        {/* Bagian bawah */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2025{" "}
            <span className="font-semibold text-indigo-600">
              Politeknik Baja Tegal
            </span>
            . All rights reserved. | Crafted with 💙 by{" "}
            <span className="font-medium text-purple-600">pinkybites</span>
          </p>

          {/* Ikon sosial */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white shadow-sm hover:shadow-md border border-gray-200 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white shadow-sm hover:shadow-md border border-gray-200 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white shadow-sm hover:shadow-md border border-gray-200 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
