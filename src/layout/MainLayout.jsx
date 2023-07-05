import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main style={{ display: 'flex',  justifyContent: 'center', padding: '80px 4px', overflowX: 'hidden', minHeight:'78vh' }}>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default MainLayout
