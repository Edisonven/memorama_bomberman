import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card/Card.jsx";
import { images } from "./images.js";

function App() {
  const [cards, setCards] = useState([]);

  const newCards = cards.sort(() => Math.random() - 0.5);

  useEffect(() => {
    setCards(images);
  }, []);

  return (
    <section className="app__container">
      <h1 className="app__title">Memorama</h1>
      <div className="app__body">
        {newCards.map((card, index) => {
          return (
            <Card
              key={card.id}
              name={card.name}
              frontFace={card.src}
              number={index}
            />
          );
        })}
      </div>
    </section>
  );
}

export default App;
