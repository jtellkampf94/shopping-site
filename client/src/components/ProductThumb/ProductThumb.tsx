const ProductThumb = () => {
  return (
    <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6">
      <div className="product-wrap mb-25">
        <div className="product-img">
          <a href="product-details.html">
            <img
              className="default-img"
              src="assets/img/product/pro-8.jpg"
              alt=""
            />
            <img
              className="hover-img"
              src="assets/img/product/pro-6.jpg"
              alt=""
            />
          </a>
          <span className="pink">-10%</span>
          <div className="product-action">
            <div className="pro-same-action pro-wishlist">
              <a title="Wishlist" href="wishlist.html">
                <i className="pe-7s-like"></i>
              </a>
            </div>
            <div className="pro-same-action pro-cart">
              <a title="Add To Cart" href="#">
                <i className="pe-7s-cart"></i> Add to cart
              </a>
            </div>
            <div className="pro-same-action pro-quickview">
              <a
                title="Quick View"
                href="#"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <i className="pe-7s-look"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="product-content text-center">
          <h3>
            <a href="product-details.html">T- Shirt And Jeans</a>
          </h3>
          <div className="product-rating">
            <i className="fa fa-star-o yellow"></i>
            <i className="fa fa-star-o yellow"></i>
            <i className="fa fa-star-o yellow"></i>
            <i className="fa fa-star-o"></i>
            <i className="fa fa-star-o"></i>
          </div>
          <div className="product-price">
            <span>$ 60.00</span>
            <span className="old">$ 60.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductThumb;
