import { configureStore } from "@reduxjs/toolkit";
import hamburgerSlice from "./hamburgerSlice";
import searchSLice from "./searchSLice";
import chatSlice from "./chatSlice";
import searchResultSlice from "./searchResultSlice";

const appStore=configureStore({
    reducer:{
        hamburger:hamburgerSlice,
        search:searchSLice,
        chat:chatSlice,
        searchResult:searchResultSlice
    }
})

export default appStore;