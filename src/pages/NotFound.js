import React from "react";
import { NavLink } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

const NotFound = () => {

  return (
    <div className="notFound">
      <div className="notFoundContent">
        <h3>Désolée mais cette page n'existe pas !</h3>
 
          <NavLink exact to="/">
            <i><HomeIcon style={{width: "40px", height:"40px"}}/></i>
            <span>Accueil</span>  
          </NavLink>

      </div>
    </div>
  );

};

export default NotFound;