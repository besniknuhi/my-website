import "./scrollup.css";

export default function Scrollup() {
  window.addEventListener("scroll", () => {
    const scrollUp = document.querySelector(".scrollup");
    // add show-scroll class when scroll is >=560
    if (window.scrollY >= 560) {
      scrollUp.classList.add("show-scroll");
    } else {
      scrollUp.classList.remove("show-scroll");
    }
  });
  return (
    <a href="" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
}
