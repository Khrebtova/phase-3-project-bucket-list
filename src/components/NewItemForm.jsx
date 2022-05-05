import React from 'react'
import { dataURL, headers } from '../Global'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
// import { Box, TextField, Button, Select, InputLabel, MenuItem, FormHelperText, FormControl, FormGroup, FormLabel } from '@mui/material'


const NewItemForm = ({onHandleAddItem}) => {
  const navigate = useNavigate();  

  const defaultData = {
    "name": "",
    "category_id": "1"
  }
  const [newItem, setNewItem] = React.useState(defaultData)
  
  const handleChange = (e) => {
    let key = e.target.name;
    let value = e.target.value;
    let formData = { ...newItem, [key]: value };
    setNewItem(formData);  
  } 

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch(dataURL, {
      method: 'POST',
      headers,
      body: JSON.stringify(newItem)
    })
    .then(res => res.json())
    .then(data => {
      onHandleAddItem(data)
      if (data.category_id === 1) { navigate('/travel') }
      else if (data.category_id === 2){ navigate('/lifestyle')} 
      else {navigate('/experience')}    
    })
    .catch(err => console.log(err))
    
    setNewItem(defaultData) 
  }

  return (
    <Box sx={{maxWidth: 600, height: 50, backgroundColor: 'primary.main', mb: 1, mt: 2 }}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="enter new item" onChange={handleChange} value = {newItem.name}/>
        <label>
          Choose a category
          <select name="category_id" onChange={handleChange} value = {newItem.category_id}>
            <option value={1}>Travel</option>
            <option value={2}>LifeStyle</option>
            <option value={3}>Experience</option>
          </select>
        </label>        
        <button type="submit">Add</button>
      </form>
    </Box >

    // <div>
    //   <FormControl sx={{ m: 1, minWidth: 120 }} required={true} row >
    //     <InputLabel htmlFor="name">
    //       <TextField id="name" name="name" label="Name" onChange={handleChange} />
    //     </InputLabel>
    //   </FormControl>
    //   <FormControl sx={{ m: 1, minWidth: 120 }} required={true} row >
    //     <InputLabel >Category
    //       <Select label="Category" onChange={handleChange} >
    //         <MenuItem value={1}>Travel</MenuItem>
    //         <MenuItem value={2}>Lifestyle</MenuItem>
    //         <MenuItem value={3}>Experience</MenuItem>
    //       </Select>
    //     </InputLabel>        
    //   </FormControl>
    // </div>
    
   
  )
}

export default NewItemForm