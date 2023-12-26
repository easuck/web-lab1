import './MainPreview.styles.css'

function MainPreview({image, textBold, textLight, textButton}){
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