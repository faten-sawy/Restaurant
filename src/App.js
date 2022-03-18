import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Pages/Home/Home";
import Details from "./Pages/Details/Details";
import NotFound from "./Components/NotFound/NotFound";
import "./App.module.css";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
