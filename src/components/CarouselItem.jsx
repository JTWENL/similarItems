import React, {useState} from 'react';
import styled from 'styled-components';
import {emptyHeart, fullHeart, cartSvg} from '../svg.jsx';
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
const Fresh = styled.div`
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
  display: grid;
  grid-tempalate-rows: auto auto auto auto 30px auto;
  grid-template-columns: 75% 25%;
  justify-items: start;
`
const LikedButton = styled.button`
  margin-left: 180px;
  height: 25px;
  border: none;
  background: none;
  outline: none;
`
const OnSalePrice = styled.span`

  background-color: #ffdb00;
  box-shadow: 3px 2px red;
  width: 40%;
`
const SalePrice = styled.span`
  font-size: 24px;
`
const AddToCart = styled.span`
  align-self: center;
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
  let AddCart = hover ? <AddToCart>{cartSvg}</AddToCart> : null;

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
        <div>
          <StarRatingComponent
            name="stars"
            value={itemObj.averageRating}
            starColor="black"
            emptyStarColor="white"
            editing={false}>
            </StarRatingComponent>
            <ItemDesc>({itemObj.reviews})</ItemDesc>
        </div>
        <div>{AddCart}</div>
        <ItemDesc>{variants}</ItemDesc>
      </Info>
    </CarouselProduct>
  )
}

export default CarouselItem;