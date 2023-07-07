import { Box, Button, Paper, TextField, TextareaAutosize, Typography } from '@mui/material'
import React from 'react'

const CreateNote = () => {
  return (
    <div style={{ height: '82vh', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={20} sx={{ width: { xs: '85%', md: '60%' }, padding: { xs: '6% 6%', md: '40px 40px' } }}>
        <Typography sx={{ fontSize: '25px' }}>Create Your Notes</Typography>

        {/* {error && <ErrorMessage severity="error">{error}</ErrorMessage>}
        {message && <ErrorMessage severity="error">{message}</ErrorMessage>}
        {loading && <Loader />} */}
        <form>
          <TextField variant='outlined' type='text' name='title' sx={{ margin: '10px 0', borderRadius:'5px' }} label='title' placeholder='Enter title' fullWidth />
          <TextareaAutosize
            name='content'
            minRows={3}
            maxRows={12}
            placeholder='Write a description...'
            style={{ padding:'10px 10px', width: '96%', fontSize: '16px', fontFamily: 'sans-serif', letterSpacing: '2px', borderRadius:'5px' }}
          />
          <TextField variant='outlined' type='text' name='category' sx={{ margin: '10px 0', borderRadius:'5px' }} label='category' placeholder='Enter category' fullWidth />

          <Box sx={{ display: 'flex', gap: '60px' }}>
            <Button type='submit' color='primary' variant="contained" sx={{ margin: '10px 0' }} fullWidth>Create Note</Button>
            <Button type='submit' color='error' variant="contained" sx={{ margin: '10px 0' }} fullWidth>Reset</Button>
          </Box>
        </form>
      </Paper>
    </div>
  )
}

export default CreateNote