import { Route, Routes } from "react-router-dom";
import "./App.css";
import Game from "./views/Game/Game.jsx";
import Home from "./views/Home/Home.jsx";
import Loading from "./views/Loading/Loading.jsx";

function App() {
  return (
    <section className="app__container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loading..." element={<Loading />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </section>
  );
}

export default App;
