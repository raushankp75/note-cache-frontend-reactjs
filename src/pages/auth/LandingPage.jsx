import { Box, Button, Link, Typography } from '@mui/material'
import React from 'react'

const LandingPage = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent:'center', alignItems:'center' }}>
            <Box sx={{ display:'flex', flexDirection:'column', gap:'30px' }}>
                <Typography sx={{ textAlign: 'center', fontSize: { xs: '28px', lg: '50px' }, fontWeight: 'bold' }}>Tame your work, organize your life</Typography>
                <Typography sx={{ textAlign: 'center', fontSize: { xs: '16px', lg: '24px' } }}>Remember everything and tackle any project with your notes, tasks, and schedule all in one place.</Typography>

                {/* login and signup button */}
                <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'30px' }}>
                    <Button variant='contained' sx={{ padding:'10px 100px', backgroundColor:'green', color:'white', }}><Link sx={{ color: 'white', textDecoration: 'none', fontFamily:'sans-serif' }} href='#'>Signup</Link></Button>
                    <Link sx={{ fontSize:'18px', fontFamily:'sans-serif' }} href=''>Already have an account? Log In</Link> 
                </Box>
            </Box>
        </Box>
    )
}

export default LandingPage