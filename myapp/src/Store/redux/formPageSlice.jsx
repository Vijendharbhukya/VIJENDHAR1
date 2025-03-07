import { createSlice } from "@reduxjs/toolkit";
const initialState={
  firstname: '',
    lastname: '',
    gender: '',
    qualifications: '',
    emails: '',
    phoneNumbers: '',
    states: '',
    address: ''
}
export const FormPageSlice= createSlice({
    name:"formPageDetails",
    initialState,
    reducers:{
      updateFormDetails:(state,action)=>{
        const { name, value } = action.payload;
        state[name] = value;
      },
      clearForm:()=>{
      return initialState
      } 
    },
})
export const{updateFormDetails,clearForm}=FormPageSlice.actions
export default FormPageSlice.reducer