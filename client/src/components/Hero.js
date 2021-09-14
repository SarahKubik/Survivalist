import React from "react";
import SurvivalImage from "../assets/survival.jpg"


const Hero = () => (
  <div style={{ backgroundImage: `url(${SurvivalImage})`, backgroundSize: "cover", height: "75vh" }} >
  <div className="text-center hero my-5">
    
    
      <h1 className="mb-4">Mission Statement:</h1>


      <h2 className="lead display-4">
        'To help humanity be fully prepared'
      </h2>
    </div>
  </div>
);

export default Hero;
