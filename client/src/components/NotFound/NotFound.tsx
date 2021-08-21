import { Fragment } from "react";

const NotFound: React.FC = () => {
  return (
    <Fragment>
      <div className="breadcrumb-area pt-35 pb-35 bg-gray-3">
        <div className="container">
          <div className="breadcrumb-content text-center">
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">404 Page </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="error-area pt-40 pb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 text-center">
              <div className="error">
                <h1>404</h1>
                <h2>OPPS! PAGE NOT BE FOUND</h2>
                <p>
                  Sorry but the page you are looking for does not exist, have
                  been removed, name changed or is temporarity unavailable.
                </p>
                <form action="#" className="searchform mb-50">
                  <input
                    type="text"
                    name="search"
                    id="error_search"
                    placeholder="Search..."
                    className="searchform__input"
                  />
                  <button type="submit" className="searchform__submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
                <a href="index.html" className="error-btn">
                  Back to home page
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
