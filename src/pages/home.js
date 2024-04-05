import React from "react";
import Navigation from "../components/Navigation";

const home = () => {

  return (
    <div className="home">
      <Navigation />
      <div className="homeContent">
        <div className="content">
          <h1>Fitiavana Jaonah</h1>
          <h2>Développeur de CV</h2>
            <div className="pdf">
              <a href="./media/cv.pdf" target="_blank">Télécharger CV</a>
            </div>
        </div>
      </div>
    </div>
  );

};

export default home; 
//<h3>
 //     coco les amis dans home de c'est moi 
   // </h3>