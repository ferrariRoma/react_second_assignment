import "./App.css";
import "./reset.css";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { FBActionFn } from "./redux/modules/reduxWord";
import { useDispatch } from "react-redux";
// 페이지 import
import Home from "./Home";
import Add from "./Add";
import Edit from "./Edit";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // FB에서 데이터 가져와서 reducer state초기화
    dispatch(FBActionFn());
  });
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/word/add" element={<Add />} />
      <Route path="/word/:id/edit" element={<Edit />} />
    </Routes>
  );
}

export default App;
