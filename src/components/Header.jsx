import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Box, Button, Stack } from '@mui/material'

const Header = ({categories}) => {
    const navigate = useNavigate();
    
    const handleClick = (e) => {
        if (e.target.name === 'home'){
            navigate('/')
            document.title = "Bucket List | Home";
        } else{
            navigate(`/${e.target.name}`)
            document.title = `Bucket List | ${e.target.name}`
        }
     }
    const categoryButton = categories.map(category => <Button variant="contained" key={category.id} name={category.name} onClick={handleClick} >{category.name.toUpperCase()}</Button>) 

    return (
        <Box  sx={{display: 'block', maxWidth: 600,  ml: 50, mb: 1, mt: 1}}>
            <Stack direction="row" spacing={8}>
                <Button variant="contained" size="large" name="home" onClick={handleClick} >Home</Button>
                {categoryButton}            
            </Stack>
        </Box>
    )
}

export default Header