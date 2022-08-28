import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home"
import AboutUs from "./pages/AboutUs";
import Login from "./pages/Login";
import Register from "./pages/Register";



function App() {
  return (
    <BRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/aboutus" element={<AboutUs />} />
      <Route exact path="/register" element={<Register/>}/>
<Route exact path="/login" element={<Login/>}/>
    </Routes>
  </BRouter>
  );
}

export default App;
