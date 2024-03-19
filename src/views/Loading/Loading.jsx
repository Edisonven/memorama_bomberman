import "../Loading/loading.css";

const Loading = () => {
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
