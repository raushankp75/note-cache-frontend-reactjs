import { AppBar, Box, Button, FormControl, IconButton, Menu, MenuItem, Stack, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    // for menu component
    const [menuToggle, setMenuToggle] = useState(null)
    const open = Boolean(menuToggle)

    const handleClick = (event) => {
        setMenuToggle(event.currentTarget)
    }

    const handleClose = () => {
        setMenuToggle(null)
    }

    return (
        <AppBar sx={{
            padding: {
                xs: '0px 5px', // 0 above
                sm: '0px 5px', // 600 above
                md: '0px 5px', // 900 above
                lg: '0px 300px', // 1200 above
                xl: '0px 300px' // 1536 above
            }
        }}>
            <Toolbar sx={{ display: 'flex', gap: '10px', justifyContent: 'space-between' }}>
                <IconButton sx={{ fontSize: { xs: '20px', lg: '35px' } }} edge='start' color='inherit' aria-level='logo' ><Link to='/' style={{ color: 'white', textDecoration: 'none', fontFamily: 'sans-serif' }} >Note Cache</Link></IconButton>


                <Box sx={{ display: 'flex', gap: { xs: '20px', lg: '50px' }, justifyContent: 'center', alignItems: 'center' }}>
                    <Link to='/mynotes' style={{ color: 'white', textDecoration: 'none', fontFamily: 'sans-serif' }} >My Notes</Link>

                    <Box>
                        <Typography
                            color='inherit'
                            id='resources-button'
                            onClick={handleClick}
                            aria-control={open ? 'resources-menu' : undefined}
                            aria-haspopup='true'
                            aria-expanded={open ? 'true' : undefined}
                            sx={{ position: 'relative', cursor: 'pointer' }}
                        >
                            Raushan Kumar
                        </Typography>

                        {/* menu component */}
                        <Menu
                            id='resources-menu'
                            menuToggle={menuToggle}
                            open={open}
                            MenuListProps={{
                                'aria-labelledby': 'resources-button'
                            }}
                            onClose={handleClose}
                            sx={{ position: 'absolute', top: '-78%', left: '70%' }}
                        >
                            <MenuItem onClick={handleClose}> <Link to='/myprofile' style={{ color: 'black', textDecoration: 'none', fontFamily: 'sans-serif' }} >Profile</Link> </MenuItem>
                            <MenuItem onClick={handleClose}><Link to='/' style={{ color: 'black', textDecoration: 'none', fontFamily: 'sans-serif' }} >Logout</Link></MenuItem>
                        </Menu>
                    </Box>

                </Box>



            </Toolbar>
        </AppBar>
    )
}

export default Header