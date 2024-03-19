import { Link } from "react-router-dom";
import "../Home/home.css";

const Home = () => {
  return (
    <section className="home__container">
      <div className="home__logo__container">
        <img className="home__logo__img" src="/logo.jpg" alt="" />
      </div>
      <div className="home__stargame">
        <div className="home__startgame__link__container">
          <div className="home__startgame__icon"></div>
          <Link to="/game" className="home__startgame__link">
            start
          </Link>
        </div>
        <div className="home__startgame__desc__container">
          <h1 className="home__startgame__desc">MEMORAMA GAME</h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
