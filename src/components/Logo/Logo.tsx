import './Logo.styles.css'
import {FC} from "react";

const Logo : FC<{circleColor: string, TColor: string, TextColor: string}> =
    ({circleColor, TColor, TextColor}) => {
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