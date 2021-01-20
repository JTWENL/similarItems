import React from 'react';
import styled from 'styled-components';

const CarouselProduct = styled.div`
  border: 5px solid yellow;
  width: 217.33px;
`

const Image = styled.img`
  height: 217.33px;
  width: 217.33px;
`

let CarouselItem = (props) => {
  let image = 'main';
  return (
    <>
      {props.similarItems.map((item,i) => {
        let fresh = item.isFresh ? 'NEW' : '';
        let sale = item.isSale ? 'ON SALE' : '';
        let liked = item.liked ? 'LIKED' : '';
        return (
        <CarouselProduct
          onMouseEnter={()=>{
            image = 'hover'
            console.log('image: ', image)
          }}
          key={i}
          className="carousel-item">
          <p>{liked}</p>
          <Image src={item.carouselImages[image]}></Image>
          <p>{fresh}</p>
          <p>{sale}</p>
          <p><b>{item.name}</b></p>
          <p>Color: {item.shortDescription}</p>
          <p><b>${item.price}</b></p>
          <p>AverageRating: {item.averageRating}</p>
        </CarouselProduct>);
      })}
    </>
  )
}

export default CarouselItem;