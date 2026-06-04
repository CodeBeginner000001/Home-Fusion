import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HomePart1, HomePart2, HomePart3, HomePart4, HomePart5, HomePart6 } from "../components/home-component";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.targetId) {
      const element = document.getElementById(location.state.targetId);
      if (element) {
        const yOffset = -80; // adjust this to match your navbar height
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <HomePart1 />
      <HomePart2 />
      <HomePart3 />
      <HomePart4 />
      <HomePart5 />
      <HomePart6 />
    </>
  );
};

export default Home;
