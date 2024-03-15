import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import App from './App.jsx'
import './index.css'
import MainLayout from './layout/MainLayout.jsx'
import CartProvider from './context/CartProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
      <MainLayout>
        <App />
      </MainLayout>
    </CartProvider>
  </BrowserRouter>
)
