import React from 'react';
import CarouselItem from './CarouselItem.jsx';
import styled from 'styled-components';

let NavLeftButton = styled.button`
  background-color: lightgrey;
  align-self: center;
  position: sticky;
`
let NavRightButton = styled.button`
  background-color: lightgrey;
  align-self: center;
  position: sticky
  right: 0;
`

const CarouselDiv= styled.div`
  background-color: white;
  display: flex;
  align-items: flex-end;
  overflow: scroll;
  width: 650px;
  height: auto;
  padding-left: 10px;
  padding-right: 10px;
`

class Carousel extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholder: true
    }
    this.handleScrollClick = this.handleScrollClick.bind(this);
  }

  handleScrollClick (event) {
    console.log(event.target.parentElement)
    CarouselDiv.scrollTo(100,0)
  }


  render() {
    return (
      <>
        <NavRightButton onClick={(event) => {this.handleScrollClick(event)}}>scroll left</NavRightButton>
        <CarouselDiv>
            {this.props.similarItems.map((item,i) => {
              return <CarouselItem key={i} itemObj={item}/>})}
        </CarouselDiv>
        <NavRightButton>scroll right</NavRightButton>
      </>
    )
  }
}

export default Carousel;