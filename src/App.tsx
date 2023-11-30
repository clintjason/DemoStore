import { useState } from 'react'
import './App.css'
import VendorsLoader from './VendorsLoader';
import { Route, Routes } from 'react-router-dom';
import HomeLayout from './layouts/Home';
import ProductLayout from './layouts/Product';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <div id="wrapper">

{/* <!-- Header --> */}
  <header id="header" className="alt">
    <span className="logo"><img src="images/logo.svg" alt="" /></span>
    <h1>Ecommerce Products Demo CMS</h1>
    <p>Preview our store for products that will interest you.</p>
  </header>

{/* <!-- Nav --> */}
  <nav id="nav">
    <ul>
      <li><Link to='/' className="active">Introduction</Link></li>
      <li><a href="#first">First Section</a></li>
      <li><a href="#second">Second Section</a></li>
      <li><a href="#cta">Get Started</a></li>
    </ul>
  </nav>

{/* <!-- Main --> */}
  <div id="main">
    <Routes>
      <Route index element={<HomeLayout />} />
      <Route path='/' element={<HomeLayout />} />
      <Route path='/product/:id' element={<ProductLayout />} />
      {/* <Route path='/create' element={<CreateRecord pageTitle="DrNG - Create Appointment" />} />
      <Route path='/:id/edit' element={<EditRecord pageTitle="DrNG - Edit Appointment" />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  </div>

{/* <!-- Footer --> */}
  <footer id="footer">
    <section>
      <h2>Aliquam sed mauris</h2>
      <p>Sed lorem ipsum dolor sit amet et nullam consequat feugiat consequat magna adipiscing tempus etiam dolore veroeros. eget dapibus mauris. Cras aliquet, nisl ut viverra sollicitudin, ligula erat egestas velit, vitae tincidunt odio.</p>
      <ul className="actions">
        <li><a href="#" className="button">Learn More</a></li>
      </ul>
    </section>
    <section>
      <h2>Etiam feugiat</h2>
      <dl className="alt">
        <dt>Address</dt>
        <dd>1234 Somewhere Road &bull; Nashville, TN 00000 &bull; USA</dd>
        <dt>Phone</dt>
        <dd>(000) 000-0000 x 0000</dd>
        <dt>Email</dt>
        <dd><a href="#" style={{ color: 'unset'}}>example@gmail.com</a></dd>
      </dl>
      <ul className="icons">
        <li><a href="#" className="bw brands alt">
          <i className="fa fa-twitter" aria-hidden="true"></i></a></li>
        <li><a href="#" className="bw brands alt">
          <i className="fa fa-facebook-f" aria-hidden="true"></i>
        </a></li>
        <li><a href="#" className="bw brands alt">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a></li>
        <li><a href="#" className="bw brands  alt">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a></li>
        <li><a href="#" className="bw brands alt">
          <i className="fa fa-dribbble" aria-hidden="true"></i>
          </a></li>
      </ul>
    </section>
    <p className="copyright">&copy; Clint Jason</p>
  </footer>

</div>

    </>
  )
}

export default App
