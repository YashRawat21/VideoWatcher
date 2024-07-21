import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"message",
    initialState:{
        isMessage:[]
    },
    reducers:{
        showInputMessage: (state,action) => {
            state.isMessage.splice(100,1)
            state.isMessage.push(action.payload)
        }
    }
})
export const {showInputMessage} = chatSlice.actions
export default chatSlice.reducer