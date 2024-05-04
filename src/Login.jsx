import React,{useState} from 'react';

function Login({onFormSwitch}){
    const [loginMail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const handleSubmit = (e)=>{
        e.preventDefault();
    console.log(loginMail,pass);
    }
    //  setMail("someMail");

    return (
        <>
    <form onSubmit={handleSubmit}>
    <h1>This is a Login page</h1>
    <label htmlFor="email">Email</label>
    <input name='email' value={loginMail} onChange={(e) => setMail(e.target.value)} id='userName' type='email' placeholder='Enter your email!'/><br/><br/>
    <label htmlFor="password">Password</label>
    <input name='password' value={pass} onChange={(e) => setPass(e.target.value)} id='password' type='password' placeholder='Enter Password'/>
    <button type='submit'>Log In</button>
    </form>
    <button onClick={() => onFormSwitch("Register")}>Don't have an account? Sign Up</button>
    </>
    )
}

export default Login;