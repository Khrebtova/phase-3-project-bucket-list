import React from 'react'
import {Box, Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();
    
    const handleClick = (e) => {
        e.target.name === 'home' ? navigate('/') : navigate(`/${e.target.name}`)
     }
        
    return (
        <Box sx={{display: 'block', maxWidth: 600, mb: 1, mt: 1}}>
            <Stack direction="row" spacing={8}>
                <Button variant="contained" size="large" name="home" onClick={handleClick} >Home</Button>            
                <Button variant="contained" size="large" name="travel" onClick={handleClick} >Travel</Button>
                <Button variant="contained" size="large" name="lifestyle" onClick={handleClick} >LifeStyle</Button>
                <Button variant="contained" size="large" name="experience" onClick={handleClick} >Experience</Button>
            </Stack>
        </Box>
    )
}

export default Header