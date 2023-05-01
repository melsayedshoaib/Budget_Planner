import { createSlice } from "@reduxjs/toolkit";

const budgetSlice = createSlice({
  name: "budget",
  initialState: { totalBudget: 0, remainingBudget: 0, spentBudget: 0 },
  reducers: {
    addBudget: (state, action) => {
      state.totalBudget = action.payload;
      state.remainingBudget = action.payload;
    },
    adjustRemainingOnAdding: (state, action) => {
      state.remainingBudget -= action.payload;
    },
    adjustRemainingOnDeletion: (state, action) => {
      state.remainingBudget += action.payload;
    },
    adjustSpentOnAdding: (state, action) => {
      state.spentBudget += Number(action.payload);
    },
    adjustSpentOnDeletion: (state, action) => {
      state.spentBudget -= action.payload;
    },
  },
});

export const {
  addBudget,
  adjustRemainingOnAdding,
  adjustRemainingOnDeletion,
  adjustSpentOnAdding,
  adjustSpentOnDeletion,
} = budgetSlice.actions;

export default budgetSlice.reducer;
