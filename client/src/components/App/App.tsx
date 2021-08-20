import { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Home from "../Home/Home";
import LoginRegister from "../LoginRegister/LoginRegister";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login-register" component={LoginRegister} />
        </Switch>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
