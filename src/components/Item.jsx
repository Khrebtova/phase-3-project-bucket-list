import React from 'react'
import { dataURL, headers } from '../Global';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';


const Item = ({item, onHandleDelete, onHandleEditItem}) => {
  let markedComplete = item.completed;

  const handleDelete = () => {
    console.log(`delete ${item.name}`)
    fetch(`${dataURL}/${item.id}`, {
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => onHandleDelete(data.id))
    .catch(err => console.log(err))  
  }

  const handleEdit = () => {   
    fetch(`${dataURL}/${item.id}`, {
      method: 'PATCH',
      headers: headers,
      body: JSON.stringify({
        "completed": !markedComplete
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      onHandleEditItem(data)
    })
    .catch(err => console.log(err))
  }

  return (
    <ListItem>
      <Checkbox onChange={handleEdit} checked={markedComplete}/>
      <ListItemText primary={item.name} secondary={markedComplete? "WOOO! I've Done it" : "can't wait to do this"} />
      <IconButton aria-label="delete" size="small" onClick={handleDelete}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </ListItem>


  )
}

export default Item