import React from 'react';
import CarouselItem from './CarouselItem.jsx';
import {arrowRight, arrowLeft} from '../svg.jsx';
import styled from 'styled-components';

let NavLeftButton = styled.button`
  background-color: lightgrey;
  align-self: center;
  position: sticky;
`
let NavButton = styled.button`
  background-color: white;
  width: 55px;
  height: 420px;
  align-self: center;
  position: sticky;
  border: none;
  outline: none;
`

const CarouselDiv= styled.div`
  background-color: white;
  background: none;
  display: flex;
  align-items: flex-end;
  overflow: scroll;
  height: auto;
  padding-left: 0px 15px 0px 15px;
`
const CarouselGrid = styled.div`
  display: flex;
  width: auto;
  justify-content: start;
`

class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      scrollPosition: 0
    }
    this.handleScrollClick = this.handleScrollClick.bind(this);
  }

  handleScrollClick (event, direction) {
    let clickedElement = event.target.nodeName;
    let parent;

    if (clickedElement === 'BUTTON') {
      parent=event.target.parentElement
    } else if (clickedElement ==='svg'){
      parent = event.target.parentElement.parentElement
    } else {
      parent = event.target.parentElement.parentElement.parentElement;
    }

    let carousel = parent.childNodes[1];
    let incrementer = 869.32*(4);
    if (direction === 'left') {
      incrementer = incrementer*-1;
    }
    let scrollPosition = carousel.scrollLeft
    carousel.scrollTo({
      top: 0,
      left: (scrollPosition + incrementer),
      behavior: 'smooth'
      });
  }


  render() {
    return (
      <CarouselGrid>
        <NavButton onClick={(event) => {this.handleScrollClick(event, 'left')}}>{arrowLeft}</NavButton>
        <CarouselDiv>
            {this.props.similarItems.map((item,i) => {
              return <CarouselItem key={i} itemObj={item}/>})}
        </CarouselDiv>
        <NavButton onClick={(event) => {this.handleScrollClick(event, 'right')}}>{arrowRight}</NavButton>
      </CarouselGrid>
    )
  }
}

export default Carousel;