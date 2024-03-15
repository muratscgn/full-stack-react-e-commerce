import './App.css'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import BlogPage from './pages/BlogPage'
import ContactPage from './pages/ContactPage'
import CartPage from './pages/CartPage'
import AccountPage from './pages/AccountPage'
import ProductDetailPage from './pages/ProductDetailPage'
import BlogDetailPage from './pages/BlogDetailPage'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/account' element={<AccountPage />} />
        <Route path='/product/:id' element={<ProductDetailPage />} />
        <Route path='/blog/:id' element={<BlogDetailPage />} />
      </Routes>
    </>
  )
}

export default App
