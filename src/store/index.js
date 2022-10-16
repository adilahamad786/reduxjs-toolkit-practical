import { createSlice, configureStore } from "@reduxjs/toolkit";
// import { createStore, createSlice } from "@reduxjs/toolkit"; // becuase redux package also included inside @reduxjs/toolkit.

const initialState = { counter : 0, showCounter : true };

const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
})

// const store = createStore(counterSlice.reducer); // this is work for only one Slice.
const store = configureStore({ reducer : counterSlice.reducer });

export const counterActions = counterSlice.actions;

export default store;

