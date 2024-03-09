import { Fragment } from "react"
import Categories from "../components/Categories/Categories"
import Products from "../components/Products/Products"
import CampaignSingle from "../components/CampaignSingle/CampaignSingle"


const ShopPage = () => {
  return (
    <Fragment>
      <Categories></Categories>
      <Products></Products>
      <CampaignSingle></CampaignSingle>
      <Products></Products>
    </Fragment>
  )
}

export default ShopPage