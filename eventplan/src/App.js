import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home"
import AboutUs from "./pages/AboutUs";



function App() {
  return (
    <BRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<AboutUs />} />


    </Routes>
  </BRouter>
  );
}

export default App;
