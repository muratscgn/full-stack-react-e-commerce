import { Header } from "../components/Layout/Header/Header"
import { Footer } from "../components/Layout/Footer/Footer"
import Policy from "../components/Layout/Policy/Policy"
import Proptypes from "prop-types"
import Search from "../components/Modals/Search/Search"
import { useEffect, useState } from "react"
import Dialog from "../components/Modals/Dialog/Dialog"

const MainLayout = ({ children }) => {
  const [isSearchShow, setIsSearchShow] = useState(false)
  const [isDialogShow, setIsDialogShow] = useState(false)

  useEffect(() => {
    const dialogStatus = localStorage.getItem("dialog")
      ? JSON.parse(localStorage.getItem("dialog"))
      : localStorage.setItem("dialog", JSON.stringify(true))

    setTimeout(() => {
      setIsDialogShow(dialogStatus)
    }, 2000)

  }, [])

  return (
    <div className="main-layout">
      <Search isSearchShow={isSearchShow} setIsSearchShow={setIsSearchShow}></Search>
      <Dialog isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow}></Dialog>
      <Header setIsSearchShow={setIsSearchShow}></Header>
      {children}
      <Policy></Policy>
      <Footer></Footer>
    </div>
  )
}

export default MainLayout

MainLayout.propTypes = {
  children: Proptypes.node
};