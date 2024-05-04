import React from "react";
import {Theme, NewTheme} from "./App";

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
      </>  
    )
}
export default CompA;