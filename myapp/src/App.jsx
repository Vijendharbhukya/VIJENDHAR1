import React,{ Component } from "react";
import NavBar from "./NavBar";
import ShoppingCart from "./ShoppingCart";
import SimplePage from "./Component/SimplePage";
import FisrtComponent from "./Component/FirstComponent";
import FormPage from "./Component/FormPages";
import Count from "./Component/Count";
import { Route, Routes } from "react-router-dom";
import ConformationPage from "./Component/ConformationPage";
import LoginPage from "./Component/LoginPage";
const  App  =()=>{
        return(
          <Routes>
            <Route path='/LoginPage' element={<LoginPage/>}/>
            <Route path='/FormPage' element={ <FormPage/>}/>
            <Route path='/ConformationPage' element={ <ConformationPage/>}/>
            <Route path='/LoginPage' element={ <LoginPage/>}/>
          </Routes>
        )
      }

export default App;