import "./App.css";
import "./reset.css";
import { Routes, Route } from "react-router-dom";
// 페이지 import
import Home from "./Home";
import Add from "./Add";
import Edit from "./Edit";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/word/add" element={<Add />} />
      <Route path="/word/:id/edit" element={<Edit />} />
    </Routes>
  );
}

export default App;
