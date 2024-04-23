import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{},
    reducers:{
        addSuggesstionResults:(state,action)=>{
            Object.assign(state, action.payload)
        }
    }
})

export const {addSuggesstionResults}=searchSlice.actions

export default searchSlice.reducer