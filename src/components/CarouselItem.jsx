import React, {useState} from 'react';
import styled, {css} from 'styled-components';
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
const ItemDesc = styled.span`
  color: grey;
`
const Variants = styled.span`
  color : ${props => props.variants ? 'grey' : 'white'}
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
  visibility: ${props => props.hover ? 'visible' : 'hidden'}
`
const Cart = styled.div`
  visibility: ${props => props.hover ? 'visible' : 'hidden'}
`

const SalePrice = styled.div`
  ${(props) =>
    props.isSale && css`
      background-color: #ffdb00;
      padding-right: 0.2em;
      box-shadow: 0.2em 0.125em red;
      width: 40%;
    `};
`
const PriceMain = styled.span`
    font-size: 1.5em;
`
const Rating = styled.div`
  margin-top: 0.5em;
`
const Fresh = styled.div`
color: ${props => props.isFresh ? 'red' : 'white'};
size: large;
font-weight: bold;
`

let CarouselItem = (props) => {
  const [hover, setHover] = useState(false);
  const[isLiked, setLike] = useState(props.itemObj.liked);
  let itemObj = props.itemObj;
  let showImage = hover ? 'hover' : 'main';
  let liked = isLiked ? fullHeart : emptyHeart;

  return (
    <CarouselProduct
      onMouseEnter={()=> setHover(true)}
      onMouseLeave={()=> {setHover(false)}}>
      <LikedButton hover={hover} onClick={()=>{setLike(!isLiked)}}>{liked}</LikedButton>
      <Image
        src={itemObj.carouselImages[showImage]}></Image>
      <Info>
        <Fresh isFresh={itemObj.isFresh}>NEW</Fresh><br></br>
        <b>{itemObj.name}</b><br></br>
        <ItemDesc>Color: {itemObj.shortDescription}</ItemDesc><br></br>
        <SalePrice isSale={itemObj.isSale}><sup>$</sup><PriceMain>{itemObj.price}</PriceMain><sup>.00</sup></SalePrice><br></br>
        <Rating>
          <StarsItem stars={itemObj.averageRating} />
          <ItemDesc>({itemObj.reviews})</ItemDesc>
        </Rating>
        <Cart hover={hover}>{cartSvg}</Cart>
        <Variants variants={itemObj.variants}>More Options</Variants>
      </Info>
    </CarouselProduct>
  )
}

export default CarouselItem;