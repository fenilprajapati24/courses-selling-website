import { createSlice } from "@reduxjs/toolkit";

const bookslice = createSlice({
  name: 'bookitems',
  initialState: [],
  reducers: {
   addtocart: (state, action) => {
      console.log("Payload received in reducer:", action.payload);  //  Log the payload

      // Optional: check if payload has required fields
      if (!action.payload || !action.payload.name || !action.payload.price) {
        console.warn("Invalid item received:", action.payload);
        return;
      }

      state.push(action.payload);
    },
    removefromcart: (state, action) => {
      return state.filter(item => item.id !== action.payload.id);
    }
  }
});

// export const { addtocart, removefromcart } = bookslice.actions;
// export default bookslice;

export const bookaction=bookslice.actions;
export default bookslice;

