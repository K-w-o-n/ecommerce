import React from 'react'
import { BsFillBagHeartFill } from "react-icons/bs";


const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  return (
    <section className="card">
      <img
        src={img}
        alt={title}
        className="card-img"
      />
      <section className="card-detail">
        <h3 className="card-title">{title}</h3>
        <scetion className="card-review">
        {star} {star} {star} {star} {star}
          <span className="total-reviews">{reviews}</span>
        </scetion>
        <section className="card-price">
          <div className="price">
            <del>{prevPrice}</del>{newPrice}
          </div>
          <div className="bag">
            <BsFillBagHeartFill className="bag-icon" />
          </div>
        </section>
      </section>
    </section>
  );
}

export default Card
