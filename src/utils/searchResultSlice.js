import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice=createSlice({
    name:"searchResults",
    initialState:{
        movieByKeyword:[]
    },
    reducers:{
        addMovieByKeyWord:(state,action)=>{
            state.movieByKeyword.push(action.payload)
        }
    }
})

export const {addMovieByKeyWord} = searchResultSlice.actions

export default searchResultSlice.reducer