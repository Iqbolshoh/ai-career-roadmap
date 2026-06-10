import {
  CheckCircle2,
  Trophy,
  Target,
  BookOpen,
  Code2,
  Rocket,
} from "lucide-react";

export default function Roadmap() {
  const roadmap = [
    {
      level: "Level 1",
      title: "Frontend Fundamentals",
      progress: "25%",
      skills: [
        "HTML5",
        "CSS3",
        "Git",
        "GitHub",
        "Responsive Design",
      ],
    },
    {
      level: "Level 2",
      title: "JavaScript",
      progress: "50%",
      skills: [
        "JavaScript ES6+",
        "DOM",
        "Events",
        "Fetch API",
        "Local Storage",
      ],
    },
    {
      level: "Level 3",
      title: "React Ecosystem",
      progress: "75%",
      skills: [
        "React",
        "Hooks",
        "React Router",
        "Context API",
      ],
    },
    {
      level: "Level 4",
      title: "Advanced Frontend",
      progress: "90%",
      skills: [
        "TypeScript",
        "Next.js",
        "Testing",
        "Performance",
      ],
    },
    {
      level: "Level 5",
      title: "Career Ready",
      progress: "100%",
      skills: [
        "Portfolio",
        "CV",
        "Freelancing",
        "Interview",
      ],
    },
  ];

  const projects = [
    "Personal Portfolio",
    "Todo App",
    "Weather Dashboard",
    "E-Commerce UI",
    "Admin Dashboard",
    "AI Career Roadmap",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}

      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16">

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400">
            Frontend Developer Path
          </span>

          <h1 className="mt-6 text-5xl font-black">
            Frontend Roadmap
          </h1>

          <p className="mt-4 max-w-2xl text-slate-400">
            Follow a structured learning path from beginner
            to professional frontend developer.
          </p>

        </div>
      </section>

      {/* STATS */}

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <Target className="text-cyan-400" />
            <h2 className="mt-3 text-3xl font-bold">
              68%
            </h2>
            <p className="text-slate-400">
              Progress
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <BookOpen className="text-green-400" />
            <h2 className="mt-3 text-3xl font-bold">
              24
            </h2>
            <p className="text-slate-400">
              Skills
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <Code2 className="text-purple-400" />
            <h2 className="mt-3 text-3xl font-bold">
              12
            </h2>
            <p className="text-slate-400">
              Projects
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <Trophy className="text-yellow-400" />
            <h2 className="mt-3 text-3xl font-bold">
              5
            </h2>
            <p className="text-slate-400">
              Achievements
            </p>
          </div>

        </div>

      </section>

      {/* ROADMAP */}

      <section className="mx-auto max-w-7xl px-6 py-10">

        <h2 className="mb-8 text-4xl font-bold">
          Learning Path
        </h2>

        <div className="space-y-8">

          {roadmap.map((item) => (
            <div
              key={item.level}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >

              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                <div>
                  <span className="text-cyan-400">
                    {item.level}
                  </span>

                  <h3 className="mt-2 text-3xl font-bold">
                    {item.title}
                  </h3>
                </div>

                <div className="rounded-xl bg-cyan-500/10 px-4 py-2 text-cyan-400">
                  {item.progress}
                </div>

              </div>

              <div className="mt-6 flex flex-wrap gap-3">

                {item.skills.map((skill) => (
                  <div
                    key={skill}
                    className="rounded-xl border border-slate-700 px-4 py-2"
                  >
                    {skill}
                  </div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* PROJECTS */}

      <section className="mx-auto max-w-7xl px-6 py-10">

        <h2 className="mb-8 text-4xl font-bold">
          Recommended Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-500"
            >
              <Rocket className="text-cyan-400" />

              <h3 className="mt-4 text-xl font-bold">
                {project}
              </h3>

              <p className="mt-2 text-slate-400">
                Practice your skills by building this project.
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* ACHIEVEMENTS */}

      <section className="mx-auto max-w-7xl px-6 py-10 pb-20">

        <h2 className="mb-8 text-4xl font-bold">
          Achievements
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6">
            <CheckCircle2 className="text-yellow-400" />
            <h3 className="mt-4 text-xl font-bold">
              HTML Master
            </h3>
          </div>

          <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-6">
            <CheckCircle2 className="text-green-400" />
            <h3 className="mt-4 text-xl font-bold">
              CSS Expert
            </h3>
          </div>

          <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-6">
            <CheckCircle2 className="text-cyan-400" />
            <h3 className="mt-4 text-xl font-bold">
              JavaScript Warrior
            </h3>
          </div>

        </div>

      </section>

    </div>
  );
}