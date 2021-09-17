import React from "react";
import SurvivalImage from "../assets/survival.jpg"


const Hero = () => (
  <div style={{ backgroundImage: `url(${SurvivalImage})`, backgroundSize: "cover", height: "75vh" }} >
  <div className="text-center hero my-5">
    
    
      <h1 className="mb-4">Survivalist's Motto:</h1>


      <h2 className="lead display-4">
        Survivor? I barely know her!
      </h2>
    </div>
  </div>
);

export default Hero;