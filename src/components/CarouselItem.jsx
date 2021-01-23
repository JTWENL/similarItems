import React, {useState} from 'react';
import styled from 'styled-components';
import {emptyHeart, fullHeart, cartSvg} from '../svg.jsx';
import StarsItem from './StarsItem.jsx';


const CarouselProduct = styled.div`
  width: 13.58em;
  margin: 5px;
  height: 26.25em;
  font-size: 0.875em;
`
const Image = styled.img`
  height: 13.58em;
  width: 13.58em;
`
const Fresh = styled.div`
  color: red;
  size: large;
  font-weight: 900;
`
const ItemDesc = styled.span`
  color: grey;
`
const Info = styled.div`
  min-height: 7.5em;
  max-height: 7.5em;
  display: grid;
  grid-tempalate-rows: repeat(6, auto);
  grid-template-columns: 75% 25%;
  justify-items: start;
`
const LikedButton = styled.button`
  margin-left: 11.25em;
  height: 2em;
  border: none;
  background: none;
  outline: none;
`
const OnSalePrice = styled.span`
  background-color: #ffdb00;
  box-shadow: 0.2em 0.125em red;
  width: 40%;
`
const SalePrice = styled.span`
  font-size: 1.5em;
`
const Rating = styled.span`
  margin-top: 0.5em;
`

let CarouselItem = (props) => {
  const [hover, setHover] = useState(false);
  const[isLiked, setLike] = useState(props.itemObj.liked);

  let itemObj = props.itemObj;
  let showImage = hover ? 'hover' : 'main';
  let fresh = itemObj.isFresh ? 'NEW' : <div>{" "}</div>;
  let sale = itemObj.isSale
              ? <OnSalePrice><b><sup>$</sup><SalePrice>{itemObj.price}</SalePrice><sup>.00</sup></b></OnSalePrice>
              : <b><sup>$</sup><SalePrice>{itemObj.price}</SalePrice><sup>.00</sup></b>
  let liked = isLiked ? fullHeart : emptyHeart;
  let showLiked = hover ? <LikedButton onClick={()=>{setLike(!isLiked)}}>{liked}</LikedButton> : <LikedButton></LikedButton>;
  let variants = itemObj.variants ? 'More options' : ' ';
  let AddCart = hover ? <span>{cartSvg}</span> : <span></span>;

  return (
    <CarouselProduct
      onMouseEnter={()=> setHover(true)}
      onMouseLeave={()=> {setHover(false)}}>
      {showLiked}
      <Image
        src={itemObj.carouselImages[showImage]}></Image>
      <Info>
        <Fresh><b>{fresh}</b></Fresh><br></br>
        <b>{itemObj.name}</b><br></br>
        <ItemDesc>Color: {itemObj.shortDescription}</ItemDesc><br></br>
        {sale}<br></br>
        <Rating>
          <StarsItem stars={itemObj.averageRating} />
          <ItemDesc>({itemObj.reviews})</ItemDesc>
        </Rating>
        {AddCart}
        <ItemDesc>{variants}</ItemDesc>
      </Info>
    </CarouselProduct>
  )
}

export default CarouselItem;