import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default localStorage

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

// Bind middleware for development and production
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== "production") {
    const { composeWithDevTools } = require("redux-devtools-extension");
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

// Persistence configuration
const persistConfig = {
  key: "martfury",
  storage,
  whitelist: ["cart", "compare", "auth", "wishlist"], // which reducers to persist
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    persistedReducer,
    initialState,
    bindMiddleware([sagaMiddleware])
  );

  // Running the saga
  store.sagaTask = sagaMiddleware.run(rootSaga);

  // Create the persistor instance
  const persistor = persistStore(store);

  return { store, persistor };
}

export default configureStore;
