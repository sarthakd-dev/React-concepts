import React, { useState, useRef, useEffect } from 'react';

const mailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
const passwordRegex = /^(?=.*\d)(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.*[a-z])(?=.*[A-Z]).{5,10}$/;


const Register =() =>{
    const userRef = useRef();
const errRef = useRef();

const [user, setUser] = useState("");
const [userValidName, setValidName] = useState(false);
const [userFocus, setFocus] = useState(false);

const [userPwd, setUserPwd] = useState("");
const [userValidPwd, setValidPwd] = useState(false);
const [userFocusPwd, setFocusPwd] = useState(false);

const [userMatchPwd, setUserMatchPwd] = useState("");
const [userValidMatchPwd, setValidMatchPwd] = useState(false);
const [userFocusMatchPwd, setFocusMatchPwd] = useState(false);

const [errMsg, seterrMsg] = useState("");
const [success, setSuccess ] = useState(false);

useEffect(()=>{
    userRef.current.focus();
},[])
    return(
        <div>
        
        </div>
    )
}
// function Register({onFormSwitch}){
//     const [loginMail, setMail] = useState("");
//     const [pass, setPass] = useState("");
//     const [name, setName] = useState("");
//     const handleSubmit = (e)=>{
//         e.preventDefault();̥
//     console.log(loginMail,pass);
//     }
//     return (
//         <>
//         <form onSubmit={handleSubmit}>
//         <h1>This is a Register page</h1>
//         <label htmlFor='name'>Full Name</label>
//         <input value={name} type='text' name='name'/>
//         <label htmlFor="email">Email</label>
//         <input name='email' value={loginMail} onChange={(e) => setMail(e.target.value)} id='userName' type='email' placeholder='Enter your email!'/><br/><br/>
//         <label htmlFor="password">Password</label>
//         <input name='password' value={pass} onChange={(e) => setPass(e.target.value)} id='password' type='password' placeholder='Enter Password'/>
//         <button type='submit'>Log In</button>
//         </form>
//         <button onClick={() => onFormSwitch("Login")}>Already have an account? Login</button>
//         </>
//         )
// }

export default Register;