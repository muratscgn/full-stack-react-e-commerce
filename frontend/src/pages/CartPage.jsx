import { Fragment } from "react"
import { Header } from "../components/Layout/Header/Header"
import Cart from "../components/Cart/Cart"
import Policy from "../components/Layout/Policy/Policy"
import { Footer } from "../components/Layout/Footer/Footer"


const CartPage = () => {
  return (
    <Fragment>
      <Header></Header>
      <Cart></Cart>
      <Policy></Policy>
      <Footer></Footer>
    </Fragment>
  )
}

export default CartPage