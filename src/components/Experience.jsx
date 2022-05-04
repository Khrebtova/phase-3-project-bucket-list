import React from 'react'
import Item from './Item'

const Experience = ({list}) => {
  const displayList = list.filter(item => item.category.name === 'experience')
  console.log("experience List", displayList)
  return (
    <div>
      {displayList.map(item => <Item key= {item.id} item ={item}/>)}
    </div>
  )
}

export default Experience