import React, {useState} from 'react';
import styled from 'styled-components';

const CarouselProduct = styled.div`
  width: 217.33px;
  margin: 5px;
`

const Image = styled.img`
  height: 217.33px;
  width: 217.33px;
`

let CarouselItem = (props) => {
  let itemObj = props.itemObj;
  const [image, setImage] = useState('main');
  let fresh = itemObj.isFresh ? 'NEW' : '';
  let sale = itemObj.isSale ? 'ON SALE' : '';
  let liked = itemObj.liked ? 'LIKED' : '';

  return (
    <CarouselProduct
      className="carousel-item">
      <p>{liked}</p>
      <Image
        onMouseEnter={()=> setImage('hover')}
        OnMouseLeave={()=> setImage('main')}
        src={itemObj.carouselImages[image]}></Image>
      <p>
        {fresh}<br></br>
        {sale}<br></br>
        <b>{itemObj.name}</b><br></br>
        Color: {itemObj.shortDescription}<br></br>
        <b>${itemObj.price}</b><br></br>
        AverageRating: {itemObj.averageRating}<br></br>
      </p>
    </CarouselProduct>
  )
}

export default CarouselItem;