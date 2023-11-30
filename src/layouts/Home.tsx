import ProductList from '../components/ProductList';
import pic1 from '../assets/images/pic02.jpg'


const HomeLayout = () => {
  return (
    <>
    {/* <!-- Introduction --> */}
    <section id="intro" className="main">
        <div className="spotlight">
          <div className="content">
            <header className="major">
              <h2>The best Shopping Mall</h2>
            </header>
            <p>Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna
            adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus.
            Tempus nisl et nullam lorem ipsum dolor sit amet aliquam.</p>
            <ul className="actions">
              <li><a href="#" className="button btn">Learn More</a></li>
            </ul>
          </div>
          <span className="image"><img src={pic1} alt="pic 1" /></span>
        </div>
      </section>

    {/* <!-- First Section --> */}
      <section id="first" className="main special">
        <header className="major">
          <h2>Magna veroeros</h2>
        </header>
        <ul className="features">
          <li>
            <span className="fa fa-code icon solid major style1">
              <i className="fa fa-code fa-2x force_icon" aria-hidden="true"></i>
            </span>
            <h3>Ipsum consequat</h3>
            <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
          </li>
          <li>
            <span className="fa fa-clone icon solid major style3">
              <i className="fa fa-clone fa-2x force_icon" aria-hidden="true"></i>
            </span>
            <h3>Amed sed feugiat</h3>
            <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
          </li>
          <li>
            <span className="fa fa-diamond icon solid major style1 style5">
              <i className="fa fa-diamond fa-2x force_icon" aria-hidden="true"></i>
            </span>
            <h3>Dolor nullam</h3>
            <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
          </li>
        </ul>
        <footer className="major">
          <ul className="actions special">
            <li><a href="#" className="button">Learn More</a></li>
          </ul>
        </footer>
      </section>

    {/* <!-- Second Section --> */}
      <section id="second" className="main special">
        <header className="major">
          <h2>Ipsum consequat</h2>
          <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
          posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
        </header>
        <ul className="statistics">
          <li className="style1">
            <span className="icon solid fa-code-branch"></span>
            <strong>5,120</strong> Etiam
          </li>
          <li className="style2">
            <span className="icon fa-folder-open"></span>
            <strong>8,192</strong> Magna
          </li>
          <li className="style3">
            <span className="icon solid fa-signal"></span>
            <strong>2,048</strong> Tempus
          </li>
          <li className="style4">
            <span className="icon solid fa-laptop"></span>
            <strong>4,096</strong> Aliquam
          </li>
          <li className="style5">
            <span className="icon fa-gem"></span>
            <strong>1,024</strong> Nullam
          </li>
        </ul>
        <p className="content">Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia.</p>
        <footer className="major">
          <ul className="actions special">
            <li><a href="#" className="button">Learn More</a></li>
          </ul>
        </footer>
      </section>
      {/* <!-- Get Started --> */}
      <section id="cta" className="main special">
        <header className="major">
          <h2>Our Products</h2>
          <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
          posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
        </header>
        <ProductList />
        <footer className="major">
          <ul className="actions special">
            <li><a href="#" className="button primary">Get Started</a></li>
            <li><a href="#" className="button">Learn More</a></li>
          </ul>
        </footer>
      </section>
    </>
  )
}

export default HomeLayout;