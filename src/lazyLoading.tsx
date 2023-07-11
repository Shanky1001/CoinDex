import React from "react";

const Homepage = React.lazy(() => import("./pages/HomePage"));
const Currencies = React.lazy(() => import("./pages/CryptoCurrency"));
const News = React.lazy(() => import("./pages/News"));
const Exchange = React.lazy(() => import("./pages/Exchanges"));
const Market = React.lazy(() => import("./pages/Market"));
const CryptoDetails = React.lazy(() => import("./pages/CryptoDetails"));
const ReferenceCurrencies = React.lazy(() => import("./pages/ReferenceCurrency"));
const PageNotFound = React.lazy(() => import("./pages/PageNotFound"));

export const PUBLIC_ROUTES = [
  {
    path: "/",
    component: Homepage,
  },
  {
    path: "/currencies",
    component: Currencies,
  },
  {
    path: "/news",
    component: News,
  },
  {
    path: "/exchange/:coinId",
    component: Exchange,
  },
  {
    path: "/market/:coinId",
    component: Market,
  },
  {
    path: "/reference-currencies",
    component: ReferenceCurrencies,
  },
  {
    path: "/crypto/:coinId",
    component: CryptoDetails,
  },
  {
    path: "*",
    component: PageNotFound,
  },
];
