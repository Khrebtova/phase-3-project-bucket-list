import React from 'react'
import { dataURL, headers } from '../Global'
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, TextField, Button, Select, MenuItem, FormControl, InputLabel, containerClasses } from '@mui/material'

const SubmitButton = styled(Button)({
    backgroundColor: 'paper',
    color: 'white',
    fontSize: '1.5rem',
    border: '1px solid white',
    height: 56,
    width: 100,
  })

const NewCategoryForm = ({onHandleAddCategory, categories}) => {
    const navigate = useNavigate();  
  
    const defaultData = {"name": "" }  
    
    const [newItem, setNewItem] = React.useState(defaultData)
        
    const handleChange = (e) => {
      let key = e.target.name;
      let value = e.target.value.toLowerCase();
      let formData = { ...newItem, [key]: value };
      setNewItem(formData);  
    } 
    
    const handleSubmit = (e) => {
      e.preventDefault()      
      const check = categories.find(category => category.name === newItem.name)
      
      if (newItem.name === '' ) {
        alert('Please enter a name of a category')
      } else if (check) {
        alert('Category already exists')
      }else {
        fetch(`${dataURL}/categories`, {
          method: 'POST',
          headers,
          body: JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data => {
          onHandleAddCategory(data)
          navigate(`/${data.name}`)  
        })
        .catch(err => console.log(err))
      }
      setNewItem(defaultData)       
    }    
     
    return (
      <div>   
        <Box sx={{display: 'flex', flexWrap: 'wrap', maxWidth: 600, mb: 1, mt: 1, ml: 50, backgroundColor: 'primary.light'}}>
            <FormControl sx={{ m: 1, width: 465, mt: 3, bgcolor: 'background.paper'  }}>
                <TextField variant="outlined" label="Enter new Category" name="name" onChange={handleChange} value = {newItem.name}/>
            </FormControl>    
          
            <FormControl sx={{ m: 1, width: 50, mt: 3 }}>
                <SubmitButton type="submit" variant="outlined" color="primary" size="large" onClick={handleSubmit} >Add</SubmitButton>
            </FormControl> 
        </Box>    
      </div>
    )
}

export default NewCategoryForm