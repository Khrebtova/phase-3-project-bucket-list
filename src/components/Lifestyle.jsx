import React from 'react'
import Item from './Item'

const Lifestyle = ({list}) => {
  const displayList = list.filter(item => item.category.name === 'lifestyle')
  return (
    <div>
      {displayList.map(item => <Item key= {item.id} item ={item}/>)}
    </div>
  )
}

export default Lifestyle