import createSlice from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const { addTodo, removeOne, clearTodo } = todoSlice.actions;
export default todoSlice.reducer;
