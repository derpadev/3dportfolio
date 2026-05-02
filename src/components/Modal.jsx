import React, { useEffect } from "react";

/**
 * Full-screen overlay dialog: backdrop click + Escape close.
 * Add new scene-specific bodies via `SceneModalBodies` + `SCENE_MODALS` registry.
 */
const Modal = ({
  open,
  onClose,
  title,
  titleId = "app-modal-title",
  children,
}) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="h-[80vh] w-full max-w-7xl overflow-y-auto rounded-xl border border-neutral-700 bg-neutral-900 p-6 text-neutral-100 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="relative h-full w-full rounded-xl border border-neutral-600 p-6">
          <button
            type="button"
            aria-label="Close modal"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white shadow-md transition-colors hover:bg-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden
              className="h-5 w-5"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
          <h2 id={titleId} className="pr-14 text-xl font-semibold leading-snug">
            {title}
          </h2>
          <div className="mt-3">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
