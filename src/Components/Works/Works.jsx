import Jobs from "./Jobs";
import "./works.css";

export default function () {
  return (
    <section className="work section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>

      <Jobs />
    </section>
  );
}
