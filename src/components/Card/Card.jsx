import { useEffect, useState } from "react";
import "../Card/card.css";
import ReactCardFlip from "react-card-flip";
import backFace from "../../../public/2.png";

const Card = ({
  number,
  name,
  frontFace,
  flipCard,
  unflippedCards,
  disabledCards,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClickCard = () => {
    const value = flipCard(number, name);
    if (value !== 0) {
      setIsFlipped(!isFlipped);
    }
    return;
  };

  useEffect(() => {
    if (unflippedCards.includes(number)) {
      setTimeout(() => {
        setIsFlipped(false);
      }, 700);
    }
  }, [unflippedCards]);

  return (
    <div className="card__container">
      <ReactCardFlip isFlipped={isFlipped}>
        <img
          className="card__img"
          src={backFace}
          alt=""
          onClick={handleClickCard}
        />
        <img
          className="card__img"
          src={frontFace}
          alt=""
          onClick={handleClickCard}
        />
      </ReactCardFlip>
    </div>
  );
};

export default Card;
