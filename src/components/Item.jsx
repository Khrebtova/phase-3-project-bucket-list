import React from 'react'

const Item = ({item}) => {
  return (
    <li>
      <h3>{item.name}</h3>
      <p>{item.category.name}</p>
      <label>
        <input type="checkbox" checked={item.completed}></input>
        Completed
      </label>
      <button id="delete">Delete</button>
    </li>
  )
}

export default Item