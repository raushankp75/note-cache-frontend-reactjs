import React, { useState } from 'react'
import { Box, Button, CardMedia, Grid, Paper, TextField, Typography } from '@mui/material'
import loginSignupBg from '../../assets/login-signup-bg.jpg'
import { Link } from 'react-router-dom'
import profileUpload from '../../assets/profile-upload.png'
import ErrorMessage from '../../components/ErrorMessage'
import axios from 'axios'
import Loader from '../../components/Loader'

const Signup = () => {

  // signup data
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // for profile pic image
  const [pic, setPic] = useState("https://www.pngmart.com/files/22/User-Avatar-Profile-Download-PNG-Isolated-Image.png");

  // for profile pic success or error message
  const [picMessage, setPicMessage] = useState(null)

  // for success message
  const [message, setMessage] = useState(null);

  // for error
  const [error, setError] = useState(false);

  // for loading
  const [loading, setLoading] = useState(false);



  // input field change function
  const handleValueChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value })
  }



  const handleSignup = async (e) => {
    e.preventDefault()
    console.log(signupData)
    console.log(pic)

    if (signupData.password !== signupData.confirmPassword) {
      setMessage('Password and Confirm password do not match')
    } else {
      setError(null)
      try {
        const config = {
          headers: {
            "Content-Type": "application/json"
          }
        }

        setLoading(true)
        const { data } = await axios.post("http://localhost:8000/api/users", signupData, {
          config
        });
        // setMessage('Signup successfully!')
        console.log(data)
        setLoading(false)
      } catch (error) {
        setError(error.response.data.message)
        setLoading(false)
      }

    }
  }



  // posting pic to cloudinary
  const postDetails = (image) => {
    // setPicMessage(null)

    if (!image) {
      return setPicMessage("Please select an image");
    }
    setPicMessage(null);

    if (image.type === 'image/jpeg' || image.type === 'image/png') {
      const data = new FormData();
      data.append('file', image)
      data.append('upload_preset', 'notecache')
      data.append('cloud_name', 'raushancloud')

      fetch('https://api.cloudinary.com/v1_1/raushancloud/image/upload',
        {
          method: 'post',
          body: data
        }
      ).then(res => {
        return res.json()
      })
        .then(data => {
          // console.log(data.url)
          // setImageUrl(data.url)
          console.log(data)
          setPic(data.url.toString());
        })
        .catch(err => console.log(err))
    }else{
      return setPicMessage('Please select an image');
    }
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

        {error && <ErrorMessage severity="error">{error}</ErrorMessage>}
        {message && <ErrorMessage severity="error">{message}</ErrorMessage>}
        {loading && <Loader />}
        <form>
          <TextField variant='standard' type='name' name='name' value={signupData.name} onChange={handleValueChange} sx={{ margin: '10px 0', borderBottom: '2px solid blue' }} label='Name' placeholder='Enter name' fullWidth required />
          <TextField variant='standard' type='email' name='email' value={signupData.email} onChange={handleValueChange} sx={{ margin: '10px 0', borderBottom: '2px solid blue' }} label='Email' placeholder='Enter email' fullWidth required />
          <TextField variant='standard' type='password' name='password' value={signupData.password} onChange={handleValueChange} sx={{ margin: '10px 0', borderBottom: '2px solid blue' }} label='Password' placeholder='Enter password' fullWidth required />
          <TextField variant='standard' type='password' name='confirmPassword' value={signupData.confirmPassword} onChange={handleValueChange} sx={{ margin: '10px 0', borderBottom: '2px solid blue' }} label='Confirm Password' placeholder='Enter confirm password' fullWidth required />

          {/* For select and upload and show image */}
          {picMessage && (
            <ErrorMessage severity="error">{picMessage}</ErrorMessage>
          )}
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
                  postDetails(event.target.files[0])
                }}
              />
            </Button>

            <Typography>Please select a profile pic</Typography>


          </Box>


          <Button type='submit' onClick={handleSignup} color='primary' variant="contained" sx={{ margin: '10px 0' }} fullWidth>Signup</Button>

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