import './Preview2.styles.css'
import {FC} from "react";

const Preview2 : FC<{image: string, textBold: string, textLight: string, textButton: string}> =
    ({image, textBold, textLight, textButton,}) => {
    let arrow: string = "src/assets/arrow.png"
    return(
        <div className="preview2">
            <div>
                <div className="textBold-preview2">{textBold}</div>
                <div className="dividerContainer">
                    <hr className="divider"/>
                </div>
                <div className="textLight-preview2">{textLight}</div>
                <button className="button button-preview2">
                    {textButton}
                    <img className='arrow' src={arrow} alt=""/>
                </button>
            </div>
            <img src={image} alt=""/>
        </div>
    )
}

export default Preview2;