import { Fragment } from "react";
import { Link } from "react-router-dom";

const LoginRegister: React.FC = () => {
  return (
    <Fragment>
      <div className="breadcrumb-area pt-35 pb-35 bg-gray-3">
        <div className="container">
          <div className="breadcrumb-content text-center">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li className="active"> login/Register </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="login-register-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 ml-auto mr-auto">
              <div className="login-register-wrapper">
                <div className="login-register-tab-list nav">
                  <a className="active" data-toggle="tab" href="#lg1">
                    <h4> login </h4>
                  </a>
                  <a data-toggle="tab" href="#lg2">
                    <h4> register </h4>
                  </a>
                </div>
                <div className="tab-content">
                  <div id="lg1" className="tab-pane active">
                    <div className="login-form-container">
                      <div className="login-register-form">
                        <form action="#" method="post">
                          <input
                            name="user-email"
                            placeholder="Email"
                            type="email"
                          />
                          <input
                            type="password"
                            name="user-password"
                            placeholder="Password"
                          />
                          <div className="button-box">
                            <div className="login-toggle-btn">
                              <input type="checkbox" />
                              <label>Remember me</label>
                              <a href="#">Forgot Password?</a>
                            </div>
                            <button type="submit">
                              <span>Login</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div id="lg2" className="tab-pane">
                    <div className="login-form-container">
                      <div className="login-register-form">
                        <form action="#" method="post">
                          <input
                            name="user-email"
                            placeholder="Email"
                            type="email"
                          />
                          <input
                            type="text"
                            name="user-name"
                            placeholder="Username"
                          />
                          <input
                            type="password"
                            name="user-password"
                            placeholder="Password"
                          />
                          <div className="button-box">
                            <button type="submit">
                              <span>Register</span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginRegister;
