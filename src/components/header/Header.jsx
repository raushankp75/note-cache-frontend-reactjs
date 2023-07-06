import { AppBar, Box, Button, FormControl, IconButton, Menu, MenuItem, Stack, TextField, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../redux/actions/userActions'

const Header = () => {
    // for pushing to login page
    const navigate = useNavigate()

    // for redux - use to call our actions for api
    const dispatch = useDispatch();

    // for redux - use to access our state -- userLogin is the name that is written inside the combineReducers in STORE.js
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin




    // for logout
    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    }
    



    // for menu component - start
    const [menuToggle, setMenuToggle] = useState(null)
    const open = Boolean(menuToggle)

    const handleClick = (event) => {
        setMenuToggle(event.currentTarget)
    }

    const handleClose = () => {
        setMenuToggle(null)
    }
    // for menu component - end






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
                            {/* for logout */}
                            <MenuItem onClick={() => {
                                handleClose()
                                handleLogout()
                                // localStorage.removeItem('userInfo');
                                // navigate('/');
                            }}>
                                Logout
                            </MenuItem>
                        </Menu>
                    </Box>

                </Box>



            </Toolbar>
        </AppBar>
    )
}

export default Header