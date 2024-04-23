import Details from "./Details";


Card.defaultProps={
    nom:"Nom du Chapion",
    imageSrc:"../public/assets/champion.png",
    qualif:"champion",
    isActif:true,
    age:99};
    
function Card(props) {
    
   
    return (
        <>
            <div className="col">
                <div className="card h-100">
                <h5 className="card-title">{props.champion.nom}</h5>
                <img src={props.champion.imageSrc} className="card-img-top" alt="" style={{ height: '200px' }} />
                
                <div className="card-body">
                    {/*<p className="card-title">{champion.qualif}</p>*/}
                    
                    <Details id={props.champion.id} qualif={props.champion.qualif} isActif={props.champion.isActif} age={props.champion.age} />
                    
                    
                </div>
                
                </div>
            </div>
        </>)  
}
export default Card;