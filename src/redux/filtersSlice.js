import {createSlice} from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./contactsSlice";

const filtersSlice = createSlice(
    {name: "filters",
    initialState: INITIAL_STATE.filters,
        redusers: {
        changeFilter(state, action) {
            state.name = action.payload;
    },
},
});

export const {changeFilter} = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;