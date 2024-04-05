import React from "react";
import Icon from "@mui/icons-material/Language";
import GithubIcon from "@mui/icons-material/GitHub";
import SEOIcon from "@mui/icons-material/SearchOff";
import FormIcon from "@mui/icons-material/FormatOverline";
import FigmIcon from "@mui/icons-material/Create";
import DesignIcon from "@mui/icons-material/DesignServices";
import PhotoIcon from "@mui/icons-material/PhotoCamera";
import VideoIcon from "@mui/icons-material/VideoCameraBack";
const OtherSkills = () => {

  return (
    <div>
        <div className="otherSkills">
          <h3>Autres compétences</h3> 
          <div className="list">
            <ul>
              <li><i><Icon/></i>Anglais</li>
              <li><i><GithubIcon/></i>Github</li>
              <li><i><SEOIcon/></i>SEO</li>
              <li><i><FormIcon/></i>Méthode agile</li>
            </ul>
            <ul> 
              <li><i><FigmIcon/></i>Figma</li>
              <li><i><DesignIcon/></i>UI Design</li>
              <li><i><PhotoIcon/></i>Photoshop</li>
              <li><i><VideoIcon/></i>Montage Vidéo</li>
            </ul>
          </div>
        </div> 
    </div>
  );

};

export default OtherSkills;