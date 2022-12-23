import "./App.css";
import Area from "./area";
import Hyptoneuse from "./hypotanuse";
import IsTriangle from "./isTriangle";
import Quiz from "./quiz";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IsTriangle />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="hypotnuse" element={<Hyptoneuse />} />
            <Route path="area" element={<Area />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
