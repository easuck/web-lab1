import './Footer.styles.css'
import Logo from "../Logo/Logo.tsx";

function Footer(){
    return(
        <div className="footer">
            <div className="footerColumn">
                <div className="columnElement">
                    <Logo circleColor="logoCircleWhite"
                    TColor="logoTBlue"
                    TextColor="logoTextWhite"/>
                </div>
                <div className="columnElement descriptionElement">HealthCare provides progressive, and <br/>
                    affordable healthcare, accessible on mobile and<br/>
                    online for everyone</div>
                <div className="columnElement">©HealthCare PTY LTD 2023. All rights reserved</div>
            </div>
            <div className="footerColumn">
                <div className="columnFirstElement">Company</div>
                <div className="columnElement">About</div>
                <div className="columnElement">Testimonials</div>
                <div className="columnElement">Find a doctor</div>
                <div className="columnElement">Apps</div>
            </div>
            <div className="footerColumn">
                <div className="columnFirstElement">Region</div>
                <div className="columnElement">Indonesia</div>
                <div className="columnElement">Singapore</div>
                <div className="columnElement">Hongkong</div>
                <div className="columnElement">Canada</div>
            </div>
            <div className="footerColumn">
                <div className="columnFirstElement">Help</div>
                <div className="columnElement">Help center</div>
                <div className="columnElement">Contact support</div>
                <div className="columnElement">Instructions</div>
                <div className="columnElement">How it works</div>
            </div>
        </div>
    )
}

export default Footer;