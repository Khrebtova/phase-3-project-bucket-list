import React from 'react'

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';


const Item = ({item}) => {
  return (
    <ListItem>
      <Checkbox label="Enable secondary text"/>
      <ListItemText primary={item.name} secondary={item.completed? "WOOO! I've Done it" : "can't wait to do this"} />
      <IconButton aria-label="delete" size="small">
        <DeleteIcon fontSize="small" />
      </IconButton>
    </ListItem>


    // <li>
    //   <h3>{item.name}</h3>
    //   <p>{item.category.name}</p>
    //   <label>
    //     <input type="checkbox" checked={item.completed}></input>
    //     Completed
    //   </label>
    //   <button id="delete">Delete</button>
    // </li>
  )
}

export default Item