import { useEffect, useState } from "react";
import "../Card/card.css";
import ReactCardFlip from "react-card-flip";
import backFace from "/2.png";

const Card = ({
  number,
  name,
  frontFace,
  flipCard,
  unflippedCards,
  disabledCards,
  playtime,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasEvent, setHasEvent] = useState(true);
  const [isClickable, setIsClickable] = useState(true);

  const handleClickCard = () => {
    const value = flipCard(number, name);
    if (value !== 0) {
      setIsFlipped(!isFlipped);
    }
    return;
  };

  useEffect(() => {
    if (disabledCards.includes(number)) {
      setHasEvent(false);
    }
  }, [disabledCards]);

  useEffect(() => {
    if (unflippedCards.includes(number)) {
      setTimeout(() => {
        setIsFlipped(false);
      }, 400);
    }
  }, [unflippedCards]);

  useEffect(() => {
    if (playtime === 0) {
      setIsClickable(false);
    }
  }, [playtime]);

  return (
    <div className="card__container">
      <ReactCardFlip isFlipped={isFlipped}>
        <img
          className="card__img"
          src={backFace}
          alt=""
          onClick={isClickable && hasEvent ? handleClickCard : null}
        />
        <img
          className="card__img"
          src={frontFace}
          alt=""
          onClick={isClickable && hasEvent ? handleClickCard : null}
        />
      </ReactCardFlip>
    </div>
  );
};

export default Card;
