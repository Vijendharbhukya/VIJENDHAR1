import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './redux/counterSlice'
import nameReducer from './redux/nameSlice'
import employeeReducer from './redux/nameSlice'
import formPageDetails from './redux/formPageSlice'

export default configureStore({
    reducer: {
      counter:counterReducer,
      name:nameReducer,
      employee:employeeReducer,
      formDetails:formPageDetails
    },
  })
