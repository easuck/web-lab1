import './ServiceDescription.styles.css'

function ServiceDescription({image}){
    return(
        <div className="description">
            <div>
                <div className="description-element">Virtual health for yourself</div>
                <div className="description-element">Our service provides progressive, and<br/>
                    affordable healthcare, accessible on mobile<br/>
                    and online for everyone</div>
                <div className="description-element">
                    <button>Consult today</button>
                </div>
            </div>
            <div>
                <img src={image} alt=""/>
            </div>
        </div>
    )
}

export default ServiceDescription