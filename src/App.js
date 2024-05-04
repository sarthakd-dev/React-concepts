import logo from './logo.svg';
import React,{useState} from 'react';
import {Router,Route, Routes} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Error from './Error';
import './App.css';
import CompA from './compA';
import { createContext } from 'react';

 // create context using context api
 const Theme = createContext();
 const NewTheme = createContext();
function App() {
  function Name(){
    return (
    <h1>This is component from home</h1>
    )
  }
  const [currentForm, setForm] = useState("Login");
  const toggleForm = (formName)=>{
    setForm(formName);
  }
 
  return (
    <>
    
    <main className="App">
      
     
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <Routes>
        <Route path='/' element={<Name/>}></Route> 
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Register/name' element={<Error/>}/>
        <Route path='*' element={<Error/>}></Route>
        </Routes>
        </header> */}

        {/* =========form starts here =====  */}
      {/* {currentForm == "Login"?  <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>} */}
      <h1>Try the new login technology</h1> 
      <Theme.Provider value={'Ankit'}>
        <NewTheme.Provider value={"Try it!"}>
        <CompA/>
        </NewTheme.Provider>
      </Theme.Provider>
      
        {/* <Register/> */}
      
    </main>
    </>
  );
}

export default App;
export {Theme, NewTheme};
