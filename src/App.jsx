import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./pages";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
