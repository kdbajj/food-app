import React, { useEffect } from "react";
import "./FoodCard.css";
import Tag from "../Tag/Tag";
<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
</style>

function FoodCard({image, name,tags}) {

  

    return(
      <div className="card">
        <div className="card-image">
          <div className="image-container">
            <img src={image} alt={name}/>
          </div>
          <div>
             <h3 className="title">{name} </h3>
            <div className="tagContainer">
              {
                tags.slice(0,3).map((tag) => {
                  return <Tag tag={tag}/>
                }
                )}
            </div>
          </div>
        </div>
      </div>
    )
}

export default FoodCard;