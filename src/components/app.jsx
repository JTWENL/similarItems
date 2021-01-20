import React from 'react';
import Carousel from './Carousel.jsx';
import SortForm from './SortForm.jsx';
import {similarItemsRequest} from '../apiRequest.js';
import styled from 'styled-components';

const CarouselStyle = styled.div`
  background-color: white;
  display: flex;
  align-items: flex-end;
  overflow: scroll;
`

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      sortParam: 'category',
      mainProductInfo: {'category': 'Tools'},
      similarItems: []
    }
    this.onSortParamChange = this.onSortParamChange.bind(this);
    this.onSort = this.onSort.bind(this);
  }

  onSortParamChange (event) {
    event.preventDefault();
    this.setState({sortParam: event.target.value})
  }

  onSort (event) {
    event.preventDefault();
    //apiRequest
    let col = this.state.sortParam;
    let value = this.state.mainProductInfo[col];
    similarItemsRequest(col, value)
      .then((data) => {
        this.setState({
          similarItems: data
        })
      })
      .catch(err => {alert(err)})
  }



  render() {
    return(
      <div>
        <SortForm
          sortParam={this.state.sortParam}
          onSortParamChange={this.onSortParamChange}
          onSort={this.onSort} /><br></br>
        <CarouselStyle>
          <Carousel similarItems={this.state.similarItems} />
        </CarouselStyle>
      </div>
    );
  }
}

export default App;