import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { NavMenuProvider } from "./components/NavMenuContext";
import { Home, Portfolio } from "./pages";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <BrowserRouter>
        <NavMenuProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </NavMenuProvider>
      </BrowserRouter>
    </main>
  );
};

export default App;
