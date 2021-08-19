import ProductThumb from "../ProductThumb/ProductThumb";

const ProductArea: React.FC = () => {
  return (
    <div className="product-area pb-60">
      <div className="container">
        <div className="section-title text-center">
          <h2>DAILY DEALS!</h2>
        </div>
        <div className="product-tab-list nav pt-30 pb-55 text-center">
          <a href="#product-1" data-toggle="tab">
            <h4>New Arrivals </h4>
          </a>
          <a className="active" href="#product-2" data-toggle="tab">
            <h4>Best Sellers </h4>
          </a>
          <a href="#product-3" data-toggle="tab">
            <h4>Sale Items</h4>
          </a>
        </div>
        <div className="tab-content jump">
          <div className="tab-pane" id="product-1">
            <div className="row">
              <ProductThumb />
              <ProductThumb />
              <ProductThumb />
              <ProductThumb />
              <ProductThumb />
              <ProductThumb />
              <ProductThumb />
              <ProductThumb />
            </div>
          </div>
          <div className="tab-pane active" id="product-2">
            <div className="row">
              <ProductThumb />
              <ProductThumb />
              <ProductThumb />
              <ProductThumb />
              <ProductThumb />
              <ProductThumb />
              <ProductThumb />
              <ProductThumb />
            </div>
          </div>
          <div className="tab-pane" id="product-3">
            <div className="row">
              <ProductThumb />
              <ProductThumb />
              <ProductThumb />
              <ProductThumb />
              <ProductThumb />
              <ProductThumb />
              <ProductThumb />
              <ProductThumb />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductArea;
