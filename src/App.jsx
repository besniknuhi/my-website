import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Qualification from "./Components/Qualification/Qualification";
import Scrollup from "./Components/Scrollup/Scrollup";
import Works from "./Components/Works/Works";
export default function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
    {/* <Qualification /> */}
        <Works />
        <Contact />
      </main>

      <Footer />
      <Scrollup />
    </>
  );
}
