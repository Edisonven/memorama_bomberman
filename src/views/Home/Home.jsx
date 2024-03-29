import { Link } from "react-router-dom";
import "../Home/home.css";

import ReactAudioPlayer from "react-audio-player";

const Home = () => {
  return (
    <section className="home__container">
      <div className="home__logo__container">
        <img className="home__logo__img" src="/logo.webp" alt="" />
      </div>
      <div className="home__stargame">
        <div className="home__startgame__link__container">
          <Link to="/loading..." className="home__startgame__link">
            <div className="home__startgame__icon"></div>
            start
          </Link>
        </div>
        <div className="home__startgame__desc__container">
          <p className="home__startgame__desc">MEMORAMA GAME</p>
        </div>
      </div>
      <ReactAudioPlayer
        className="home__startgame__audio__controls"
        src="/bomberman_1.mp3"
        autoPlay
        controls
        volume={0.4}
        loop={false}
      ></ReactAudioPlayer>
    </section>
  );
};

export default Home;
