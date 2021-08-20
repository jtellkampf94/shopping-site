import { Link } from "react-router-dom";

import CartDropdown from "../CartDropdown/CartDropdown";
import MobileMenu from "../MobileMenu/MobileMenu";

const Header: React.FC = () => {
  return (
    <header className="header-area header-padding-1 sticky-bar header-res-padding clearfix">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-6 col-4">
            <div className="logo">
              <a href="index.html">LOGO</a>
            </div>
          </div>

          <div className="col-xl-8 col-lg-8 d-none d-lg-block">
            <div className="main-menu">
              <nav>
                <ul>
                  <li>
                    <a href="/">
                      Home <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="mega-menu mega-menu-padding">
                      <li>
                        <ul>
                          <li className="mega-menu-title">
                            <a href="#">Demo Group 01</a>
                          </li>
                          <li>
                            <a href="">Example</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <ul>
                          <li className="mega-menu-title">
                            <a href="#">Demo Group 02</a>
                          </li>
                          <li>
                            <a href="">Example</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <ul>
                          <li className="mega-menu-title">
                            <a href="#">Demo Group 03</a>
                          </li>
                          <li>
                            <a href="">Example</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="shop.html">
                      {" "}
                      Shop <i className="fa fa-angle-down"></i>{" "}
                    </a>
                    <ul className="mega-menu">
                      <li>
                        <ul>
                          <li className="mega-menu-title">
                            <a href="#">shop layout</a>
                          </li>
                          <li>
                            <a href="shop.html">standard style</a>
                          </li>
                          <li>
                            <a href="shop-filter.html">Grid filter style</a>
                          </li>
                          <li>
                            <a href="shop-grid-2-col.html">Grid 2 column</a>
                          </li>
                          <li>
                            <a href="shop-no-sidebar.html">Grid No sidebar</a>
                          </li>
                          <li>
                            <a href="shop-grid-fw.html">Grid full wide </a>
                          </li>
                          <li>
                            <a href="shop-right-sidebar.html">
                              Grid right sidebar
                            </a>
                          </li>
                          <li>
                            <a href="shop-list.html">list 1 column box </a>
                          </li>
                          <li>
                            <a href="shop-list-fw.html">
                              list 1 column full wide{" "}
                            </a>
                          </li>
                          <li>
                            <a href="shop-list-fw-2col.html">
                              list 2 column full wide
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li className="mega-menu-title">
                            <a href="#">product details</a>
                          </li>
                          <li>
                            <a href="product-details.html">tab style 1</a>
                          </li>
                          <li>
                            <a href="product-details-2.html">tab style 2</a>
                          </li>
                          <li>
                            <a href="product-details-3.html">tab style 3</a>
                          </li>
                          <li>
                            <a href="product-details-4.html">sticky style</a>
                          </li>
                          <li>
                            <a href="product-details-5.html">gallery style </a>
                          </li>
                          <li>
                            <a href="product-details-slider-box.html">
                              Slider style
                            </a>
                          </li>
                          <li>
                            <a href="product-details-affiliate.html">
                              affiliate style
                            </a>
                          </li>
                          <li>
                            <a href="product-details-6.html">
                              fixed image style{" "}
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <ul>
                          <li className="mega-menu-img">
                            <a href="shop.html">
                              <img
                                src="assets/img/banner/banner-12.png"
                                alt=""
                              />
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="shop.html">Collection</a>
                  </li>
                  <li>
                    <a href="#">
                      {" "}
                      Pages <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="submenu">
                      <li>
                        <a href="about.html">about us</a>
                      </li>
                      <li>
                        <a href="cart-page.html">cart page</a>
                      </li>
                      <li>
                        <a href="checkout.html">checkout </a>
                      </li>
                      <li>
                        <a href="wishlist.html">wishlist </a>
                      </li>
                      <li>
                        <a href="my-account.html">my account</a>
                      </li>
                      <li>
                        <a href="login-register.html">login / register </a>
                      </li>
                      <li>
                        <a href="contact.html">contact us </a>
                      </li>
                      <li>
                        <a href="404.html">404 page </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html"> About </a>
                  </li>
                  <li>
                    <a href="contact.html"> Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="col-xl-2 col-lg-2 col-md-6 col-8">
            <div className="header-right-wrap">
              <div className="same-style header-search">
                <a className="search-active" href="#">
                  <i className="pe-7s-search"></i>
                </a>
                <div className="search-content">
                  <form action="#">
                    <input type="text" placeholder="Search" />
                    <button className="button-search">
                      <i className="pe-7s-search"></i>
                    </button>
                  </form>
                </div>
              </div>
              <div className="same-style account-satting">
                <a className="account-satting-active" href="#">
                  <i className="pe-7s-user-female"></i>
                </a>
                <div className="account-dropdown">
                  <ul>
                    <li>
                      <Link to="login-register">Login</Link>
                    </li>
                    <li>
                      <Link to="login-register">Register</Link>
                    </li>
                    <li>
                      <Link to="wishlist">Wishlist </Link>
                    </li>
                    <li>
                      <Link to="my-account">my account</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="same-style header-wishlist">
                <a href="wishlist.html">
                  <i className="pe-7s-like"></i>
                </a>
              </div>
              <div className="same-style cart-wrap">
                <button className="icon-cart">
                  <i className="pe-7s-shopbag"></i>
                  <span className="count-style">02</span>
                </button>
                <CartDropdown />
              </div>
            </div>
          </div>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
