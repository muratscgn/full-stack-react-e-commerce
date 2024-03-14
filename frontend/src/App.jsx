import React from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ContactPage from './pages/ContactPage'
import AccountPage from './pages/AccountPage'
import CartPage from './pages/CartPage'
import BlogPage from './pages/BlogPage'
import BlogDetailPage from './pages/BlogDetailPage'
import ProductDetailPage from './pages/ProductDetailPage'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function App() {

  return (
    <>
      <React.Fragment>
        {/* <HomePage></HomePage> */}
        {/* <ShopPage></ShopPage> */}
        {/* <ContactPage></ContactPage> */}
        {/* <AccountPage></AccountPage> */}
        <CartPage></CartPage>
        {/* <BlogPage></BlogPage> */}
        {/* <BlogDetailPage></BlogDetailPage> */}
        {/* <ProductDetailPage></ProductDetailPage> */}
      </React.Fragment>
    </>
  )
}

export default App
