import { Link } from 'react-router-dom';
import '../navbar.css'

export const NavBar = () => {
  return (
    <>
      <nav className="nav-bar vertical-nav">
        {/* <div class="open-phone-btn">
          <ion-icon name="close-outline" class="close-btn nav-btn"></ion-icon>
        </div>  */}
        <ul className="main-menu">
          <li><Link to="/" className="nav-items active"><span
            className="items order-lg-1 order-2">HOME</span><span
              className="icon order-lg-2 order-1"><i
                className="fa-solid fa-house-chimney"></i></span></Link>
          </li>
          <li><Link to="/AboutUs" className="nav-items"><span
            className="items order-lg-1 order-2">ABOUT</span><span
              className="icon order-lg-2 order-1"><i className="fa-solid fa-user"></i></span></Link>
          </li>
          <li><Link to="/portfolio" className="nav-items"><span
            className="items order-lg-1 order-2">PORTFOLIO</span><span
              className="icon order-lg-2 order-1"><i
                className="fa-solid fa-suitcase "></i></span></Link></li>
          <li><Link to="/contact" className="nav-items"><span
            className="items order-lg-1 order-2">CONTACT</span><span
              className="icon order-lg-2 order-1"><i
                className="fa-solid fa-envelope-open "></i></span></Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
