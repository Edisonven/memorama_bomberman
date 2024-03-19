import { useState } from "react";
import "../Card/card.css";
import ReactCardFlip from "react-card-flip";

const Card = ({ name, number, frontFace }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="card__container">
      <ReactCardFlip isFlipped={isFlipped}>
        <img className="card__img" src={frontFace} alt="" />
        <img src="" alt="" />
      </ReactCardFlip>
    </div>
  );
};

export default Card;
