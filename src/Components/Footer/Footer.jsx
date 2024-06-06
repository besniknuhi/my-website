import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">My Portfolio</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>
        </ul>
        <span className="footer__copy">
          Copyright &#169; 2024. All rights are reserved
        </span>
      </div>
    </footer>
  );
}
