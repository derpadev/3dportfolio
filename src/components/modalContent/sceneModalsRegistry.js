import {
  BookModalBody,
  CoffeeModalBody,
  MonitorModalBody,
} from "./SceneModalBodies";

/** Keys match `setActiveModal("key")` on scene models. */
export const SCENE_MODALS = {
  monitor: {
    title: "About me",
    subtitle:
      "Who I am, what I enjoy, and where to find me online — personalize photo, copy, interests, and links.",
    Body: MonitorModalBody,
  },
  book: {
    title: "My Experience",
    subtitle:
      "Aspiring software engineer with a passion for building web applications and software solutions.",
    Body: BookModalBody,
  },
  coffee: {
    title: "Cafes I like",
    subtitle:
      "Spots for coffee, focus, or a quiet read — personalize with your favorites.",
    Body: CoffeeModalBody,
  },
};
