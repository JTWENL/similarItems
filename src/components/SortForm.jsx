import React from 'react';

let SortForm = (props) => {

  return(
    <div>
    <form
      onChange={props.onSortParamChange}
      onSubmit={(event)=>{props.onSort(event)}}
      value={props.sortParam}>
        <label>Sort Products By: </label>
      <select>
        <option value='category'>Category</option>
        <option value='isSale'>On Sale</option>
        <option value='isFresh'>New</option>
        <option value='shortDescription'>By Color</option>
        <option value='liked'>Products I Liked</option>
        <option value='averageRating'>Average Rating</option>
      </select>
      <button type="submit">Sort</button>
    </form>
  </div>
  )
}

export default SortForm;