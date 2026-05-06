import React, { useEffect } from "react";

/**
 * Glassmorphism overlay: backdrop blur + dim, Escape / outside click close.
 * Pass `subtitle` for muted description under the title.
 */
const Modal = ({
  open,
  onClose,
  title,
  subtitle,
  titleId = "app-modal-title",
  subtitleId = "app-modal-subtitle",
  children,
}) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="scene-modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      {/* Dim + blur island background */}
      <div
        className="absolute inset-0 bg-slate-950/65 backdrop-blur-md backdrop-saturate-150"
        aria-hidden
      />
      <div
        className="scene-modal-panel relative flex max-h-[min(85vh,880px)] w-full max-w-[min(100%,42rem)] flex-col overflow-hidden rounded-[20px] border border-white/[0.12] bg-gradient-to-br from-[#0f172a]/92 via-[#0c1222]/94 to-[#0a0a0f]/96 text-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.65),0_0_0_1px_rgba(255,255,255,0.06)_inset,0_1px_0_rgba(255,255,255,0.08)_inset] backdrop-blur-2xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={subtitle ? subtitleId : undefined}
        style={{ fontFamily: '"Inter", system-ui, sans-serif' }}
      >
        <header className="shrink-0 border-b border-white/[0.08] px-6 py-6 sm:px-8 sm:py-7">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1 pr-2">
              <h2
                id={titleId}
                className="text-lg font-semibold tracking-tight text-white sm:text-xl"
              >
                {title}
              </h2>
              {subtitle ? (
                <p
                  id={subtitleId}
                  className="mt-2 text-sm leading-relaxed text-slate-400"
                >
                  {subtitle}
                </p>
              ) : null}
            </div>
            <button
              type="button"
              aria-label="Close modal"
              className="group flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-slate-300 shadow-sm transition-all duration-200 hover:scale-105 hover:border-indigo-400/35 hover:bg-white/[0.1] hover:text-white hover:shadow-[0_0_20px_rgba(129,140,248,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0c1222]"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
                className="h-5 w-5 transition-transform duration-200 group-hover:rotate-90"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </header>

        <div className="modal-glass-scroll min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-6 sm:px-8 sm:py-7">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
