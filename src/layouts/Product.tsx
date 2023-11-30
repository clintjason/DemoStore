import SingleProduct from "../components/SingleProduct";

const ProductLayout = () => {
  return (
    <section id="cta" className="main special">
      <header className="major">
        <h2>Product Details</h2>
        <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
        posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
      </header>
      <SingleProduct />
      <footer className="major">
        <ul className="actions special">
          <li><a href="#" className="button edit" style={{ color: 'white !important'}}>Edit</a></li>
          <li><a href="#" className="button danger" style={{ color: 'white !important'}}>Delete</a></li>
        </ul>
      </footer>
      </section>
  )
}

export default ProductLayout;