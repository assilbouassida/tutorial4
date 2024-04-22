import Details from "./Details";


Card.defaultProps={
    nom:"Nom du Chapion",
    imageSrc:"../public/assets/champion.png",
    qualif:"champion",
    isActif:true,
    age:99};
    
function Card(props) {
    // let champ={qualif:props.champion.qualif,age:props.champion.age,isActif:props.champion.isActif};
   
    return (
        <>
            <div className="col">
                <div className="card h-100">
                <h5 className="card-title">{props.champion.nom}</h5>
                <img src={props.champion.imageSrc} className="card-img-top" alt="" style={{ height: '200px' }} />
                
                <div className="card-body">
                    {/*<p className="card-title">{champion.qualif}</p>*/}
                    
                    <Details champion={props.champion}/>
                    
                    
                </div>
                
                </div>
            </div>
        </>)  
}
export default Card;