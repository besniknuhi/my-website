import Data from "./Data";
import Skill from "./Skill";
import "./home.css";

export default function Home() {
  return (
    <section className="section home" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__img"></div>
          <Data />
        </div>
        <Skill />
      </div>
    </section>
  );
}
