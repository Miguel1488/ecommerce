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
  const isLoading = useSelector(state => state.isLoading);

  return (

    <HashRouter>
      {isLoading && <LoadingScreen />}
      <AppNavbar />

      <Container className="my-5">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products/:id" element={<Product />} />

        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/purchases" element={<Purchases />} />
        </Route>
      </Routes>
      </Container>
    </HashRouter>
  )
}
import { useSelector } from 'react-redux'
import ProtectedRoutes from './components/ProtectedRoutes'
import { Container } from 'react-bootstrap'

export default App
