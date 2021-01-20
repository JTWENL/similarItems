import React from 'react';
import CarouselItem from './CarouselItem.jsx';
import {similarItemsRequest} from '../apiRequest.js';


class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      sortParam: 'category',
      mainProductInfo: {"category": 'Tools'},
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
        <div>
          <form
            onChange={this.onSortParamChange}
            onSubmit={(event)=>{this.onSort(event)}}
            value={this.state.sortParam}>
              <label>Sort Products By: </label>
            <select>
              <option value='category'>Category</option>
              <option value='isSale'>On Sale</option>
              <option value='shortDescription'>By Color</option>
              <option value='liked'>Products I Liked</option>
              <option value='averageRating'>Average Rating</option>
            </select>
            <button type="submit">Sort</button>
          </form>
        </div>
        <div className="carousel">
        <CarouselItem />
        </div>
      </div>
    );
  }
}

export default App;