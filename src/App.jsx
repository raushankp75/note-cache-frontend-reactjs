import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import LandingPage from './pages/auth/LandingPage'
import MyNotes from './pages/notes/MyNotes'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'

function App() {

  return (
    <>
      <MainLayout>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/mynotes' element={<MyNotes />} />
        </Routes>
      </MainLayout>
    </>
  )
}

export default App
