import './Header.styles.css'
function Header(){
    return(
        <div className="header">
            <div className="logo">
                <div className="logoCircle">
                    <div className="logoT">T</div>
                </div>
                <div className="logoText">HealthCare</div>
            </div>
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