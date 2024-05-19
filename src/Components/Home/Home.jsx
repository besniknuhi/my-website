import Data from "./Data";
import ScrollDown from "./ScollDown";
import Social from "./Social";
import "./home.css";

export default function Home() {
  return (
    <section className="section home" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>

          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}
