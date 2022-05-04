import React from 'react'
import { Button } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {

    const navigate = useNavigate()

    const handleClick = (e) => {
        console.log(e.target.id, e.target.name)
        if (e.target.name === 'homepage') {
            navigate('/')
        } else{
            navigate(`/${e.target.name}`)
        }
    }

    return (

        <nav className='navbar'>
            <Button onClick={handleClick} name ="homepage" id = "homepage">Home</Button>
            <Button onClick={handleClick} name ="lifestyle" id="2">Lifestyle</Button>
            <Button onClick={handleClick} name ="travel" id="1">travel</Button>
            <Button onClick={handleClick} name ="experience" id="3">Experience</Button>
            
        </nav>
    )
}

export default Header