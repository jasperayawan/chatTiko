import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { AuthSlice } from "./reducers/Auth.slice";
import { useGetConversationSlice } from "./reducers/useConversation.slice";

const persistConfig = {
    key: "root",
    storage,
  };

  const rootReducer = combineReducers({
    Auth: AuthSlice.reducer,
    UseConversation: useGetConversationSlice.reducer
  })

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            }
        })
  });

  export const persistor = persistStore(store);