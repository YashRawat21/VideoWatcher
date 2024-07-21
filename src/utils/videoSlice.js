import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "videos",
    initialState: {
        isVideos:[]
    },
    reducers:{
        setIsVideos:(state,action) => {
            state.isVideos = (action.payload)
        }
    }
})

 export const {setIsVideos} =  videoSlice.actions
export default videoSlice.reducer