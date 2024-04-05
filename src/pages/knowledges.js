import React from "react";
import Navigation from "../components/Navigation";
import Languages from "../styles/components/knowledges/Languages";
import Experience from "../styles/components/knowledges/Experience";
import OtherSkills from "../styles/components/knowledges/OtherSkills";
import Hobbies from "../styles/components/knowledges/Hobbies";

const knowledges = () => {

  return (
    <div className="knowledges">
      <Navigation/>
        <div className="knowledgesContent">
          <Languages />
          <Experience />
          <OtherSkills />
          <Hobbies /> 
        </div> 

    </div>
  );

};

export default knowledges;