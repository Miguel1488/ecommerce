import { useState } from 'react'
import './styles.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Purchases from './pages/Purchases'
import Login from './pages/Login'
import Product from './pages/Product'
import AppNavbar from './components/AppNavbar'
import LoadingScreen from './components/LoadingScreen'



function App() {
  const [count, setCount] = useState(0)
  const isLoading = useSelector(state => state.isLoading);

  return (

    <HashRouter>
         {isLoading && <LoadingScreen />}
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:id" element={<Product />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  )
}
import { useSelector } from 'react-redux'

export default App
