import React from "react";

function Card(props){
    return(
        <div>
            <img src={props.imageSrc} alt={props.title}/>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default Card;