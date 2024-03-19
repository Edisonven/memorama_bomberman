import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card/Card.jsx";
import { images } from "./images.js";

function App() {
  const [cards, setCards] = useState([]);

  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});

  useEffect(() => {
    const newImages = images.sort(() => Math.random() - 0.5);
    setCards(newImages);
  }, []);

  const flipCard = (number, name) => {
    if (firstCard.name === name && firstCard.number === number) {
      return 0;
    }
    if (!firstCard.name) {
      setFirstCard({ name, number });
    } else if (!secondCard.name) {
      setSecondCard({ name, number });
    }
    return 1;
  };

  return (
    <section className="app__container">
      <h1 className="app__title">Memorama</h1>
      <div className="app__body">
        {cards.map((card, index) => {
          return (
            <Card
              key={card.id}
              name={card.name}
              frontFace={card.src}
              number={index}
              flipCard={flipCard}
            />
          );
        })}
      </div>
    </section>
  );
}

export default App;
