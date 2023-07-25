import { createSlice } from "@reduxjs/toolkit";

const userProfile = createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state, action){
            console.log( state )
            console.log( 'action.payload ',action.payload )
            state.push(action.payload);
            console.log( state.entries() )
        },
        deleteUser(state, action){},

    }
})
export const  { addUser } = userProfile.actions;
export default userProfile.reducer;