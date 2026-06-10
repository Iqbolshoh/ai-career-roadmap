import {
  Trophy,
  Target,
  Flame,
  Calendar,
  CheckCircle2,
  User,
} from "lucide-react";

export default function Profile() {
  const stats = [
    { label: "Level", value: 3, icon: <Trophy /> },
    { label: "XP", value: "680 XP", icon: <Flame /> },
    { label: "Completed Skills", value: 24, icon: <CheckCircle2 /> },
    { label: "Weekly Goals", value: "4/7", icon: <Target /> },
  ];

  const achievements = [
    "HTML Master",
    "CSS Expert",
    "JavaScript Warrior",
    "React Learner",
  ];

  const activity = [
    "Completed React Hooks lesson",
    "Finished CSS Grid practice",
    "Built Todo App",
    "Solved JavaScript challenges",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* HEADER */}

      <section className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16">

          <div className="flex flex-col items-center gap-6 md:flex-row">

            {/* AVATAR */}

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-green-500 text-3xl font-bold">
              A
            </div>

            <div>
              <h1 className="text-4xl font-black">
                AI Developer
              </h1>

              <p className="text-slate-400">
                Frontend Developer Roadmap Progress Dashboard
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* STATS */}

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-6 md:grid-cols-4">

          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="text-cyan-400">
                {item.icon}
              </div>

              <h2 className="mt-3 text-3xl font-bold">
                {item.value}
              </h2>

              <p className="text-slate-400">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* PROGRESS BAR */}

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

          <h2 className="mb-4 text-2xl font-bold">
            Overall Progress
          </h2>

          <div className="h-4 w-full rounded-full bg-slate-800">
            <div className="h-4 w-[68%] rounded-full bg-gradient-to-r from-cyan-500 to-green-500"></div>
          </div>

          <p className="mt-3 text-slate-400">
            You are 68% ready to become a Frontend Developer
          </p>

        </div>

      </section>

      {/* ACHIEVEMENTS */}

      <section className="mx-auto max-w-7xl px-6 py-10">

        <h2 className="mb-6 text-3xl font-bold">
          Achievements
        </h2>

        <div className="grid gap-4 md:grid-cols-4">

          {achievements.map((a) => (
            <div
              key={a}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-4 text-center"
            >
              <Trophy className="mx-auto text-yellow-400" />
              <p className="mt-2">{a}</p>
            </div>
          ))}

        </div>

      </section>

      {/* ACTIVITY */}

      <section className="mx-auto max-w-7xl px-6 py-10 pb-20">

        <h2 className="mb-6 text-3xl font-bold">
          Recent Activity
        </h2>

        <div className="space-y-4">

          {activity.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 p-4"
            >
              <CheckCircle2 className="text-green-400" />
              <p>{item}</p>
            </div>
          ))}

        </div>

      </section>

    </div>
  );
}