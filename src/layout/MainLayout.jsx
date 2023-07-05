import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Box, Typography } from '@mui/material'

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Box sx={{ display: 'flex', flexDirection:'column', padding:{xs:'70px 4px', lg:'80px 250px'}, overflowX: 'hidden', minHeight: '72vh', maxWidth:'100%' }}>
                {children}
            </Box>
            <Footer />
        </>
    )
}

export default MainLayout
