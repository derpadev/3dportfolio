import { useEffect, useState } from "react";

const STORAGE_KEY = "scene-tip-dismissed";

/**
 * Friendly one-time tip shown when visiting the 3D scene.
 */
const SceneTipPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") return;
    } catch {
      // Ignore storage errors and still show the tip.
    }
    setOpen(true);
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignore storage errors.
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="scene-modal-backdrop fixed inset-0 z-40 flex items-end justify-center p-4 sm:items-center sm:p-6"
      onClick={dismiss}
      role="presentation"
    >
      <div
        className="absolute inset-0 bg-[#123F42]/45 backdrop-blur-[2px]"
        aria-hidden
      />
      <div
        className="scene-modal-panel relative w-full max-w-sm rounded-2xl border border-[#E0F0E9]/20 bg-[#123F42]/95 p-5 text-[#FFFFFF] shadow-[0_20px_50px_-12px_rgba(18,63,66,0.7)] backdrop-blur-xl sm:p-6"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="scene-tip-title"
        aria-describedby="scene-tip-body"
        style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
      >
        <p
          id="scene-tip-title"
          className="text-sm font-semibold tracking-tight text-[#F2D49B]"
        >
          Quick tip for the best experience
        </p>
        <p
          id="scene-tip-body"
          className="mt-2 text-sm leading-relaxed text-[#E0F0E9]"
        >
          This scene looks and runs best on a larger screen. If things feel
          choppy, turn on graphics acceleration in Chrome (
          <span className="text-[#FFFFFF]">
            Settings → System → Use graphics acceleration when available
          </span>
          ).
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="mt-4 w-full rounded-xl border border-[#E0F0E9]/25 bg-[#E0F0E9]/10 px-4 py-2.5 text-sm font-medium text-[#FFFFFF] transition-all hover:border-[#F2D49B]/55 hover:bg-[#F2D49B]/15 hover:text-[#F2D49B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2D49B]/70"
        >
          Got it
        </button>
      </div>
    </div>
  );
};

export default SceneTipPopup;
