import { Link } from "react-router-dom";

const MobileMenu: React.FC = () => {
  return (
    <div className="mobile-menu-area">
      <div className="mobile-menu">
        <nav id="mobile-menu-active">
          <ul className="menu-overflow">
            <li>
              <Link to="/">HOME</Link>
              <ul>
                <li>
                  <Link to="/">home version 1</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="shop.html">Shop</Link>
              <ul>
                <li>
                  <Link to="#">shop layout</Link>
                  <ul>
                    <li>
                      <Link to="shop.html">standard style</Link>
                    </li>
                    <li>
                      <Link to="shop-filter.html">Grid filter style</Link>
                    </li>
                    <li>
                      <Link to="shop-grid-2-col.html">Grid 2 column</Link>
                    </li>
                    <li>
                      <Link to="shop-no-sidebar.html">Grid No sidebar</Link>
                    </li>
                    <li>
                      <Link to="shop-grid-fw.html">Grid full wide </Link>
                    </li>
                    <li>
                      <Link to="shop-right-sidebar.html">
                        Grid right sidebar
                      </Link>
                    </li>
                    <li>
                      <Link to="shop-list.html">list 1 column box </Link>
                    </li>
                    <li>
                      <Link to="shop-list-fw.html">
                        list 1 column full wide{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="shop-list-fw-2col.html">
                        list 2 column full wide
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">product details</Link>
                  <ul>
                    <li>
                      <Link to="product-details.html">tab style 1</Link>
                    </li>
                    <li>
                      <Link to="product-details-2.html">tab style 2</Link>
                    </li>
                    <li>
                      <Link to="product-details-3.html">tab style 3</Link>
                    </li>
                    <li>
                      <Link to="product-details-4.html">sticky style</Link>
                    </li>
                    <li>
                      <Link to="product-details-5.html">gallery style </Link>
                    </li>
                    <li>
                      <Link to="product-details-slider-box.html">
                        Slider style
                      </Link>
                    </li>
                    <li>
                      <Link to="product-details-affiliate.html">
                        affiliate style
                      </Link>
                    </li>
                    <li>
                      <Link to="product-details-6.html">
                        fixed image style{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <Link to="shop.html">Collection</Link>
            </li>
            <li>
              <Link to="#">Pages</Link>
              <ul>
                <li>
                  <Link to="about.html">about us</Link>
                </li>
                <li>
                  <Link to="cart-page.html">cart page</Link>
                </li>
                <li>
                  <Link to="checkout.html">checkout </Link>
                </li>
                <li>
                  <Link to="wishlist.html">wishlist </Link>
                </li>
                <li>
                  <Link to="my-account.html">my account</Link>
                </li>
                <li>
                  <Link to="/login-register">login / register </Link>
                </li>
                <li>
                  <Link to="contact.html">contact us </Link>
                </li>
                <li>
                  <Link to="404.html">404 page </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="about.html">About us</Link>
            </li>
            <li>
              <Link to="contact.html">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
