import React from 'react'

const Filter = (props) => {
  return (
    <div>
      <select onChange={(e) => props.filterSearch(e.target.value)}>
        <option value="increasing">Increasing Weight</option>
        <option value="decreasing">Decreasing Weight</option>
        <option value="greased">Greased</option>
      </select>
      <button onClick={props.changeHogs}>Filter</button>
    </div>
  )
}

export default Filter
