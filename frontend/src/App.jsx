import Categories from './components/Categories/Categories'
import { Footer } from './components/Layout/Footer/Footer'
import { Header } from './components/Layout/Header/Header'
import Policy from './components/Layout/Policy/Policy'
import Products from './components/Products/Products'
import Slider from './components/Slider/Slider'
import './App.css'

function App() {

  return (
    <>
      <Header></Header>
      <Slider></Slider>
      <Categories></Categories>
      <Products></Products>
      <Policy></Policy>
      <Footer></Footer>
    </>
  )
}

export default App
