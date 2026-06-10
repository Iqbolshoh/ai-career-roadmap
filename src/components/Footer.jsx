export default function Footer() {
  const year = new Date().getFullYear();

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
              Structured learning paths, progress tracking and career guidance
              for becoming a professional developer.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-4 space-y-2 text-sm">
              <li className="cursor-pointer hover:text-cyan-400">Home</li>
              <li className="cursor-pointer hover:text-cyan-400">Roadmap</li>
              <li className="cursor-pointer hover:text-cyan-400">Profile</li>
              <li className="cursor-pointer hover:text-cyan-400">Projects</li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Connect
            </h3>

            <div className="mt-4 flex gap-4">

              {/* GitHub */}
              <a href="#" className="hover:text-cyan-400">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .5C5.7.5.6 5.6.6 11.9c0 5 3.2 9.2 7.7 10.7.6.1.8-.3.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.8 2.2 3.4 1.5.1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.2-5.2-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 .1.9-.2 1.9-.3 2.9-.3s2 .1 2.9.3c2.1-.4 3-.1 3-.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.3-2.7 5.2-5.3 5.5.4.4.8 1 .8 2v3c0 .3.2.7.8.6 4.5-1.5 7.7-5.7 7.7-10.7C23.4 5.6 18.3.5 12 .5z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="hover:text-cyan-400">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.64 0 4.31 2.4 4.31 5.51v6.23zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.57V9h3.54v11.45zM22.22 0H1.78C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.78 24h20.44C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>

              {/* Mail */}
              <a href="#" className="hover:text-cyan-400">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>

            </div>

            <p className="mt-4 text-sm text-slate-400">
              developer@example.com
            </p>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {year} AI Career Roadmap. All rights reserved.
        </div>

      </div>

    </footer>
  );
}