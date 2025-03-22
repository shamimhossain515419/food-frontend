import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import cardSlice from "./features/cardSlice";
const persistConfig = {
  key: "root",
  storage,
};

const productCardPersisReducer = persistReducer(persistConfig, cardSlice);

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  card: productCardPersisReducer,
});

export default rootReducer;
