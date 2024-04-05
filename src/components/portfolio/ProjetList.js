import React, {Component} from "react";
import {portfolioData} from "../../data/portfolioData";
import Projet from "./Projet";

export default class ProjetList extends Component{
    state = {
        projets: portfolioData,

        radios: [
            {id: 1, value: "javascript"},
            {id: 2, value: "css"},
            {id: 3, value: "react"},
            {id: 4, value: "php"} 
        ],
        selectedRadio: 'javascript'
    };
    handleRadio = (event) => {
        let radios = event.target.value;
        this.setState ({selectedRadio: radios})
    }
    render () {
        let {projets, radios, selectedRadio} = this.state;

        return(
          <div className="portfolioContent">
                <ul className="radioDisplay">
                    {
                        radios.map((radios) => {
                            return(
                                <li key={radios.id}>
                                    <input 
                                        type="radio"    
                                        name="radios"
                                        checked={radios.value === selectedRadio}
                                        value={radios.value}
                                        id={radios.value}
                                        onChange={this.handleRadio}
                                    />
                                    <label htmlFor={radios.value}>{radios.value}</label>
                                </li>
                            )
                        })
                    } 
                </ul>

                <div className="projets">
                    {
                        projets
                        .filter(item => item.languages.includes(selectedRadio))
                        .map(item => {

                            return(
                                <Projet
                                item= {item}
                                />
                            )
                        })
                    }
                </div>

            </div>
        );
    }
}
 
