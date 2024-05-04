import React, { useContext } from "react";
import {Theme, NewTheme} from "./App";

function CompA(){
const themeVar = useContext(Theme);
const name = useContext(NewTheme);
    return(
        <>
         <h1>Theme {themeVar} {name}</h1>
        {/* <Theme.Consumer>
            
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
        </Theme.Consumer> */}
      </>  
    )
}
export default CompA;