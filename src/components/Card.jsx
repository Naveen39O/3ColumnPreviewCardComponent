import React from "react";


function Card(props){
    return(
        <div className={ "card " + props.title}>
            {props.image}
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button className="btn">Learn More</button>
        </div>
    
    );
}

export default Card;