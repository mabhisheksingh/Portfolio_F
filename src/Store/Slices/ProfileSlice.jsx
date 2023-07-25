import { createSlice } from "@reduxjs/toolkit";

const profile = createSlice({
    name:"Profile",
    initialState:{
        "name":"User",
        "Role":"Admin"
    },
    reducers:{
        addProfile(state, action){
            initialState = {...action.payload}
        },
        setDefaultProfile(state , action){
            initialState= {
                "name":"User",
                "Role":"User"
            }
        }
    }
}) 

export const {addProfile,setDefaultProfile} = profile.actions;
export default profile.reducer
