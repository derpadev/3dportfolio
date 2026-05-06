import React, { useState } from "react";

const ExternalLinkIcon = ({ className = "h-4 w-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </svg>
);

const EXPERIENCE = [
  {
    title: "Front-End Developer",
    company: "Your Company",
    range: "2023 — Present",
    description:
      "Ship responsive product UI in React, own component patterns, and collaborate on design systems while keeping bundles lean and animations smooth.",
    accent: "from-indigo-500/30 to-violet-600/20",
  },
  {
    title: "UI Engineer (Contract)",
    company: "Studio / Agency",
    range: "2021 — 2023",
    description:
      "Built marketing sites and interactive demos with a focus on accessibility, performance budgets, and handoff from Figma to production code.",
    accent: "from-sky-500/25 to-indigo-600/20",
  },
];

const INTERESTS = [
  "Interactive 3D on the web",
  "Design systems",
  "Coffee & reading",
  "Photography",
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter / X", href: "https://twitter.com" },
];

function SectionLabel({ children }) {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
      {children}
    </h3>
  );
}

function ExperienceTimeline() {
  return (
    <section className="space-y-5">
      <SectionLabel>Experience</SectionLabel>
      <div className="relative">
        <div
          className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-indigo-400/45 via-white/15 to-transparent sm:left-[9px]"
          aria-hidden
        />
        <ul className="space-y-8">
          {EXPERIENCE.map((job) => (
            <li key={`${job.company}-${job.range}`} className="relative">
              <div
                className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full border-2 border-indigo-300/90 bg-[#0c1222] shadow-[0_0_14px_rgba(165,180,252,0.55)] sm:left-[3px] sm:top-1.5 sm:h-3 sm:w-3"
                aria-hidden
              />
              <div className="flex flex-col gap-3 pl-7 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:pl-9">
                <div className="min-w-0 flex-1 space-y-1.5">
                  <p className="font-semibold text-white">{job.title}</p>
                  <p className="text-sm font-medium text-indigo-300/95">
                    {job.company}
                  </p>
                  <p className="text-xs text-slate-500">{job.range}</p>
                  <p className="pt-1 text-sm leading-relaxed text-slate-400">
                    {job.description}
                  </p>
                </div>
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br ${job.accent} shadow-inner sm:h-16 sm:w-16`}
                  aria-hidden
                >
                  <span className="text-lg font-bold text-white/40">
                    {job.company.charAt(0)}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ProfileCard() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section className="flex flex-col items-center gap-5 border-b border-white/[0.08] pb-8 text-center sm:flex-row sm:items-start sm:text-left">
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-white/15 bg-gradient-to-br from-indigo-500/35 via-slate-800 to-violet-700/40 shadow-[0_0_36px_rgba(99,102,241,0.22)]">
        {!photoFailed ? (
          <img
            src="/profile.jpg"
            alt=""
            className="h-full w-full object-cover"
            onError={() => setPhotoFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-lg font-semibold tracking-wide text-white/55">
            You
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1 space-y-2">
        <p className="text-lg font-semibold text-white">Your name</p>
        <p className="text-sm leading-relaxed text-slate-400">
          Short introduction — who you are, what you build, and what you care
          about. Swap this copy and drop{" "}
          <span className="font-medium text-slate-300">profile.jpg</span> into
          the{" "}
          <span className="font-medium text-slate-300">public</span> folder for
          your photo.
        </p>
      </div>
    </section>
  );
}

function InterestsSection() {
  return (
    <section className="space-y-4">
      <SectionLabel>Interests</SectionLabel>
      <ul className="flex flex-wrap gap-2">
        {INTERESTS.map((item) => (
          <li key={item}>
            <span className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-sm text-slate-300">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function SocialsSection() {
  return (
    <section className="space-y-4">
      <SectionLabel>Socials</SectionLabel>
      <ul className="space-y-2">
        {SOCIALS.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-3 rounded-xl border border-white/[0.1] bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-200 transition-all hover:border-indigo-400/35 hover:bg-white/[0.07]"
            >
              <span>{label}</span>
              <ExternalLinkIcon className="h-4 w-4 text-slate-500 transition-colors group-hover:text-indigo-300" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** Book — professional experience timeline */
export function BookModalBody() {
  return (
    <div className="space-y-8 pb-2">
      <ExperienceTimeline />
    </div>
  );
}

/** Monitor — about me: photo, interests, social links */
export function MonitorModalBody() {
  return (
    <div className="space-y-10 pb-2">
      <ProfileCard />
      <InterestsSection />
      <SocialsSection />
    </div>
  );
}

/** Coffee mug — same visual language, simpler content */
export function CoffeeModalBody() {
  return (
    <div className="space-y-8 pb-2">
      <section className="space-y-3">
        <SectionLabel>Favorites</SectionLabel>
        <ul className="space-y-3 text-sm leading-relaxed text-slate-400">
          <li>
            <span className="font-medium text-slate-200">[Cafe name]</span> —
            Neighborhood, why you go (espresso, pastries, Wi‑Fi).
          </li>
          <li>
            <span className="font-medium text-slate-200">[Another]</span> —
            Short note or map link when you add it.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <SectionLabel>Usual order</SectionLabel>
        <p className="text-sm leading-relaxed text-slate-400">
          Flat white, oat when available — optional personal touch.
        </p>
      </section>

      <div className="overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.04] shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-amber-400/25 hover:shadow-[0_0_24px_rgba(251,191,36,0.08)]">
        <div className="h-32 bg-gradient-to-br from-amber-900/40 via-slate-800 to-slate-900" />
        <div className="p-4">
          <h4 className="font-semibold text-white">Featured spot</h4>
          <p className="mt-1 text-xs text-slate-500">Swap for a real photo</p>
          <p className="mt-2 text-sm text-slate-400">
            Caption or why this place is on the list.
          </p>
        </div>
      </div>
    </div>
  );
}
