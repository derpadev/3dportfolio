import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

const PROFILE_IMAGE_SRC = `${import.meta.env.BASE_URL}profile.png`;

const EXPERIENCE = [
  {
    title: "Software Quality Assurance Intern",
    company: "Toshiba",
    range: "June 2026 - August 2026",
    description:
      "Incoming Intern at Toshiba. I will be working on the Quality Assurance team to help test and improve the quality of the software.",
    logo: "/company-logos/toshiba_logo.jfif",
  },
  {
    title: "Cyber Security Intern",
    company: "Bay Area Rapid Transit (BART)",
    range: "June 2024 - August 2024",
    description:
      "Cybersecurity intern supporting BART’s enterprise environment: automated alert-handling workflows with Python/Tines/Elastic, performed vulnerability assessments, and built Ansible-based patching automation to improve security coverage, consistency, and response speed across large-scale systems.",
    logo: "/company-logos/bart_logo.jfif",
  },
];

const INTERESTS = [
  "Web Development",
  "Cafe Hopping",
  "Dancing",
  "Gaming",
  "Horror Movies",
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/derpadev", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/devinhua", icon: FaLinkedin },
  { label: "LeetCode", href: "https://leetcode.com/u/devinhua004/", icon: SiLeetcode },
  { label: "Email", href: "mailto:devinhua004@gmail.com", icon: MdEmail },
];

const PROJECTS = [
  {
    title: "Portfolio Website",
    caption: "This 3D portfolio!",
    description:
      "A React and Three.js portfolio with interactive scene objects that open context-rich modals for experience, about, and projects.",
    tags: ["React", "Three.js", "Tailwind CSS"],
    href: "https://github.com/derpadev",
    preview:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "The Spoon Cafe",
    caption: "React + Tailwind website for a local dessert cafe",
    description:
      "Designed, built, and now maintain a responsive dessert cafe website that showcases 70+ menu items and improves local online visibility. I integrated Google Analytics to track behavior across 600+ monthly users, then used those insights to drive iterative UI and accessibility improvements that increased engagement. I also structured menu content with JSON to make recurring updates like new items and pricing changes fast, consistent, and local.",
    tags: ["React", "Tailwind CSS", "JavaScript", "JSON", "Google Analytics"],
    href: "https://thespoondessert.com",
    preview:
      "/project-previews/thespoon.png",
  },
  {
    title: "StudyHub",
    caption: "Reddit-clone social platform with realtime interactions",
    description:
      "Built a Reddit-style social app where users create posts, join communities, and interact through likes and threaded comments with realtime UI updates. Integrated Supabase Auth and backend services for secure authentication, session handling, and scalable storage, enforced row-level security policies for role-based data protection, and designed Postgres schemas for profiles, posts, comments, and communities.",
    tags: ["React", "Tailwind CSS", "Supabase", "JavaScript", "PostgreSQL"],
    href: "https://social-media-website-sage-kappa.vercel.app/",
    preview:
      "/project-previews/studyhub.png",
  },
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
                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-inner sm:h-16 sm:w-16">
                  {job.logo ? (
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="h-full w-full object-contain p-1.5"
                    />
                  ) : (
                    <span className="text-lg font-bold text-white/40">
                      {job.company.charAt(0)}
                    </span>
                  )}
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
            src={PROFILE_IMAGE_SRC}
            alt="Profile picture of Devin Hua"
            className="h-full w-full object-cover"
            onError={() => setPhotoFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-lg font-semibold tracking-wide text-white/55">
            DH
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1 space-y-2">
        <p className="text-lg font-semibold text-white">Devin Hua</p>
        <p className="text-sm leading-relaxed text-slate-400">
          Computer Engineering student focused on becoming software engineer. I enjoy building web applications using modern technologies and frameworks with a strong engineering fundamentals. I'm especially motivated by building software that has meaninful impact in education and social good.
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
      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
        <p className="font-medium text-slate-200">Lets connect!</p>
        {SOCIALS.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            aria-label={label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition-all hover:border-indigo-400/50 hover:text-indigo-300"
          >
            <Icon className="h-5 w-5" aria-hidden />
          </a>
        ))}
      </div>
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

/** Chest - stacked project cards */
export function ChestModalBody() {
  return (
    <div className="space-y-6 pb-2">
      {PROJECTS.map((project) => (
        <article
          key={project.title}
          className="overflow-hidden rounded-2xl border border-white/[0.1] bg-white/[0.04] shadow-[0_12px_36px_rgba(0,0,0,0.28)] transition-all duration-300 hover:border-indigo-400/35 hover:shadow-[0_0_28px_rgba(129,140,248,0.2)]"
        >
          <img
            src={project.preview}
            alt={`${project.title} preview`}
            className="h-56 w-full object-cover sm:h-64"
            loading="lazy"
          />
          <div className="space-y-4 p-5 sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  {project.title}
                </h3>
                <p className="text-sm text-indigo-300">{project.caption}</p>
              </div>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-300 transition-all hover:border-indigo-400/55 hover:text-indigo-200"
              >
                <HiOutlineExternalLink className="h-5 w-5" aria-hidden />
              </a>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li key={tag}>
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-slate-300">
                    {tag}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
