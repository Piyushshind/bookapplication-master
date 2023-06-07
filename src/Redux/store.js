import { createStore, combineReducers } from "redux";
import bookReducer from "./bookReducer";
import cartReducer from "./cartReducer";
// Combine your reducers if you have multiple reducers
const rootReducer = combineReducers({
  books: bookReducer,
  cart:cartReducer
});

// Create the Redux store with the combined reducer
 const store = createStore(rootReducer);
 export default store