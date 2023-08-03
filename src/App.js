import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Navbar";
import Props from "./Components/Props";
import LIstKey from "./Components/LIstKey";
import ClassBase from "./Components/ClassBase";
import UseStateH from "./Pages/UseStateH";
import UseEffectH from "./Pages/UseEffectH";
import UseContext from "./Pages/UseContext";
import UseMemo from "./Pages/UseMemo";
import UseCallback from "./Pages/UseCallback";
import UseLayoutEffect from "./Pages/UseLayoutEffect";
import ReactMemo from "./Pages/ReactMemo";
import PureComponent from "./Pages/PureComponent";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Props />} />
          <Route path="/listkey" element={<LIstKey />} />
          <Route path="/class" element={<ClassBase />} />
          <Route path="/useState" element={<UseStateH />} />
          <Route path="/useEffect" element={<UseEffectH />} />
          <Route path="/useContext" element={<UseContext />} />
          <Route path="/useMemo" element={<UseMemo />} />
          <Route path="/useCallback" element={<UseCallback />} />
          <Route path="/useLayoutEffect" element={<UseLayoutEffect />} />
          <Route path="/reactMemo" element={<ReactMemo />} />
          <Route path="/pureComponent" element={<PureComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
