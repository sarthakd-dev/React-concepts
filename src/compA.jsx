import React from "react";
import {Theme, NewTheme} from "./App";
import LoginBtn from './LoginBtn';
import LogoutButton from './LogoutBtn';
function CompA(){

    return(
        <>
        <Theme.Consumer>
            
            {(themeVar) =>{
        return (
            <NewTheme.Consumer>
                {(name) =>{
                return (
                <h1>Theme {themeVar} {name}</h1>
                )        
                }}</NewTheme.Consumer>  
            )
        }}
        </Theme.Consumer>
      <LoginBtn></LoginBtn>
      <LogoutButton></LogoutButton>
      </>  
    )
}
export default CompA;