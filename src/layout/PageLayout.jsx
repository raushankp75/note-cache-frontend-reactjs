import { Box, Typography } from '@mui/material'
import React from 'react'

const PageLayout = ({ title, children }) => {
    return (
        <>
            {title && (
                <>
                    <Typography sx={{fontSize:'30px'}}>{title}</Typography>
                    {/* <hr style={{width:'100%'}} /> */}
                </>
            )}

            {children}
        </>
    )
}

export default PageLayout