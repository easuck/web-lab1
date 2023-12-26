import './Articles.styles.css'
import Article from "./Article/Article.tsx";
import {articles} from "../../models/Articles.ts";

function Articles(){
    return(
        <div className="articlesBlock">
            <div className="articlesLabel">Check out our latest article</div>
            <div className="dividerContainer">
                <hr className="divider"/>
            </div>
            <div className="articles">
                <Article image={articles[0].image} textBold={articles[0].textBold} textLight={articles[0].textLight}/>
                <Article image={articles[1].image} textBold={articles[1].textBold} textLight={articles[1].textLight}/>
                <Article image={articles[2].image} textBold={articles[2].textBold} textLight={articles[2].textLight}/>
            </div>
            <button className="button button-articles">View all</button>
        </div>
    )
}

export default Articles;