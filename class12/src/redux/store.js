import { configureStore } from "@reduxjs/toolkit";
import CakeReducer from "./reducers/CakeReducer";
import CommentsReducer from "./reducers/CommentsReducer";

// na ovoj nacin kombinirame poveke reduceri vo eden store
const reducers = {
  CakeReducer: CakeReducer,
  CommentsReducer: CommentsReducer,
};

export default configureStore({ reducer: reducers });
