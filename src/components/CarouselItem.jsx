import React, {useState} from 'react';
import styled from 'styled-components';
import {emptyHeart, fullHeart} from '../svg.jsx';
import StarRatingComponent from 'react-star-rating-component';


const CarouselProduct = styled.div`
  width: 217.33px;
  margin: 5px;
  height: 420px;
  font-size: 14px;
`
const Image = styled.img`
  height: 217.33px;
  width: 217.33px;
`
const Fresh = styled.span`
  color: red;
  size: large;
  font-weight: 900;
`
const ItemDesc = styled.span`
  color: grey;
`
const Info = styled.div`
  min-height: 120px;
  max-height: 120px;
`
const LikedButton = styled.button`
  margin-left: 180px;
  border: none;
  background: none;
  outline: none;
`
const OnSalePrice = styled.span`
  padding: 4px 2px 2px 0px;
  margin: 2px 0px 4px 0px;
  background-color: #ffdb00;
  box-shadow: 3px 2px red;
`
const SalePrice = styled.span`
  font-size: 24px;
`

let CarouselItem = (props) => {
  //hooks go here §
  const [image, setImage] = useState(true);
  const[isLiked, setLike] = useState(props.itemObj.liked);

  let itemObj = props.itemObj;
  let showImage = image ? 'main' : 'hover';
  let fresh = itemObj.isFresh ? 'NEW' : '';
  let sale = itemObj.isSale
              ? <OnSalePrice><b><sup>$</sup><SalePrice>{itemObj.price}</SalePrice><sup>.00</sup></b></OnSalePrice>
              : <b><sup>$</sup><SalePrice>{itemObj.price}</SalePrice><sup>.00</sup></b>
  let liked = isLiked ? fullHeart : emptyHeart;
  let variants = itemObj.variants ? 'More options' : ' ';

  return (
    <CarouselProduct
      onMouseOver={()=> setImage(false)}
      OnMouseLeave={()=> console.log('here')}>
      <LikedButton onClick={()=>{setLike(!isLiked)}}>{liked}</LikedButton>
      <Image
        src={itemObj.carouselImages[showImage]}></Image>
      <Info>
        <Fresh><b>{fresh}</b></Fresh><br></br>
        <b>{itemObj.name}</b><br></br>
        <ItemDesc>Color: {itemObj.shortDescription}</ItemDesc><br></br>
        {sale}<br></br>
        <StarRatingComponent
          name="stars"
          value={itemObj.averageRating}
          starColor="black"
          emptyStarColor="white"
          editing={false}>
          </StarRatingComponent><ItemDesc>({itemObj.reviews})</ItemDesc><br></br>
        <ItemDesc>{variants}</ItemDesc>
      </Info>
    </CarouselProduct>
  )
}

export default CarouselItem;