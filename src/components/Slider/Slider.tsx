import './Slider.styles.css'
import {useState} from "react";

function Slider(){
    let image: string = "src/assets/sliderPhoto.png";
    /*let arrowLeft: string = "src/assets/arrow-left";*/
    let arrowRight: string = "src/assets/arrow-horizontal.png";
    const [page, setPage] = useState(1);
    return(
        <>
            <div className="sliderContainer">
                <div className="slider">
                    <div className="sliderLabel">What our customers are saying</div>
                    <div className="dividerContainer dividerContainer-slider">
                        <hr className="divider divider-white"/>
                    </div>
                    <div className="sliderContent">
                        <div className="sliderCircle">
                            <img className="sliderImage" src={image} alt=""/>
                        </div>
                        <div className="sliderTextBlock">
                            <div className="sliderTextBold">Edward Newgate</div>
                            <div className="sliderTextLight">Founder Circle</div>
                        </div>
                        <div className="sliderDescription">
                            “Our dedicated patient engagement app and
                            web portal allow you to access information instantaneously (no tedeous form, long calls,
                            or administrative hassle) and securely”
                        </div>
                    </div>
                </div>
                <div className="toggleBlock">
                    <img className="arrowLeft" src={arrowRight} alt=""/>
                    <div className="dotsContainer">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                    <img className="arrowRight" src={arrowRight} alt=""/>
                </div>
            </div>
        </>
    )
}

export default Slider;