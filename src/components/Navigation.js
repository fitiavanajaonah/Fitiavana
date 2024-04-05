import React from "react";
import { NavLink } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import HomeIcon from '@mui/icons-material/Home';
import ImageIcon from '@mui/icons-material/Image';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

 
const Navigation = () => {
 
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/img1.jpg" alt="profile-pic"/>
          <h3>
            Fitiavana
          </h3> 
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="navActive" >
              <i><HomeIcon/></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/competance" activeClassName="navActive" >
              <i><BrandingWatermarkIcon/></i>
              <span>competance</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/portfolio" activeClassName="navActive" >
              <i><ImageIcon/></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact" activeClassName="navActive" >
              <i><ContactPhoneIcon/></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
 
    <div className="socialNetwork">
      <ul>
          <li>
            
              <a href="https://www.LinkedIn.com" target="blank" rel="noppener noreferrer"><i><LinkedInIcon/></i></a>
              
          </li>
          <li>
            
              <a href="https://www.GitHub.com" target="blank" rel="noppener noreferrer"><i><GitHubIcon/></i></a>
          </li>
          <li>
            
              <a href="https://www.Twitter.com" target="blank" rel="noppener noreferrer"><i><TwitterIcon/></i></a>
          </li>
          <li>
           
              <a href="https://www.google.com" target="blank" rel="noppener noreferrer"><i> <GoogleIcon/></i></a>
          </li>
      </ul>
    </div>
    
    <div className="signature">
      <p>
        Fitiavana 2024
      </p>
    </div>

    </div>
  );

};

export default Navigation;