import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const Header = () => {
    
        
    return (

        <nav className='navbar'>
            <Button variant="outlined"><Link to="/">Home</Link></Button>
            
            <Button variant="outlined"><Link to="/travel">Travel</Link></Button>
            <Button variant="outlined"><Link to="/lifestyle">Lifestyle</Link></Button>
            <Button variant="outlined"><Link to="/experience">Experience</Link></Button>       
        </nav>
    )
}

export default Header