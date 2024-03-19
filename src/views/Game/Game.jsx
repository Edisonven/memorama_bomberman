import "../Game/game.css";
import { useState, useEffect } from "react";
import Card from "../../components/Card/Card.jsx";
import { images } from "../../images.js";

const Game = () => {
  const [cards, setCards] = useState([]);
  const [firstCard, setFirstCard] = useState({});
  const [secondCard, setSecondCard] = useState({});
  const [unflippedCards, setUnflippedCards] = useState([]);
  const [disabledCards, setDisabledCards] = useState([]);
  const [playTime, setPlayTime] = useState(200);
  const [attempts, setAttempts] = useState(0);

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
      setAttempts((prevAttempts) => prevAttempts + 1); // Incrementar el contador de intentos
    }
    return 1;
  };

  useEffect(() => {
    checkMatch();
  }, [secondCard]);

  const checkMatch = () => {
    if (firstCard.name && secondCard.name) {
      const match = firstCard.name === secondCard.name;
      match ? disableCards() : unflipCards();
    }
  };

  const disableCards = () => {
    setDisabledCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const unflipCards = () => {
    setUnflippedCards([firstCard.number, secondCard.number]);
    resetCards();
  };

  const resetCards = () => {
    setFirstCard({});
    setSecondCard({});
  };

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setPlayTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(countdownInterval);
          console.log("¡Tiempo terminado!");
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(countdownInterval); // Limpiar el intervalo al desmontar el componente
  }, []); // Vacío, para que solo se ejecute una vez al montar el componente

  return (
    <section className="game__container">
      <nav className="game__navbar__container">
        <div className="game__navbar__time">
          <p className="game__navbar__desc game__navbar__timeindicator">
            Tiempo: {playTime}
          </p>
        </div>
        <div className="game__navbar__attemps__container">
          <p className="game__navbar__desc game__navbar__attemps">
            Intentos {attempts}
          </p>
        </div>
        <div className="game__navbar__successes__container">
          <p className="game__navbar__desc game__navbar__successes">
            Aciertos {attempts}
          </p>
        </div>
      </nav>
      <div className="game__body">
        {cards.map((card, index) => {
          return (
            <Card
              key={card.id}
              name={card.name}
              frontFace={card.src}
              number={index}
              flipCard={flipCard}
              unflippedCards={unflippedCards}
              disabledCards={disabledCards}
            />
          );
        })}
      </div>
      <audio
        className="home__startgame__audio__controls"
        controls
        autoPlay
        loop
      >
        <source src="/bomberman_3.mp3" type="audio/mpeg" />
      </audio>
    </section>
  );
};

export default Game;
