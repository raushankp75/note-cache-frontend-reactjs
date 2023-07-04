import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '28px 4px', overflowX: 'hidden', minHeight:'80vh' }}>
                {children}
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default MainLayout
