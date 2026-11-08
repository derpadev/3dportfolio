import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdEmail } from "react-icons/md";
import {
  SiGoogleanalytics,
  SiJavascript,
  SiJson,
  SiLeetcode,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
} from "react-icons/si";

const SKILL_ICONS = {
  React: SiReact,
  "Three.js": SiThreedotjs,
  "Tailwind CSS": SiTailwindcss,
  JavaScript: SiJavascript,
  JSON: SiJson,
  "Google Analytics": SiGoogleanalytics,
  Supabase: SiSupabase,
  PostgreSQL: SiPostgresql,
};

const PROFILE_IMAGE_SRC = `${import.meta.env.BASE_URL}profile.png`;

const EXPERIENCE = [
  {
    title: "Software Quality Assurance Intern",
    company: "Toshiba America Business Solutions",
    range: "June 2026 - August 2026",
    description:
      "Worked on e-BRIDGE Global Print, Toshiba’s cloud-based printing platform, focusing on test automation and regression coverage. Built the team’s first Playwright MCP automation framework using the Page Object Model, migrating 15+ Selenium tests and giving the team a maintainable pattern for future tests. Also automated 24 manual regression cases in C# and Selenium, and reproduced and verified 100+ failing cases in Microsoft TFS, which helped raise regression completion by about 3%.",
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
    title: "The Spoon Cafe",
    caption: "A digital storefront for a local dessert cafe",
    description:
      "Built a responsive website to help a local dessert cafe reach more customers and reduce recurring menu printing costs. Created a digital menu featuring 70+ items, allowing for easy updates and price changes without reprinting physical menus.",
    tags: ["React", "Tailwind CSS", "JavaScript", "JSON", "Google Analytics"],
    href: "https://thespoondessert.com",
    preview:
      "/project-previews/thespoon.png",
  },
{
  title: "Learning Management System",
  caption: "A full-stack platform for managing courses and assignments",
  description:
    "Developed a full-stack learning management system in one week for a startup technical evaluation. Built RESTful APIs using Express.js and MongoDB to manage courses, assignments, and user accounts. Implemented JWT authentication and role-based access control to securely separate student and instructor functionality.",
  tags: ["React", "Express.js", "Node.js", "MongoDB", "JWT"],
  href: "https://www.youtube.com/watch?v=OJItwdSyveA",
  preview: "/project-previews/learning_management_system.png",
},
{
  title: "Choodie",
  caption: "A tournament-style game that makes choosing where to eat fun",
  description:
    "Built an interactive restaurant discovery app that helps users overcome decision fatigue through head-to-head restaurant matchups. Integrated the Google Places API to fetch nearby restaurants based on location and search preferences, then implemented a tournament-style elimination system that narrows down choices to a single winner with directions.",
  tags: ["React", "Tailwind CSS", "JavaScript", "Google Places API"],
  href: "https://choodie.vercel.app/", 
  preview: "/project-previews/choodie.png",
},
{
  title: "StudyHub",
  caption: "A community-driven platform for sharing and discussion",
  description:
    "Built a Reddit-inspired social platform where users can create communities, share posts, and engage through likes and threaded comments. Integrated Supabase authentication and PostgreSQL with row-level security to manage user data securely, while delivering a responsive experience with real-time UI updates.",
  tags: ["React", "Tailwind CSS", "Supabase", "JavaScript", "PostgreSQL"],
  href: "https://social-media-website-sage-kappa.vercel.app/",
  preview: "/project-previews/studyhub.png",
},
];

function SectionLabel({ children }) {
  return (
    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F2D49B]">
      {children}
    </h3>
  );
}

function SkillIcons({ tags }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const Icon = SKILL_ICONS[tag];
        return (
          <li key={tag}>
            <span
              title={tag}
              aria-label={tag}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-[#E0F0E9]/20 bg-[#E0F0E9]/10 text-[#E0F0E9] transition-colors hover:border-[#F2D49B]/45 hover:text-[#F2D49B]"
            >
              {Icon ? (
                <Icon className="h-5 w-5" aria-hidden />
              ) : (
                <span className="text-[10px] font-semibold leading-none">
                  {tag.slice(0, 2)}
                </span>
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function ExperienceTimeline() {
  return (
    <section className="space-y-5">
      <SectionLabel>Experience</SectionLabel>
      <div className="relative">
        <div
          className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-[#F2D49B]/60 via-[#E0F0E9]/20 to-transparent sm:left-[9px]"
          aria-hidden
        />
        <ul className="space-y-8">
          {EXPERIENCE.map((job) => (
            <li key={`${job.company}-${job.range}`} className="relative">
              <div
                className="absolute left-0 top-2 h-2.5 w-2.5 rounded-full border-2 border-[#F2D49B] bg-[#123F42] shadow-[0_0_14px_rgba(242,212,155,0.45)] sm:left-[3px] sm:top-1.5 sm:h-3 sm:w-3"
                aria-hidden
              />
              <div className="flex flex-col gap-3 pl-7 sm:flex-row sm:items-start sm:justify-between sm:gap-6 sm:pl-9">
                <div className="min-w-0 flex-1 space-y-1.5">
                  <p className="font-semibold text-[#FFFFFF]">{job.title}</p>
                  <p className="text-sm font-medium text-[#F2D49B]">
                    {job.company}
                  </p>
                  <p className="text-xs text-[#E0F0E9]/70">{job.range}</p>
                  <p className="pt-1 text-sm leading-relaxed text-[#E0F0E9]">
                    {job.description}
                  </p>
                </div>
                <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#E0F0E9]/20 bg-[#E0F0E9]/10 shadow-inner sm:h-16 sm:w-16">
                  {job.logo ? (
                    <img
                      src={job.logo}
                      alt={`${job.company} logo`}
                      className="h-full w-full object-contain p-1.5"
                    />
                  ) : (
                    <span className="text-lg font-bold text-[#E0F0E9]/50">
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
    <section className="flex flex-col items-center gap-5 border-b border-[#E0F0E9]/15 pb-8 text-center sm:flex-row sm:items-start sm:text-left">
      <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-2 border-[#F2D49B]/40 bg-gradient-to-br from-[#F2D49B]/25 via-[#123F42] to-[#0a2a2c] shadow-[0_0_36px_rgba(242,212,155,0.2)]">
        {!photoFailed ? (
          <img
            src={PROFILE_IMAGE_SRC}
            alt="Profile picture of Devin Hua"
            className="h-full w-full object-cover"
            onError={() => setPhotoFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-lg font-semibold tracking-wide text-[#E0F0E9]/70">
            DH
          </div>
        )}
      </div>
      <div className="min-w-0 flex-1 space-y-2">
        <p className="text-lg font-semibold text-[#FFFFFF]">Devin Hua</p>
        <p className="text-sm leading-relaxed text-[#E0F0E9]">
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
            <span className="inline-flex rounded-full border border-[#E0F0E9]/20 bg-[#E0F0E9]/10 px-3 py-1.5 text-sm text-[#E0F0E9]">
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
      <div className="flex flex-wrap items-center gap-3 text-sm text-[#E0F0E9]">
        <p className="font-medium text-[#FFFFFF]">Lets connect!</p>
        {SOCIALS.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("mailto:") ? undefined : "_blank"}
            rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            aria-label={label}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#E0F0E9]/25 bg-[#E0F0E9]/10 text-[#E0F0E9] transition-all hover:border-[#F2D49B]/60 hover:text-[#F2D49B]"
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
        <ul className="space-y-3 text-sm leading-relaxed text-[#E0F0E9]">
          <li>
            <span className="font-medium text-[#FFFFFF]">[Cafe name]</span> —
            Neighborhood, why you go (espresso, pastries, Wi‑Fi).
          </li>
          <li>
            <span className="font-medium text-[#FFFFFF]">[Another]</span> —
            Short note or map link when you add it.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <SectionLabel>Usual order</SectionLabel>
        <p className="text-sm leading-relaxed text-[#E0F0E9]">
          Flat white, oat when available — optional personal touch.
        </p>
      </section>

      <div className="overflow-hidden rounded-2xl border border-[#E0F0E9]/15 bg-[#E0F0E9]/5 shadow-[0_8px_30px_rgba(18,63,66,0.35)] transition-all duration-300 hover:border-[#F2D49B]/40 hover:shadow-[0_0_24px_rgba(242,212,155,0.15)]">
        <div className="h-32 bg-gradient-to-br from-[#F2D49B]/35 via-[#123F42] to-[#0a2a2c]" />
        <div className="p-4">
          <h4 className="font-semibold text-[#FFFFFF]">Featured spot</h4>
          <p className="mt-1 text-xs text-[#E0F0E9]/70">Swap for a real photo</p>
          <p className="mt-2 text-sm text-[#E0F0E9]">
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
          className="overflow-hidden rounded-2xl border border-[#E0F0E9]/15 bg-[#E0F0E9]/5 shadow-[0_12px_36px_rgba(18,63,66,0.4)] transition-all duration-300 hover:border-[#F2D49B]/40 hover:shadow-[0_0_28px_rgba(242,212,155,0.18)]"
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
                <h3 className="text-lg font-semibold text-[#FFFFFF] sm:text-xl">
                  {project.title}
                </h3>
                <p className="text-sm text-[#F2D49B]">{project.caption}</p>
              </div>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#E0F0E9]/25 bg-[#E0F0E9]/10 text-[#E0F0E9] transition-all hover:border-[#F2D49B]/55 hover:text-[#F2D49B]"
              >
                <HiOutlineExternalLink className="h-5 w-5" aria-hidden />
              </a>
            </div>
            <p className="text-sm leading-relaxed text-[#E0F0E9]">
              {project.description}
            </p>
            <SkillIcons tags={project.tags} />
          </div>
        </article>
      ))}
    </div>
  );
}
