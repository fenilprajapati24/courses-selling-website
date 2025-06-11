import { configureStore } from "@reduxjs/toolkit";
import bookslice from "./bookslice";

const mystore = configureStore({
  reducer: {
    bookitems: bookslice.reducer
  }
});

export default mystore;
