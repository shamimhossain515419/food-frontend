import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { baseApi } from "./api/baseApi";
import rootReducer from "./rootReducer";

const isClient = typeof window !== "undefined";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
        ignoredActionPaths: ["register", "rehydrate"],
        ignoredPaths: ["meta.arg.originalArgs"],
      },
    }).concat(baseApi.middleware),
});

export const persistor = isClient ? persistStore(store) : null;
