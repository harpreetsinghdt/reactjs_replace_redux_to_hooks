import React from "react";
import ReactDOM from "react-dom/client";
// import { Provider } from "react-redux";
// import { combineReducers, createStore } from "redux";

import "./index.css";
import App from "./App";
// import productReducer from "./store/reducers/products";
// import ProductsProvider from "./context/ProductsContext";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
import configureStore from "./hooksStore/productsStore";

// const rootReducer = combineReducers({
//   shop: productReducer,
// });

// const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));

configureStore();

root.render(
  // <ProductsProvider>
  //   </ProductsProvider>

  <BrowserRouter>
    <App />
  </BrowserRouter>
);
