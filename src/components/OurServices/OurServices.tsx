import './OurServices.styles.css'
import ServiceCard from "./Card/ServiceCard.tsx";

function OurServices(){
    return(
        <div className="ourServicesBlock">
            <p className="ourServicesLabel">Our services</p>
            <div className="dividerContainer">
                <hr className="divider"/>
            </div>
            <p className="ourServicesDescription">We provide to you the best choices for you. Adjust it to your health
                needs and make sure your undergo treatment<br/>
                with our highly qualified doctors you can consult with us which type of service is suitable for your
                health
            </p>
            <div className="cardsBlock">
                <ServiceCard
                    image="src/assets/service1.png"
                    serviceName="Search doctor"
                    serviceDescription="Choose your doctor from thousands of specialist, general, and trusted hospitals"
                />
                <ServiceCard
                    image="src/assets/service2.png"
                    serviceName="Online pharmacy"
                    serviceDescription="Buy  your medicines with our mobile application with a simple delivery system"
                />
                <ServiceCard
                    image="src/assets/service3.png"
                    serviceName="Consultation"
                    serviceDescription="Free consultation with our trusted doctors and get the best recomendations"
                />
                <ServiceCard
                    image="src/assets/service4.png"
                    serviceName="Details info"
                    serviceDescription="Free consultation with our trusted doctors and get the best recomendations"
                />
                <ServiceCard
                    image="src/assets/service5.png"
                    serviceName="Emergency care"
                    serviceDescription="You can get 24/7 urgent care for yourself or your children and your lovely family"
                />
                <ServiceCard
                    image="src/assets/service6.png"
                    serviceName="Tracking"
                    serviceDescription="Track and save your medical history and health data "
                />
            </div>
            <button className="ourServicesButton">Learn more</button>
        </div>
    )
}

export default OurServices;