import { createSlice } from "@reduxjs/toolkit";

export const NameSlice= createSlice({
    name:"name",
    initialState:{
        names:''
    },
    reducers:{
        firstName:(state)=>{
            state.names=''
        }
    },
})
export const{firstName}=NameSlice.actions
export default NameSlice.reducer