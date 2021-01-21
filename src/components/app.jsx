import React from 'react';
import Carousel from './Carousel.jsx';
import SortForm from './SortForm.jsx';
import {similarItemsRequest, sampleData} from '../apiRequest.js';
import styled from 'styled-components';

const BodyContainer = styled.div`
  font-family: 'Roboto', sans-serif;
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

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      sortParam: 'category',
      mainProductInfo: sampleData,
      similarItems: []
    }
    this.onSortParamChange = this.onSortParamChange.bind(this);
    this.onSort = this.onSort.bind(this);
  }

  componentDidMount () {
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
      <BodyContainer>
        <SortForm
          sortParam={this.state.sortParam}
          onSortParamChange={this.onSortParamChange}
          onSort={this.onSort} /><br></br>
          <Carousel similarItems={this.state.similarItems} />
      </BodyContainer>
    );
  }
}

export default App;