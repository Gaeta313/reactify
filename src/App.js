import logo from "./logo.svg";
import "./App.css";
import SideBar from "./components/SideBar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import NavBarBottom from "./components/NavBarBottom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Artista from "./components/Artista";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artist_page/:id" element={<Artista />} />
        </Routes>

        <NavBarBottom />
      </div>
    </BrowserRouter>
  );
}

export default App;
