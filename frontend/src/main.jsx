import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MainLayout from './layout/MainLayout.jsx'
import CartProvider from './context/CartProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <React.StrictMode>
      <MainLayout>
        <App />
      </MainLayout>
    </React.StrictMode>
  </CartProvider>,
)
