import './Header.styles.css'
import Logo from "../Logo/Logo.tsx";
function Header(){
    return(
        <div className="header">
            <Logo circleColor="logoCircle"
                  TColor="logoT"
                  TextColor="logoText"/>
            <div className="navigationBar">
                <div className="navigationElement">Home</div>
                <div className="navigationElement">Find a doctor</div>
                <div className="navigationElement">Apps</div>
                <div className="navigationElement"> Testimonials</div>
                <div className="navigationElement">About us</div>
            </div>

        </div>
    )
}

export default Header