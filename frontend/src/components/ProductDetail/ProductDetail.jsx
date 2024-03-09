import Breadcrumb from "./Breadcrumb/Breadcrumb"
import Gallery from "./Gallery/Gallery"
import Info from "./Info/Info"
import "./ProductDetail.css"
import Tabs from "./Tabs/Tabs"

const ProductDetail = () => {
  return (
    <section className="single-product">
      <div className="container">
        <div className="single-product-wrapper">
          <Breadcrumb></Breadcrumb>
          <div className="single-content">
            <main className="site-main">
              <Gallery></Gallery>
              <Info></Info>
            </main>
          </div>
          <Tabs></Tabs>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail