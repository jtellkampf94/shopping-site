const CartDropdown: React.FC = () => {
  return (
    <div className="shopping-cart-content">
      <ul>
        <li className="single-shopping-cart">
          <div className="shopping-cart-img">
            <a href="#"><img alt="" src="assets/img/cart/cart-1.png" /></a>
          </div>
          <div className="shopping-cart-title">
            <h4><a href="#">T- Shart & Jeans </a></h4>
            <h6>Qty: 02</h6>
            <span>$260.00</span>
          </div>
          <div className="shopping-cart-delete">
            <a href="#"><i className="fa fa-times-circle"></i></a>
          </div>
        </li>
        <li className="single-shopping-cart">
          <div className="shopping-cart-img">
            <a href="#"><img alt="" src="assets/img/cart/cart-2.png" /></a>
          </div>
          <div className="shopping-cart-title">
            <h4><a href="#">T- Shart & Jeans </a></h4>
            <h6>Qty: 02</h6>
            <span>$260.00</span>
          </div>
          <div className="shopping-cart-delete">
            <a href="#"><i className="fa fa-times-circle"></i></a>
          </div>
        </li>
      </ul>
      <div className="shopping-cart-total">
        <h4>Shipping : <span>$20.00</span></h4>
        <h4>Total : <span className="shop-total">$260.00</span></h4>
      </div>
      <div className="shopping-cart-btn btn-hover text-center">
        <a className="default-btn" href="cart-page.html">view cart</a>
        <a className="default-btn" href="checkout.html">checkout</a>
      </div>
    </div>
  )
}

export default CartDropdown