import { Link } from "react-router-dom";
import { Header } from "./Header";

export const HeroSection = () => {
  return (
    <section>
      <Header />
      <h1>Landing Page Working</h1>

      <Link to="/country-region">Explore Countries</Link>
    </section>
  );
};
