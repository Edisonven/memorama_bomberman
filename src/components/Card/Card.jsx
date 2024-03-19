import { useState } from "react";
import "../Card/card.css";
import ReactCardFlip from "react-card-flip";

const Card = ({ name, number, frontFace }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClickCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="card__container">
      <ReactCardFlip isFlipped={isFlipped}>
        <img
          className="card__img"
          src="./2.png"
          alt=""
          onClick={handleClickCard}
        />
        <img className="card__img" src={frontFace} alt="" />
      </ReactCardFlip>
    </div>
  );
};

export default Card;
