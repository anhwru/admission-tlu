
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";

import "assets/scss/material-kit-pro-react.scss?v=1.8.0";

// pages for this product
import ComponentsPage from "views/ComponentsPage/ComponentsPage.js";
import IndexPage from "./views/IndexPage/IndexPage";
import AdmisstionInfoPage from "./views/AdmisstionInfo/AdmissionInfoPage";
import NewsPage from "./views/NewsPage/NewsPage";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/thong-tin-cac-nganh" component={AdmisstionInfoPage} />
      <Route path="/thong-tin-tuyen-sinh" component={NewsPage} />
      <Route path="/components" component={ComponentsPage} />
      <Route path="/" component={IndexPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
