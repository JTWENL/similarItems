import React from 'react';

let CarouselItem = (props) => {
  return (
    <div>
      {props.similarItems.map((item,i) => {
        return (
        <div key={i} className="carousel-item">
          <p>New: {(item.isFresh)}</p>
          <p>Liked: {item.liked}</p>
          <img src={item.carouselImages.main} alt="random stock photo"></img>
          <p>{item.name}</p>
          <p>${item.price}</p>
          <p>Color: {item.shortDescription}</p>
          <p>Sale {item.isSale}</p>
          <p>AverageRating: {item.averageRating}</p>
        </div>);
      })}
    </div>
  )
}

export default CarouselItem;