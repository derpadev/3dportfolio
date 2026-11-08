import {
  BookModalBody,
  ChestModalBody,
  CoffeeModalBody,
  MonitorModalBody,
} from "./SceneModalBodies";

/** Keys match `setActiveModal("key")` on scene models. */
export const SCENE_MODALS = {
  monitor: {
    title: "About Me",
    subtitle:
      "I'm a developer, mentor, and builder.   ",
    Body: MonitorModalBody,
  },
  book: {
    title: "My Experience",
    subtitle:
      "Real-world experience in software development, automation, and problem solving.",
    Body: BookModalBody,
  },
  coffee: {
    title: "Cafes I like",
    subtitle:
      "Spots for coffee, focus, or a quiet read — personalize with your favorites.",
    Body: CoffeeModalBody,
  },
  chest: {
    title: "My Projects",
    subtitle:
      "A collection of projects I've designed, built, and shipped.",
    Body: ChestModalBody,
  },
};
