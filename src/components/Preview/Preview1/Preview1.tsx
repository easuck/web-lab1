import './Preview1.styles.css'

function Preview1({image, textBold, textLight, textButton}){
    return(
        <div className="preview1">
            <img src={image} alt=""/>
            <div>
                <div className="textBold-preview1">{textBold}</div>
                <div className="dividerContainer">
                    <hr className="divider"/>
                </div>
                <div className="textLight-preview1">{textLight}</div>
                <button className="button button-preview1">{textButton}</button>
            </div>
        </div>
    )
}

export default Preview1;