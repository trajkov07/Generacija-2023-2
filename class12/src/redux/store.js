import { configureStore } from "@reduxjs/toolkit";
import CakeReducer from "./reducers/CakeReducer";

export default configureStore({ reducer: CakeReducer });
