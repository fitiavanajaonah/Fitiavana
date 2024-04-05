import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const contact = () => {

  return (
    <div className="contact">

      <Navigation/>
      <div className="contactContent">
        <div className="header"></div>
        <div className="contactBox">
          <h1>Contactez-moi</h1>
          <ul>
            <li>
              <i><HomeIcon/></i>
              <span>Morondava / Betela</span>
            </li>
            <li>
              <i><PhoneIcon/></i>
              <CopyToClipboard text="0389517719">
                <span 
                className="clickInput"
                onClick={() => {alert('Téléphone copiée')}}
                >
                  Tél: 0389517719
                </span>
              </CopyToClipboard>
            </li>
            <li>
              <i><EmailIcon/></i>
              <CopyToClipboard text="fitiavanajaonah@gmail.com">
                <span 
                className="clickInput"
                onClick={() => {alert('E-mail copiée')}}
                >
                  fitiavanajaonah@gmail.com
                </span>
              </CopyToClipboard>
            </li>
          </ul>
        </div> 
         
        <div className="Network">
          <div className="lien">
            <a href="https://www.Linkedin.com"  target="blank" rel="noppener noreferrer"><i><LinkedInIcon/></i>
                      <h4>Linkedin</h4></a>
          </div> 
          <div className="lien">
            <a href="https://www.GitHub.com"  target="blank" rel="noppener noreferrer"><i><GitHubIcon  /></i>
                        <h4>GitHub</h4></a>
          </div>
          <div className="lien">
            <a href="https://www.Twiter.com"  target="blank" rel="noppener noreferrer"><i>< TwitterIcon/></i>
                        <h4>Twiter</h4></a>
          </div>
          <div className="lien">
            <a href="https://www.Google.com"  target="blank" rel="noppener noreferrer"><i><GoogleIcon/></i>
                        <h4>Google</h4></a>
          </div>
          
        </div>
      </div>
    </div>
  );

};

export default contact;
