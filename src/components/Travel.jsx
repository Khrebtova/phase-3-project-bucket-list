import React from 'react';
import BucketList from './BucketList';


const Travel = ({list, onHandleDelete, onHandleEditItem}) => {
  const displayList = list.filter(item => item.category.name === 'travel')
  const title = 'Travel'
  
  return (
    <BucketList displayList={displayList} title = {title} onHandleDelete={onHandleDelete} onHandleEditItem={onHandleEditItem}/>
  )
}

export default Travel