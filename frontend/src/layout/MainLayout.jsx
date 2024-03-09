import { Fragment } from "react"
import { Header } from "../components/Layout/Header/Header"
import { Footer } from "../components/Layout/Footer/Footer"
import Policy from "../components/Layout/Policy/Policy"
import Proptypes from "prop-types"

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <Header></Header>
      {children}
      <Policy></Policy>
      <Footer></Footer>
    </Fragment>
  )
}

export default MainLayout

MainLayout.propTypes = {
  children: Proptypes.node
};