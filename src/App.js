import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/base.css";
import Main from "./components/main";
import Forecast from "./components/forecast";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/forecast" element={<Forecast />} />
      </Routes>
    </Router>
  );
}
