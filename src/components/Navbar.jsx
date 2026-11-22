import { useEffect, useId } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useNavMenu } from "./NavMenuContext";

const linkClass = ({ isActive }) =>
  isActive
    ? "text-blue-600"
    : "text-slate-700 hover:text-blue-500 transition-colors";

const mobileLinkClass = ({ isActive }) =>
  [
    "block px-4 py-3 text-center text-2xl font-bold transition-colors [font-family:Poppins,sans-serif]",
    isActive
      ? "text-[#F2D49B] underline decoration-[#F2D49B] decoration-2 underline-offset-8"
      : "text-white hover:text-[#F2D49B]/80",
  ].join(" ");

const Navbar = () => {
  const { menuOpen, setMenuOpen } = useNavMenu();
  const menuId = useId();
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <NavLink
        to="/portfolio"
        className="border w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="blue-gradient_text">DH</p>
      </NavLink>

      <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
        <NavLink to="/" className={linkClass}>
          Scene
        </NavLink>
        <NavLink to="/portfolio" className={linkClass}>
          Portfolio
        </NavLink>
      </nav>

      <div className="md:hidden">
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-md transition-colors hover:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
              className="h-5 w-5"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
              className="h-5 w-5"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6 md:hidden"
          onClick={() => setMenuOpen(false)}
          role="presentation"
        >
          <div
            className="absolute inset-0 bg-[#123F42]/80 backdrop-blur-md"
            aria-hidden
          />
          <nav
            id={menuId}
            className="relative z-10 flex w-full max-w-xs flex-col gap-2"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
          >
            <NavLink to="/" className={mobileLinkClass}>
              Scene
            </NavLink>
            <NavLink to="/portfolio" className={mobileLinkClass}>
              Portfolio
            </NavLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
