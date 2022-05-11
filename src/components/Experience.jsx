import React from 'react'
import BucketList from './BucketList';

const Experience = ({list, onHandleDelete, onHandleEditItem}) => {
  
  const displayList = list.filter(item => item.category.name === 'experience')
  const title = 'Experience'
  
  return (
      <BucketList displayList={displayList} title = {title} onHandleDelete={onHandleDelete} onHandleEditItem={onHandleEditItem}/>
  )
}

export default Experience