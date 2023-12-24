import './Card.styles.css'

function ServiceCard({image, serviceName, serviceDescription}){
    return(
        <div className="card">
            <div className="inside-card-container">
                <img className="image" src={image} alt=""/>
                <p className="serviceName">{serviceName}</p>
                <p className="serviceDescription">{serviceDescription}</p>
            </div>

        </div>
    )
}

export default ServiceCard;