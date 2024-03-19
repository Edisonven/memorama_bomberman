import { useNavigate } from "react-router-dom";
import "../Loading/loading.css";
import { useEffect } from "react";

const Loading = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const bombermanStartSong = document.querySelector(
      ".home__startgame__audio__controls"
    );

    bombermanStartSong.volume = 0.5;
  }, []);

  useEffect(() => {
    setTimeout(() => {
      navigate("/game");
    }, 3000);
  }, []);

  return (
    <section className="loading__container">
      <div className="loading__body__container">
        <div className="loading__title__container">
          <h1 className="loading__title">¡A JUGAR!</h1>
        </div>
        <div className="loading__audio__container">
          <audio className="home__startgame__audio__controls" controls autoPlay>
            <source src="/bomberman_4.mp3" type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </section>
  );
};

export default Loading;
