// npm i react-redux
// npm i redux
// import { createStore, applyMiddleware } from "redux";
import { balanceReducer } from "./reducer/balanceReducer";
// import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

// const store = createStore(balanceReducer, applyMiddleware(thunk));

const store = configureStore({ reducer: balanceReducer });
export default store;
