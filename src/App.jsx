import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './layout/MainLayout'
import LandingPage from './pages/auth/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainLayout>
        <LandingPage />
      </MainLayout>
    </>
  )
}

export default App
