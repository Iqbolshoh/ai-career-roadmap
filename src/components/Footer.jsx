import { Github, Linkedin, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">

      <div className="mx-auto max-w-7xl px-6 py-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* ABOUT */}
          <div>
            <h2 className="text-xl font-bold text-white">
              AI Career Roadmap
            </h2>

            <p className="mt-4 text-sm text-slate-400">
              Build your tech career step by step with structured learning
              paths, AI guidance and progress tracking.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2 text-sm">
              <li className="hover:text-cyan-400 cursor-pointer">Home</li>
              <li className="hover:text-cyan-400 cursor-pointer">Roadmap</li>
              <li className="hover:text-cyan-400 cursor-pointer">Profile</li>
              <li className="hover:text-cyan-400 cursor-pointer">Projects</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Connect
            </h3>

            <div className="mt-4 flex gap-4">

              <a href="#" className="hover:text-cyan-400">
                <Github />
              </a>

              <a href="#" className="hover:text-cyan-400">
                <Linkedin />
              </a>

              <a href="#" className="hover:text-cyan-400">
                <Mail />
              </a>

              <a href="#" className="hover:text-cyan-400">
                <Globe />
              </a>

            </div>

            <p className="mt-4 text-sm text-slate-400">
              Email: developer@example.com
            </p>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} AI Career Roadmap. All rights reserved.
        </div>

      </div>

    </footer>
  );
}