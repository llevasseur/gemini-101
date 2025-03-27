import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import GenPage from "./pages/GenPage/GenPage";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/generateEmoji" />} />
          <Route path="/generateEmoji" element={<GenPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
