const MobileMenu: React.FC = () => {
  return (
    <div className="mobile-menu-area">
      <div className="mobile-menu">
        <nav id="mobile-menu-active">
          <ul className="menu-overflow">
            <li>
              <a href="index.html">HOME</a>
              <ul>
                <li>
                  <a href="index.html">home version 1</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="shop.html">Shop</a>
              <ul>
                <li>
                  <a href="#">shop layout</a>
                  <ul>
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
                      <a href="shop-right-sidebar.html">Grid right sidebar</a>
                    </li>
                    <li>
                      <a href="shop-list.html">list 1 column box </a>
                    </li>
                    <li>
                      <a href="shop-list-fw.html">list 1 column full wide </a>
                    </li>
                    <li>
                      <a href="shop-list-fw-2col.html">
                        list 2 column full wide
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">product details</a>
                  <ul>
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
                      <a href="product-details-slider-box.html">Slider style</a>
                    </li>
                    <li>
                      <a href="product-details-affiliate.html">
                        affiliate style
                      </a>
                    </li>
                    <li>
                      <a href="product-details-6.html">fixed image style </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="shop.html">Collection</a>
            </li>
            <li>
              <a href="#">Pages</a>
              <ul>
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
              <a href="about.html">About us</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
