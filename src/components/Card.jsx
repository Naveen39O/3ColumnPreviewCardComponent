import React from "react";

function Card(props){
    return(
        <div className="row">
            <div className={ "card " + props.title}>
                <img src={props.imageSrc} alt={props.title}/>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <a className="btn">Learn More</a>
            </div>
        </div>
    );
}

export default Card;