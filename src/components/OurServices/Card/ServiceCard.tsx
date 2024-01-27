import './Card.styles.css'
import {FC} from "react";

const ServiceCard : FC<{image: string, serviceName: string, serviceDescription: string}> =
    ({image, serviceName, serviceDescription}) => {
    return(
        <div className="card">
                <img className="image" src={image} alt=""/>
                <div className="serviceName">{serviceName}</div>
                <div className="serviceDescription">{serviceDescription}</div>
        </div>
    )
}

export default ServiceCard;