import propTypes from "prop-types";
import { useState } from "react";


Details.propTypes = {
qualif: propTypes.string. isRequired,
isActif: propTypes.bool. isRequired,
age: propTypes.number. isRequired,
};
function Details(props) {

    Details.defaultProps={
        qualif:"champion",
        isActif:true,
        age:99};
    const {qualif,age,isActif}=props.champion;



  
    const [isDetailsVisible,changeState]=useState(false);
    return (
        <>
        { isDetailsVisible && (
            <ul className="list-group">
                <li className="list-group-item" key="qualif">
                    <strong>{qualif}</strong>
                </li>
                <li className="list-group-item" key="age">
                    <strong>age:{age}</strong>
                </li>
                <li className="list-group-item" key="isActif">
                <strong>isActif: {isActif ? "Oui" : "Non"}</strong>
                </li>
                <li className="list-group-item" key="">
                <a href="#" className="btn btn-primary">Biographie</a>
                
                </li>
                <li className="list-group-item" key="">
                
                <a href="#" className="btn btn-primary"> carrére professionnelle</a>
                
                </li>
            </ul>)}
            <button className="btn btn-outline-primary"
                onClick={() => changeState (! isDetailsVisible)}>
                    {isDetailsVisible ? "Cacher Détails" : "Afficher Détails"} 
    </button>
    
            
        </>)
   

}
export default Details;