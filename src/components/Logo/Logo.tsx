import './Logo.styles.css'

function Logo({circleColor, TColor, TextColor}){
    return (
        <div className="logo">
            <div className={circleColor}>
                <div className={TColor}>T</div>
            </div>
            <div className={TextColor}>HealthCare</div>
        </div>

    )
}

export default Logo;