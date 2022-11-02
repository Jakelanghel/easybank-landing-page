import React from "react";
import Hero from "./hero/Hero";
import { StyledHome } from "./Home.Styled";
import Benefits from "./benefits/Benefits";
import Articles from "./articles/Articles";

const Home = () => {
  return (
    <StyledHome>
      <Hero />
      <Benefits />
      <Articles />
    </StyledHome>
  );
};

export default Home;
