import {
  EducationSection,
  ExperienceTimeline,
  InterestsSection,
  ProfileCard,
  ProjectsList,
  SectionLabel,
  SocialsSection,
} from "./portfolioSections";

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

/** Anteater — education / school */
export function AnteaterModalBody() {
  return (
    <div className="space-y-8 pb-2">
      <EducationSection />
    </div>
  );
}

/** Chest - stacked project cards */
export function ChestModalBody() {
  return (
    <div className="space-y-6 pb-2">
      <ProjectsList />
    </div>
  );
}
