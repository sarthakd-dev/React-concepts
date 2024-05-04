import React from "react";
import {Theme, NewTheme} from "./App";
import LoginBtn from './LoginBtn';
import LogoutButton from './LogoutBtn';
import {useAuth0} from '@auth0/auth0-react';
import Profile from './Profile';
function CompA(){
    const {user, isAuthenticated, isLoading} = useAuth0();
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
        { isAuthenticated && <Profile></Profile>}
       { isAuthenticated ?<LogoutButton></LogoutButton>: <LoginBtn></LoginBtn>}
       
      </>  
    )
}
export default CompA;