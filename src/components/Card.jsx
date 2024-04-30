import Details from "./Details";
import React,{Component} from "react";
import {info} from './info';  


    
class Card extends Component {
    
   constructor(props){
    super(props);
    this.state={
        info:info};
    }
   
   render(){
    return (
        <>
            <div className="col">
                <div className="card h-100">
                <h5 className="card-title">{this.props.champion.nom}</h5>
                <img src={this.props.champion.imageSrc} className="card-img-top" alt="" style={{ height: '200px' }} />
                
                <div className="card-body">
                    {/*<p className="card-title">{champion.qualif}</p>*/}
                    
                    <Details id={this.props.champion.id} qualif={this.props.champion.qualif} isActif={this.props.champion.isActif} age={this.props.champion.age} />
                    
                    
                </div>
                
                </div>
            </div>
        </>)  
}
}
Card.defaultProps={
    nom:"Nom du Chapion",
    imageSrc:"../public/assets/champion.png",
    qualif:"champion",
    isActif:true,
    age:99};
    
export default Card;