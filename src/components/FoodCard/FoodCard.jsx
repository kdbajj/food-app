import React from 'react'
import './FoodCard.css'
import Tag from '../Tag/Tag'

function FoodCard({ image, name, tags }) {
  return (
    <div className="card">
      <div className="card-image">
        <div className="image-container">
          <img src={image} alt={name} />
        </div>
        <h3 className="title">{name} </h3>
        <div className="tagContainer">
          {tags.slice(0, 3).map((tag) => {
            return <Tag tag={tag} />
          })}
        </div>
      </div>
    </div>
  )
}

export default FoodCard
