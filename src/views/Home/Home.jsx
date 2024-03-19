import { Link } from "react-router-dom";
import "../Home/home.css";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const bombermanStartSong = document.querySelector(
      ".home__startgame__audio__controls"
    );

    bombermanStartSong.volume = 0.5;
  }, []);

  return (
    <section className="home__container">
      <div className="home__logo__container">
        <img className="home__logo__img" src="/logo.jpg" alt="" />
      </div>
      <div className="home__stargame">
        <div className="home__startgame__link__container">
          <div className="home__startgame__icon"></div>
          <Link to="/loading" className="home__startgame__link">
            start
          </Link>
        </div>
        <div className="home__startgame__desc__container">
          <h1 className="home__startgame__desc">MEMORAMA GAME</h1>
        </div>
      </div>
      <audio className="home__startgame__audio__controls" controls autoPlay>
        <source src="/bomberman_1.mp3" type="audio/mpeg" />
      </audio>
    </section>
  );
};

export default Home;
