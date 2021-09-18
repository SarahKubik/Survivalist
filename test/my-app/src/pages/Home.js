import React from "react";
import Content from "../pages/Content.js";
import Hero from "../pages/Hero.js";


const Home = () => {
  return (
    <div className="container">
  <>
    <Hero />
    <hr />
    <Content />
  </>
    </div>
  );
};

export default Home;