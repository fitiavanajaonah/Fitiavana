import React from "react";
import RanIcon from "@mui/icons-material/CurrencyPoundTwoTone";
import PermIcon from "@mui/icons-material/Language";

const Hobbies = () => {

  return (
    <div className="hobbies">
        <h3>Intérêts</h3>
        <ul>
          <li className="hobby">
            <span>Cours à pieds</span>
          </li>
          <li className="hobby">
            <i><RanIcon/></i>
            <span>Randonnées</span>
          </li>
          <li className="hobby"> 
            <span>Permaculture</span>
          </li>
          <li className="hobby">
            <i></i>
            <span>Crypto-monnais</span>
          </li>
          <li className="hobby">
            <i><PermIcon/></i>
            <span>Espace</span>
          </li>
        </ul>
    </div>
  );

};

export default Hobbies;