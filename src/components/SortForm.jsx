import React from 'react';
import styled from 'styled-components';

const Form = styled.div`
  margin: 25px 0px 0px 25px;
`

let SortForm = (props) => {
  return(
    <Form>
      <form
        onChange={props.onSortParamChange}
        onSubmit={(event)=>{props.onSort(event)}}
        value={props.sortParam}>
          <label>Similar
            Products By: </label>
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
  </Form>
  )
}

export default SortForm;