import Header from "../../component/Header/Header";
import About from "./about";
import Contact from "./contact";
import Hero from "./hero";
import Menu from "./menu";

function LandingPage() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Menu />
      <Contact />
    </>
  );
}
export default LandingPage;
