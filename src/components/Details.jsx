import {info} from './info';  
import PropTypes from 'prop-types';  
import { useState } from 'react';

Details.defaultProps = {
    qualif: "Champion",
    isActif: true,
    age: 99,
};
Details.propTypes = {
    qualif: PropTypes.string.isRequired,
    isActif: PropTypes.bool.isRequired,
    age: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,  
};
function Details(props) {
    const [isDetailsVisible, changeState] = useState(false);

    function handleCarriereProfClick(id) {
        const champ = info.find((champion) => champion.id === id);
        const wikipediaUrl = `https://fr.wikipedia.org/wiki/${encodeURIComponent(champ.nom)}`;
        window.open(wikipediaUrl, "_blank");
      }

    return (
        <>
            {isDetailsVisible && (
                <ul className='list-group'>
                    <li className='list-group-item' key="qualif">
                        <strong>{props.qualif}</strong>
                    </li>
                    <li className='list-group-item' key="age">
                        Age: <strong>{props.age}</strong>
                    </li>
                    <li className='list-group-item' key="isActif">
                        Encore actif: <strong>{props.isActif ? "Oui" : "Non"}</strong>
                    </li>
                    <li className='list-group-item'>
                        <button className="btn btn-primary">Biographie</button>
                    </li>
                    <li className='list-group-item' key="career">
                        <button className="btn btn-primary" onClick={() => handleCarriereProfClick(props.id)}>Carrière Professionnelle</button>
                    </li>
                </ul>
            )}
            <button className='btn btn-outline-primary' onClick={() => changeState(!isDetailsVisible)}>
                {isDetailsVisible ? "Cacher Détails" : "Afficher Détails"}
            </button>
        </>
    );
}





export default Details;
