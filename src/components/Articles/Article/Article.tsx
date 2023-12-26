import './Article.styles.css'

function Article({image, textBold, textLight}){
    let arrow: string = "src/assets/arrow-horizontal.png"
    return(
        <div className="articleBlock">
            <img className="articleImage" src={image} alt=""/>
            <div className="articleName">{textBold}</div>
            <div className="articleDescription">{textLight}</div>
            <div className="readMoreLabel">
                Read more
                <img className="arrow-horizontal" src={arrow} alt=""/>
            </div>
        </div>
    )
}

export default Article;