import React, { useEffect, useState } from 'react'
import './LoginSignup.css'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import {  login, signUp } from '../apis/signInsignUp'
import { useNavigate } from 'react-router-dom'

const LoginSignup = () => {
const navigate = useNavigate()

const [action,setAction] = useState("Sign up")
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [passwordConfirm,setPasswordConfirm] = useState('')
const [contextToken, setContextToken] = useState('')
const [isLoading,setIsLoading] = useState(false)

useEffect( () => {
    if(contextToken !== '')
        navigate('/dashboard',email)
}, [contextToken, email, navigate])

const onChangeEmail = (event) => {
    setEmail(event.target.value);
}

const onChangePassword = (event) => {
    setPassword(event.target.value);
}

const onChangePasswordConfirm = (event) => {
    console.log(event.target.value);
    setPasswordConfirm(event.target.value);
}

const handleRegistration = async() => {
    if(password === passwordConfirm){
        try{
            setIsLoading(true);
            const contextToken = await signUp(email,password);
            setContextToken(contextToken);
        }
        catch(e){
            Error(e);
        }
        finally{
            setIsLoading(false);
        }
        
    }
}

const handleLogin = async() => {
        try{
            setIsLoading(true);
            const contextToken = await login(email,password);
            setContextToken(contextToken);
        }
        catch(e){
            Error(e);
        }
        finally{
            setIsLoading(false);
            
            if(contextToken)
                navigate("/dashboard", {state: {name: email}});
        }
}

const handleSignupChange = () => {
    setAction("Sign up")
}

const handleLoginChange = () => {
    setAction("Login")
}

  return (
    <div className='container'>
       <div className= 'header'>
            <button className={action === "Sign up" ? 'header-button-selected' : 'header-button'}  onClick={handleSignupChange}>Sign up</button>
            <button className={action === "Login" ? 'header-button-selected' : 'header-button'}  onClick={handleLoginChange}>Login</button>
        </div>
        <div className= 'inputs'>
        <div className= 'input'>
                <img src={email_icon} alt= ''/>
                <input value={email} type='email' placeholder='Email' onChange={onChangeEmail}/> 
            </div>
            <div className= 'input'>
                <img src={password_icon} alt= ''/>
                <input value={password} type='password' placeholder='Password' onChange={onChangePassword}/> 
            </div>
            {action === "Sign up" && 
            <div className= 'input'>
                <img src={password_icon} alt= ''/>
                <input value={passwordConfirm} type='password' placeholder='Password confirmation'  onChange={onChangePasswordConfirm} /> 
            </div>
            }
        </div>
        <div className="submit-container">
            <div> 
                <button 
                    className="submit"
                    disabled={isLoading ? true : false} 
                    onClick={action === "Login" ? handleLogin : handleRegistration}>
                    {action}
                </button>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup
