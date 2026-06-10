import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Trophy,
  Target,
  Shield,
  Smartphone,
  Palette,
  Code2,
} from "lucide-react";

export default function Home() {
  const careers = [
    {
      title: "Frontend Developer",
      icon: <Code2 size={32} />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Backend Developer",
      icon: <Brain size={32} />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Full Stack Developer",
      icon: <BookOpen size={32} />,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "UI/UX Designer",
      icon: <Palette size={32} />,
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Mobile Developer",
      icon: <Smartphone size={32} />,
      color: "from-indigo-500 to-violet-500",
    },
    {
      title: "Cyber Security",
      icon: <Shield size={32} />,
      color: "from-red-500 to-rose-500",
    },
  ];

  return (
    <div className="bg-slate-950 text-white">

      {/* HERO */}
      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-green-500/10 to-purple-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-32">

          <div className="text-center">

            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm text-cyan-400">
              🚀 AI Powered Learning Roadmaps
            </span>

            <h1 className="mt-8 text-6xl font-black md:text-8xl">
              Build Your
              <span className="block bg-gradient-to-r from-cyan-400 via-green-400 to-blue-500 bg-clip-text text-transparent">
                Dream Career
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-400">
              Discover personalized roadmaps, track progress,
              unlock achievements and become job-ready faster.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 md:flex-row">

              <Link
                to="/roadmap"
                className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:scale-105"
              >
                Explore Roadmaps
              </Link>

              <Link
                to="/profile"
                className="rounded-xl border border-slate-700 px-8 py-4 font-semibold hover:bg-slate-900"
              >
                View Profile
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 pb-20">

        <div className="grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-4xl font-bold text-cyan-400">50+</h2>
            <p className="mt-2 text-slate-400">Skills Covered</p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-4xl font-bold text-green-400">6</h2>
            <p className="mt-2 text-slate-400">Career Paths</p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-4xl font-bold text-purple-400">20+</h2>
            <p className="mt-2 text-slate-400">Projects</p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-4xl font-bold text-orange-400">100%</h2>
            <p className="mt-2 text-slate-400">Free Learning</p>
          </div>

        </div>

      </section>

      {/* CAREER PATHS */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Choose Your Career Path
          </h2>

          <p className="mt-4 text-slate-400">
            Select your dream profession and follow the roadmap.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {careers.map((career) => (
            <div
              key={career.title}
              className="group rounded-3xl border border-slate-800 bg-slate-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500"
            >
              <div
                className={`inline-flex rounded-2xl bg-gradient-to-r ${career.color} p-4`}
              >
                {career.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {career.title}
              </h3>

              <p className="mt-4 text-slate-400">
                Complete roadmap, projects and career guidance.
              </p>

              <button className="mt-6 flex items-center gap-2 text-cyan-400">
                Explore <ArrowRight size={18} />
              </button>
            </div>
          ))}

        </div>

      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="text-center">
          <h2 className="text-5xl font-bold">
            Why Choose Us
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <Brain className="text-cyan-400" size={40} />
            <h3 className="mt-4 text-2xl font-bold">
              AI Recommendations
            </h3>
            <p className="mt-3 text-slate-400">
              Smart suggestions based on your career goals.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <Target className="text-green-400" size={40} />
            <h3 className="mt-4 text-2xl font-bold">
              Structured Roadmaps
            </h3>
            <p className="mt-3 text-slate-400">
              Learn in the correct order without confusion.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <Trophy className="text-yellow-400" size={40} />
            <h3 className="mt-4 text-2xl font-bold">
              Achievement System
            </h3>
            <p className="mt-3 text-slate-400">
              Unlock milestones as you learn and improve.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="rounded-[40px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-green-500/10 p-16 text-center">

          <h2 className="text-5xl font-bold">
            Start Your Journey Today
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Join thousands of learners building their future careers.
          </p>

          <Link
            to="/roadmap"
            className="mt-8 inline-block rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black"
          >
            Get Started
          </Link>

        </div>

      </section>

    </div>
  );
}