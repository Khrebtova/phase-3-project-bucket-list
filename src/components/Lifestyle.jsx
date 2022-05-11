import React from 'react';
import BucketList from './BucketList';

const Lifestyle = ({list, onHandleDelete, onHandleEditItem}) => {
  const displayList = list.filter(item => item.category.name === 'lifestyle')
  const title = 'LifeStyle'
  
  return (
    <BucketList displayList={displayList} title = {title} onHandleDelete={onHandleDelete} onHandleEditItem={onHandleEditItem}/>
  )
}

export default Lifestyle