import { Fragment } from "react"
import { Header } from "../components/Layout/Header/Header"
import Categories from "../components/Categories/Categories"
import Products from "../components/Products/Products"
import CampaignSingle from "../components/CampaignSingle/CampaignSingle"
import Policy from "../components/Layout/Policy/Policy"
import { Footer } from "../components/Layout/Footer/Footer"


const ShopPage = () => {
  return (
    <Fragment>
      <Header></Header>
      <Categories></Categories>
      <Products></Products>
      <CampaignSingle></CampaignSingle>
      <Products></Products>
      <Policy></Policy>
      <Footer></Footer>
    </Fragment>
  )
}

export default ShopPage