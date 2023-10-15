import { Link } from "react-router-dom";
import './navbar.css'

function Navbar() {
  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="container-fluid brand">
          <h1>eStore</h1>
          <div className="nav-links">
            <div className="login-box">
              <i className="fa fa-user-circle user-icon"/>
              <Link><h5>login</h5></Link> / <Link><h5>regiser</h5></Link>
            </div>
           <div className="cart-iconBox">
              <Link>
                <i className="bi bi-cart cart-icon "></i>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
