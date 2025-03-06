import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import GenPage from "./pages/GenPage/GenPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/generateEmoji" />} />
        <Route path="/generateEmoji" element={<GenPage />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
