// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./Redux/store";
import BookList from "./Home/bookList";
import Cart from "./pages/cart";

const App = () => {
  return (
    <Provider store={store}>
      <BookList />
      <Cart/>
    </Provider>
  );
};

export default App;
