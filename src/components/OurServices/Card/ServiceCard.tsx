import './Card.styles.css'

function ServiceCard({image, serviceName, serviceDescription}){
    return(
        <div className="card">
                <img className="image" src={image} alt=""/>
                <div className="serviceName">{serviceName}</div>
                <div className="serviceDescription">{serviceDescription}</div>
        </div>
    )
}

export default ServiceCard;