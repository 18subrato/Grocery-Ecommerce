import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import ProductDetails from './pages/ProductDetails'
import { ToastContainer } from 'react-toastify';
import Cart from './pages/Cart'
import ContactUs from './pages/ContactUs'
import AddAddress from './pages/AddAddress'
import Login from './pages/Login'
import Register from './pages/Register'
import EachCategory from './pages/EachCategory'
import Footer from './components/Footer'
import Orders from './pages/Orders'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ErrorPage from './pages/ErrorPage'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <>
      <div className='px-6'>
        <NavBar />
        <ToastContainer autoClose={2000} />
        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <Home/>
            </ProtectedRoute>
          } />
          <Route path='/products' element={
            <ProtectedRoute>
              <AllProducts/>
            </ProtectedRoute>
          } />
          <Route path='/products/:category/:id' element={<ProductDetails />} />
          <Route path='/products/:category' element={<EachCategory />} />
          <Route path='/cart' element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          } />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/add-address' element={<AddAddress />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/orders' element={
            <ProtectedRoute>
              <Orders/>
            </ProtectedRoute>
          } />
          <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
