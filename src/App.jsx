import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card.jsx";

function App() {
  const [cards, setCards] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 10, 10, 11, 11, 12, 12,
  ]);

  return (
    <section className="app__container">
      <h1 className="app__title">Memorama</h1>
      <div className="app__body">
        {cards.map((card) => {
          return <Card />;
        })}
      </div>
    </section>
  );
}

export default App;
