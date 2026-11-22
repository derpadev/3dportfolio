import {
  EducationSection,
  ExperienceTimeline,
  InterestsSection,
  ProfileCard,
  ProjectsList,
  SectionLabel,
  SocialsSection,
} from "../components/modalContent/portfolioSections";

const Portfolio = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0a2a2c] via-[#123F42] to-[#0f3336]">
      <div className="max-container space-y-16 text-[#E0F0E9]">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F2D49B]">
            Portfolio
          </p>
          <h1 className="head-text text-[#FFFFFF]">Devin Hua</h1>
          <p className="max-w-2xl text-sm leading-relaxed text-[#E0F0E9]/85 sm:text-base">
            Computer Engineering student and builder — a scrollable overview of
            my background, experience, education, and projects.
          </p>
        </header>

        <div className="space-y-10">
          <ProfileCard />
          <InterestsSection />
          <SocialsSection />
        </div>

        <ExperienceTimeline />

        <EducationSection />

        <section className="space-y-5">
          <SectionLabel>Projects</SectionLabel>
          <ProjectsList />
        </section>
      </div>
    </section>
  );
};

export default Portfolio;
