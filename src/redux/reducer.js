import { createReducer } from "@reduxjs/toolkit";

const initialState = {}; // Replace this with your actual initial state

export const firstReducer = createReducer(initialState, (builder) => {
  // Add your case reducers using the builder object
  // builder.addCase('ACTION_TYPE', (state, action) => { /* update state */ });
});

    