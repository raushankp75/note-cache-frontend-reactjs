import React, { useState } from 'react'
import { Box, Button, CardMedia, Grid, Paper, TextField, Typography } from '@mui/material'
import loginSignupBg from '../../assets/login-signup-bg.jpg'
import { Link } from 'react-router-dom'
import profileUpload from '../../assets/profile-upload.png'

const Signup = () => {

  // signup data
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [image, setImage] = useState("");


  // input field change function
  const handleValueChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value })
  }



  // load image to show
  const loadfile = (event) => {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.onload = function () {
      URL.revokeObjectURL(output.src) // free memory
    }
  }



  return (
    <div style={{ background: `url(${loginSignupBg})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 82vh', height: '82vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Paper elevation={4} sx={{ width: { xs: '80%', md: '40%' }, padding: { xs: '5% 5%', md: '20px 70px' }, margin: { xs: '0px 5%', md: '0' } }}>
        <Typography sx={{ fontSize: '25px' }}>Signup</Typography>
        <form>
          <TextField variant='standard' type='name' name='name' value={signupData.name} onChange={handleValueChange} sx={{ margin: '10px 0', borderBottom: '2px solid blue' }} label='Name' placeholder='Enter name' fullWidth required />
          <TextField variant='standard' type='email' name='email' value={signupData.email} onChange={handleValueChange} sx={{ margin: '10px 0', borderBottom: '2px solid blue' }} label='Email' placeholder='Enter email' fullWidth required />
          <TextField variant='standard' type='password' name='password' value={signupData.password} onChange={handleValueChange} sx={{ margin: '10px 0', borderBottom: '2px solid blue' }} label='Password' placeholder='Enter password' fullWidth required />
          <TextField variant='standard' type='password' name='confirmPassword' value={signupData.confirmPassword} onChange={handleValueChange} sx={{ margin: '10px 0', borderBottom: '2px solid blue' }} label='Confirm Password' placeholder='Enter confirm password' fullWidth required />

          {/* For select and upload and show image */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
            <Button
              // variant="contained"
              component="label"
              sx={{ width: 'fill' }}
            >
              {/* Click here to select a profile pic */}
              <CardMedia
                component='img'
                image={profileUpload}
                alt=''
                sx={{ height: '70px', width: '80px', objectFit: 'fill', border: '1px solid white', outline: 'none' }}
                id='output'
              />
              <input
                type="file"
                hidden
                accept='image/*'
                onChange={(event) => {
                  loadfile(event);
                  setImage(event.target.files[0])
                }}
              />
            </Button>

            <Typography>Please select a profile pic</Typography>


          </Box>


          <Button type='submit' color='primary' variant="contained" sx={{ margin: '10px 0' }} fullWidth>Signup</Button>

          {/* <Typography sx={{ textAlign: 'center', fontSize: '13px', margin: '5px 0' }}>OR</Typography> */}

          <Typography sx={{ fontSize: '13px', margin: '12px 0' }}> Already signup?
            <Link to="/login" > Log In </Link>
          </Typography>
        </form>
      </Paper>
    </div>
  )
}

export default Signup