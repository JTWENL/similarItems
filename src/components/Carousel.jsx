import React from 'react';
import CarouselItem from './CarouselItem.jsx';
import styled from 'styled-components';

let Carousel = (props) => {
  return (
    <>
      {props.similarItems.map((item,i) => {
        return <CarouselItem key={i} itemObj={item}/>})}
    </>
  )
}

export default Carousel;