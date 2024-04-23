import { createSlice } from "@reduxjs/toolkit";

const hamburgerSlice=createSlice({
    name:"hamburger",
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        changeCollapse:(state)=>{
            state.isMenuOpen = !state.isMenuOpen
        },
        closeCollapse:(state,action)=>{
            state.isMenuOpen=action.payload
        }
    }
})
export const {changeCollapse,closeCollapse}=hamburgerSlice.actions

export default hamburgerSlice.reducer