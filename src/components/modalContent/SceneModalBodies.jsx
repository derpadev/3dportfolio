import React from "react";

/** Monitor click — career / stack / projects */
export function MonitorModalBody() {
  return (
    <>
      <p className="mt-3 text-sm leading-relaxed text-neutral-300">
        I build web experiences that balance clear UI, performance, and
        maintainable code—from layout and motion to interactive 3D that still
        feels smooth in the browser.
      </p>

      <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-neutral-400">
        Role
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-300">
        Front-end developer focused on React, design-minded UI, and client-side
        architecture.
      </p>

      <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-neutral-400">
        Stack
      </h3>
      <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-neutral-300">
        <li>JavaScript / TypeScript, React, Vite</li>
        <li>Three.js, React Three Fiber, @react-three/drei</li>
        <li>Tailwind CSS, Git</li>
      </ul>

      <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-neutral-400">
        Projects
      </h3>
      <ul className="mt-2 space-y-3 text-sm leading-relaxed text-neutral-300">
        <li>
          <span className="font-medium text-neutral-200">This portfolio</span> —
          3D scene with R3F, orbit controls, and responsive layout.
        </li>
        <li>
          <span className="font-medium text-neutral-200">
            [Your project name]
          </span>{" "}
          — One line: what it does and what you built.
        </li>
      </ul>
    </>
  );
}

/** Coffee mug click — cafes / spots / notes */
export function CoffeeModalBody() {
  return (
    <>
      <p className="mt-3 text-sm leading-relaxed text-neutral-300">
        A few spots I like for coffee, work sessions, or a quiet read—swap these
        for your real picks and links.
      </p>

      <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-neutral-400">
        Favorites
      </h3>
      <ul className="mt-2 space-y-2 text-sm leading-relaxed text-neutral-300">
        <li>
          <span className="font-medium text-neutral-200">[Cafe name]</span> —
          Neighborhood, why you go (espresso, pastries, Wi‑Fi).
        </li>
        <li>
          <span className="font-medium text-neutral-200">[Another]</span> —
          Short note or Google Maps link when you add it.
        </li>
      </ul>

      <h3 className="mt-6 text-sm font-semibold uppercase tracking-wide text-neutral-400">
        Order
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-neutral-300">
        Usual: flat white, oat when available — optional personal touch.
      </p>
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-neutral-900/90 hover:shadow-xl transition-shadow duration-300">
        {/* Image */}
        {/* <img className="w-full h-48 object-cover" src={image} alt={name} /> */}

        {/* Content */}
        <div className="p-4">
          {/* Name */}
          <h2 className="text-xl font-semibold mb-1">Cafe Name</h2>

          {/* Stars */}
          <div className="flex items-center mb-2">
            <span className="ml-2 text-sm text-gray-500">⭐⭐</span> 
          </div>

          {/* Caption */}
          <p className="text-gray-600 text-sm">Caption</p>
        </div>
      </div>
    </>
  );
}

/** Registry: add a key and use `onOpen={() => setActiveModal("key")}` on the matching model. */
export const SCENE_MODALS = {
  monitor: {
    title: "What I do",
    Body: MonitorModalBody,
  },
  coffee: {
    title: "Cafes I like",
    Body: CoffeeModalBody,
  },
};
