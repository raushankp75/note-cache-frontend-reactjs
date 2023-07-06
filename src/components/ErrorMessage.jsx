import React from 'react'
import { Alert } from '@mui/material'

const ErrorMessage = ({ severity = "info", children }) => {
    return (
        <Alert severity={severity} style={{ fontSize:'20px' }}>
            <strong>{children}</strong>
        </Alert>
    )
}

export default ErrorMessage