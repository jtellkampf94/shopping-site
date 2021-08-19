const HomeSlider: React.FC = () => {
  return (
    <div className="slider-area">
      <div className="slider-active owl-carousel nav-style-1">
        <div className="single-slider slider-height-1 bg-purple">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                <div className="slider-content slider-animated-1">
                  <h3 className="animated">Smart Products</h3>
                  <h1 className="animated">
                    Summer Offer <br />
                    2021 Collection
                  </h1>
                  <div className="slider-btn btn-hover">
                    <a className="animated" href="shop.html">
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
                <div className="slider-single-img slider-animated-1">
                  <img
                    className="animated"
                    src="assets/img/slider/single-slide-1.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
