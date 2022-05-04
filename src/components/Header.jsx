import React from 'react'
import { Button } from '@mui/material'

const Header = () => {
    const handleClick = (e) => {
        console.log(e.target.id, e.target.name)
    }

    return (

        <nav className='navbar'>
            <Button onClick={handleClick} name ="bucketlist" id = "bucketlist">Home</Button>
            <Button onClick={handleClick} name ="lifestyle" id="2">Lifestyle</Button>
            <Button onClick={handleClick} name ="travel" id="1">travel</Button>
            <Button onClick={handleClick} name ="experience" id="3">Experience</Button>
            
        </nav>
    )
}

export default Header