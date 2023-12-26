import './Card.styles.css'

function ServiceCard({image, serviceName, serviceDescription}){
    return(
        <div className="card">
                <img className="image" src={image} alt=""/>
                <p className="serviceName">{serviceName}</p>
                <p className="serviceDescription">{serviceDescription}</p>
        </div>
    )
}

export default ServiceCard;