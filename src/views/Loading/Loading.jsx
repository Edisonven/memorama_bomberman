import { useNavigate } from "react-router-dom";
import "../Loading/loading.css";
import { useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";

const Loading = () => {
  const navigate = useNavigate();

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
          <ReactAudioPlayer
            className="home__startgame__audio__controls"
            src="/bomberman_4.mp3"
            autoPlay
            controls
            volume={0.5}
            loop={false}
          ></ReactAudioPlayer>
        </div>
      </div>
    </section>
  );
};

export default Loading;
