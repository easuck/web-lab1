import './OurServices.styles.css'
import ServiceCard from "./Card/ServiceCard.tsx";

function OurServices(){
    return(
        <div className="our-services-block">
            <p className="our-services-label">Our services</p>
            <div className="divider-container">
                <hr className="divider"/>
            </div>
            <p className="our-services-description">We provide to you the best choices for you. Adjust it to your health
                needs and make sure your undergo treatment<br/>
                with our highly qualified doctors you can consult with us which type of service is suitable for your
                health
            </p>
            <div className="cards-block">
                <ServiceCard
                    image="src/assets/service1.png"
                    serviceName="Search doctor"
                    serviceDescription="Choose your doctor from thousands of specialist, general, and trusted hospitals"
                />
                <ServiceCard
                    image="src/assets/service2.png"
                    serviceName="Search doctor"
                    serviceDescription="Choose your doctor from thousands of specialist, general, and trusted hospitals"
                />
                <ServiceCard
                    image="src/assets/service3.png"
                    serviceName="Search doctor"
                    serviceDescription="Choose your doctor from thousands of specialist, general, and trusted hospitals"
                />
                <ServiceCard
                    image="src/assets/service4.png"
                    serviceName="Search doctor"
                    serviceDescription="Choose your doctor from thousands of specialist, general, and trusted hospitals"
                />
                <ServiceCard
                    image="src/assets/service5.png"
                    serviceName="Search doctor"
                    serviceDescription="Choose your doctor from thousands of specialist, general, and trusted hospitals"
                />
                <ServiceCard
                    image="src/assets/service6.png"
                    serviceName="Search doctor"
                    serviceDescription="Choose your doctor from thousands of specialist, general, and trusted hospitals"
                />
            </div>
            <button className="button">Learn more</button>
        </div>
    )
}

export default OurServices;