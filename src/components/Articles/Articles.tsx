import './Articles.styles.css'
import Article from "./Article/Article.tsx";
import {articles} from "../../models/Articles.ts";
import {useState} from "react";

function Articles(){
    const [isExpanded, setIsExpanded] = useState(false);
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
            {isExpanded && (
                <div className="articles">
                    <Article image={articles[0].image} textBold={articles[0].textBold} textLight={articles[0].textLight}/>
                    <Article image={articles[1].image} textBold={articles[1].textBold} textLight={articles[1].textLight}/>
                    <Article image={articles[2].image} textBold={articles[2].textBold} textLight={articles[2].textLight}/>
                </div>
            )}
            <button
                className="button button-articles"
                onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "Hide" : "View all"}
            </button>
        </div>
    )
}

export default Articles;