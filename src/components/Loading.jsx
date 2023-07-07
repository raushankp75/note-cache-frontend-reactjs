import React from 'react'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin, RotatingLines } from 'react-loader-spinner'
import { Box } from '@mui/material'


const Loading = () => {

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh" minWidth="100%" position="relative">
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </Box>
    )
}

export default Loading