import { Fragment } from 'react'
import { Header } from '../components/Layout/Header/Header'
import Auth from '../components/Auth/Auth'
import Policy from '../components/Layout/Policy/Policy'
import { Footer } from '../components/Layout/Footer/Footer'

const AccountPage = () => {
  return (
    <Fragment>
      <Header></Header>
      <Auth></Auth>
      <Policy></Policy>
      <Footer></Footer>
    </Fragment>
  )
}

export default AccountPage