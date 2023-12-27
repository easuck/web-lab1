import './Slider.styles.css'
import {useState} from "react";

function Slider(){
    let image: string = "src/assets/sliderPhoto.png";
    let arrowRight: string = "src/assets/arrow-horizontal.png";
    const selectDot = () => {
        switch(page){
            case 1: return (
                <div className="dotsContainer">
                    <div className="dot dot-current"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            );
            case 2: return (
                <div className="dotsContainer">
                    <div className="dot"></div>
                    <div className="dot dot-current"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            );
            case 3: return (
                <div className="dotsContainer">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot dot-current"></div>
                    <div className="dot"></div>
                </div>
            );
            case 4: return (
                <div className="dotsContainer">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot dot-current"></div>
                </div>
            );
        }
    };

    const [page, setPage] = useState(1);

    return (
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
                    <img className="arrowLeft" src={arrowRight} alt=""
                    onClick={() => {
                        if (page != 1){
                            setPage(page - 1)}
                        }
                    }
                    />
                    {selectDot()}
                    <img className="arrowRight" src={arrowRight} alt=""
                         onClick={() => {
                             if (page != 4) {
                                 setPage(page + 1)
                             }
                         }
                         }
                    />
                </div>
            </div>
        </>
    )
}

export default Slider;