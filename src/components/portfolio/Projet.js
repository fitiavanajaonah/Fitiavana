import React, {Component} from "react";
import { NavLink } from "react-router-dom";

export default class Projet extends Component {
    state = {
        showInfo: false
    }
    handleInfo = () => {
        this.setState({
          showInfo: !this.state.showInfo
        })
    }  
    render () {
        let {name, languagesIcon, source, info, picture} = this.props.item;

        return (
            <>
            <div className="projet">
                <div className="icons">
                    {languagesIcon.map(icons => 
                        <i className={icons} key={icons}><img src="./media/icon (2).png" width={29} heigth={29}/></i>
                    )}
                </div>

                <h3>{name}</h3>
 
                <img src={picture} className="img" onClick={this.handleInfo}/>

                <span className="infos" onClick={this.handleInfo} style={{color: "black"}}>
                        <i className="fas fa-lus-circle">+</i>
                </span>

                {
                    this.state.showInfo && (
                        <div className="showInfo">  
                             <div className="infosContent">
                                <div className="head">
                                    <h2>{name}</h2>
                                    <div className="sourceCode">
                                        <NavLink exact to="/not" activeClassName="navActive" >
                                            <a href={source} rel="noopener noreferrer" className="button2" target="_blank">Code source
                                            </a>
                                        </NavLink> 
                                         
                                    </div>
                                </div>
                                <p className="text">{info}</p>
                                <div className="button return" onClick={this.handleInfo}>
                                    Retour sur la page
                                </div>
                             </div>
                        </div>
                    )
                }
            </div>
            </>
            
        );
    }
}
