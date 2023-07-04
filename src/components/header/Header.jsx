import { AppBar, Box, Button, FormControl, IconButton, Link, Menu, MenuItem, Stack, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

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
            background: 'orange',
            padding: {
                xs: '0px 5px', // 0 above
                sm: '0px 5px', // 600 above
                md: '0px 5px', // 900 above
                lg: '0px 350px', // 1200 above
                xl: '0px 350px' // 1536 above
            }
        }}>
            <Toolbar sx={{ display: 'flex', gap: '10px', justifyContent: 'space-between' }}>
                <IconButton size='large' edge='start' color='inherit' aria-level='logo' >Note Cache</IconButton>


                <Box sx={{ display: 'flex', gap: '50px' }}>
                    <Link sx={{ color: 'white', textDecoration: 'none', fontFamily:'sans-serif' }} href='#'>My Notes</Link>

                    <Box>
                        <Typography
                            color='inherit'
                            id='resources-button'
                            onClick={handleClick}
                            aria-control={open ? 'resources-menu' : undefined}
                            aria-haspopup='true'
                            aria-expanded={open ? 'true' : undefined}
                            sx={{position:'relative', cursor:'pointer'}}
                        >
                            My Profile
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
                        sx={{ position:'absolute', top:'-78%', left:'70%' }}
                        >
                            <MenuItem onClick={handleClose}> <Link sx={{ color: 'black', textDecoration: 'none', fontFamily:'sans-serif' }} href='#'>Profile</Link> </MenuItem>
                            <MenuItem onClick={handleClose}><Link sx={{ color: 'black', textDecoration: 'none', fontFamily:'sans-serif' }} href='#'>Setting</Link></MenuItem>
                        </Menu>
                    </Box>

                </Box>



            </Toolbar>
        </AppBar>
    )
}

export default Header