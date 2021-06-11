import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Shop from './views/Shop'
import Home from './views/Home'
import Layout from "./layout";
import Cart from "./views/Cart";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
