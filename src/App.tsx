import './App.css'
import NavBar from './NavBar'
import Homeslider from './slider'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {


  return (
    <BrowserRouter
      basename={import.meta.env.DEV ? '/' : '/slashit23/'}
    >
      <Routes>
        <Route
          path='/'
          element={
            <div className="container mx-auto">
              <NavBar />
              <Homeslider />
            </div>
          }
        />
        
      </Routes>
    </BrowserRouter>

  )
}

export default App
