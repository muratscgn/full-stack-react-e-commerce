import React from 'react'
import { Header } from '../components/Layout/Header/Header'
import Slider from '../components/Slider/Slider'
import Categories from '../components/Categories/Categories'
import Products from '../components/Products/Products'
import Campaigns from '../components/Campaigns/Campaigns'
import Blogs from '../components/Blogs/Blogs'
import Brands from '../components/Brands/Brands'
import CampaignSingle from '../components/CampaignSingle/CampaignSingle'
import Policy from '../components/Layout/Policy/Policy'
import { Footer } from '../components/Layout/Footer/Footer'

const HomePage = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Slider></Slider>
      <Categories></Categories>
      <Products></Products>
      <Campaigns></Campaigns>
      <Products></Products>
      <Blogs></Blogs>
      <Brands></Brands>
      <CampaignSingle></CampaignSingle>
      <Policy></Policy>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default HomePage