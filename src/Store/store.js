import budgetSlice from "./Slices/budgetSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    budgetSlice,
  },
});
