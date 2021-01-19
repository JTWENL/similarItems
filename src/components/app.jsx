import React from 'react';
import CarouselItem from './CarouselItem.jsx';


class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      sortParam: 'category'
    }
    this.onSortParamChange = this.onSortParamChange.bind(this);
  }

  onSortParamChange (event) {
    event.preventDefault();
    this.setState({sortParam: event.target.value})
  }

  render() {
    return(
      <div>
        <div>
          <form
            onChange={this.onSortParamChange}
            value={this.state.sortParam}>
              <label>Sort Products By: </label>
            <select>
              <option value='category'>Category</option>
              <option value='isSale'>On Sale</option>
              <option value='shortDescription'>By Color</option>
              <option value='liked'>Products I Liked</option>
              <option value='averageRating'>Average Rating</option>
            </select>
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