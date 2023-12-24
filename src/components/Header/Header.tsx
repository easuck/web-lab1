import './Header.styles.css'
function Header(){
    return(
    <header>
        <div className="logo">
            <div className="circle">
                <div>T</div>
            </div>
            <p>HealthCare</p>
        </div>
        <nav className="navigation_bar">
            <ul>
                <li>Home</li>
                <li>Find a doctor</li>
                <li>Apps</li>
                <li>Testimonials</li>
                <li>About us</li>
            </ul>
        </nav>
    </header>
    )
}

export default Header