import React from 'react'
import PageLayout from '../../layout/PageLayout'
import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import loginSignupBg from '../../assets/login-signup-bg.jpg'
import { Link } from 'react-router-dom'

const Login = () => {

  // const backgroundNotesImage = 'https://cdn1.byjus.com/wp-content/uploads/blog/2022/07/06164448/Blog-Banner-800x400-2.jpg'

  return (
    <div style={{ background: `url(${loginSignupBg})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 82vh', height: '82vh', width: '100%', display: 'flex', flexDirection:'column', justifyContent: 'center' }}>
      <Paper sx={{ width: { xs: '80%', md: '40%' }, padding: { xs: '5% 5%', md: '20px 70px' }, margin: { xs: '0px 5%', md: '0' } }}>
      <Typography sx={{ fontSize:'25px' }}>Log in to your account</Typography>
        <form>
          <TextField variant='standard' sx={{ margin: '10px 0', borderBottom: '2px solid blue' }} type='email' name='email' label='Email' placeholder='Enter email' fullWidth required />
          <TextField variant='standard' sx={{ margin: '10px 0', borderBottom: '2px solid blue' }} type='password' name='password' label='Password' placeholder='Enter password' fullWidth required />

          <Button type='submit' color='primary' variant="contained" sx={{ margin: '10px 0' }} fullWidth>Login</Button>

          {/* <Typography sx={{ textAlign: 'center', fontSize: '13px', margin: '5px 0' }}>OR</Typography> */}

          <Typography sx={{ fontSize: '13px', margin: '12px 0' }}> Don't have an account?
            <Link to="/signup" > Sign Up </Link>
          </Typography>
        </form>
      </Paper>
    </div>
  )
}

export default Login