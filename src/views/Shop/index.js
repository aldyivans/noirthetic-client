import React from "react";
import { Route, Switch } from "react-router";
import DetailPage from "./DetailPage";
import MainPage from "./MainPage";

const Shop = () => {
  return (
    <Switch>
      <Route path="/shop" exact component={MainPage} />
      <Route path="/shop/detail" component={DetailPage} />
    </Switch>
  )
}

export default Shop
