import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import themeReducer from './theme/themeSlice'
import { persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'


// when we have more than one reducer we have to combine them
const rootReducer = combineReducers({
  user:userReducer,
  theme:themeReducer
});

const persistConfig = {
   key: 'root',
   storage,
   version:1
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// use that in the signin page
export const store = configureStore({
  // instead of having alot of reducer we can just have persistedReducer 
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({serializableCheck: false}),
  
})
// export the store that is persisted
export const persistor = persistStore(store);