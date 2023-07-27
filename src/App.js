import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar";
import Props from "./Components/Props";
import Home from "./Components/Home";
import LIstKey from "./Components/LIstKey";
import Function from "./Components/Function";
import ClassBase from "./Components/ClassBase";
import UseState from "./Components/UseState";
import UseEffect from "./Components/UseEffect";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/props" element={<Props />} />
          <Route path="/listkey" element={<LIstKey />} />
          <Route path="/function" element={<Function />} />
          <Route path="/class" element={<ClassBase />} />
          <Route path="/useState" element={<UseState />} />
          <Route path="/useEffect" element={<UseEffect />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
