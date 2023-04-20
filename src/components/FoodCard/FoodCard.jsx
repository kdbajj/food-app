import React from "react";
import "./FoodCard.css";

function FoodCard({image, name, description, buttonText}) {
    return(
        <div className="card">
        <img src={image} alt={name} />
        <h3 className="title">{name}</h3>
        <p>{description}</p>
        <button>{buttonText}</button>
      </div>
    )
    
}

export default FoodCard;
