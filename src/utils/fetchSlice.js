import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
    name : "fetch",
    initialState : {
        items: []
    },
    reducers : {
        populateItems : (state, action) => {
            state.items = action.payload
        }
    }
});

export default fetchSlice.reducer;

export const {populateItems} = fetchSlice.actions;