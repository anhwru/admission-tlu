
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
// import Detail from "./views/NewsPage/Sections/Detail";
import ChildForNewsDetail from "./views/NewsPage/Sections/child";
import ChildForMajorsDetail from "./views/InfoPage/Sections/child";

import Detail from "./views/NewsPage/Sections/Detail";
import AboutPage from "./views/AboutUsPage/AboutPage";
import InfoPage from "./views/InfoPage/InfoPage";
import ProfilePage from "./views/ProfilePage/ProfilePage";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/thong-tin-cac-nganh" component={AdmisstionInfoPage} />
      <Route path="/thong-tin-tuyen-sinh" component={NewsPage} />
      <Route path="/detail/:slug.:id.:page.html" children={<ChildForNewsDetail />} />
      <Route path="/components" component={ComponentsPage} />
      <Route path="/gioi-thieu" component={AboutPage} />
      <Route path="/khoa/:slug.:id" children={<ChildForMajorsDetail />} />
      <Route path="/khoa" component={InfoPage} />
      <Route path="/ho-so" component={ProfilePage} />
      <Route path="/" component={IndexPage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
