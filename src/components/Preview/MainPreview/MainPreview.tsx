import './MainPreview.styles.css'
import {FC} from "react";

const MainPreview : FC<{image: string, textBold: string, textLight: string, textButton: string}> =
    ({image, textBold, textLight, textButton,}) => {
    return(
        <div className="preview">
            <div>
                <div className="textBold">{textBold}</div>
                <div className="textLight">{textLight}</div>
                <button className="button button-main">{textButton}</button>
            </div>
            <img src={image} alt=""/>
        </div>
    )
}

export default MainPreview