import { useState } from "react";
import "../Card/card.css";
import ReactCardFlip from "react-card-flip";
import backFace from "../../../public/2.png";

const Card = ({ name, number, frontFace, flipCard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClickCard = () => {
    const value = flipCard(name, number);
    if (value !== 0) {
      setIsFlipped(!isFlipped);
    }
    return;
  };

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
