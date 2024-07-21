import {createSlice} from "@reduxjs/toolkit"


const menuSlice = createSlice({
  name:"togglemenu",
  initialState :{
   isMenuOpen : true
  },
  reducers:{
 toggle: (state) => {
   state.isMenuOpen = !state.isMenuOpen
   }
  }
})

export const {toggle} = menuSlice.actions
export default menuSlice.reducer