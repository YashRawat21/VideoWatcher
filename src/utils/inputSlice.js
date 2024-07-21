import { createSlice } from "@reduxjs/toolkit";

const inputSlice = createSlice({
    name:"suggestion",
    initialState:{
        isSuggestion:[]
    },
    reducers:{
        setSuggestion:(state,action) => {
            state.isSuggestion = action.payload
        }
    }
})
export const {setSuggestion} = inputSlice.actions;
export default inputSlice.reducer