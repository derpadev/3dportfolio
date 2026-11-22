import { createContext, useContext, useMemo, useState } from "react";

const NavMenuContext = createContext({
  menuOpen: false,
  setMenuOpen: () => {},
});

export function NavMenuProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const value = useMemo(() => ({ menuOpen, setMenuOpen }), [menuOpen]);
  return (
    <NavMenuContext.Provider value={value}>{children}</NavMenuContext.Provider>
  );
}

export function useNavMenu() {
  return useContext(NavMenuContext);
}
