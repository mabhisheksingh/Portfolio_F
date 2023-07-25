import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./Slices/UserSlice";
import ProfileSlice from "./Slices/ProfileSlice";


const store = configureStore({
    reducer:{
        users: UserSlice,
        profile: ProfileSlice
    },
    
});

export default store;