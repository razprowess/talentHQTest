import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { setLoginUser } from "../../redux/auth/actions";
import './login.css';

//valid email for hard coded auth
const VALID_EMAIL = "test@gmail.com";

//valid password for hard coded auth
const VALID_PASSWORD = "pass123";

function LoginPage(props: any) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const storeUserCredentails = (email:string)=>{
        const user = {
            email,
            name: "Test User"
        }
        localStorage.setItem("user",JSON.stringify(user));
        dispatch(setLoginUser(user));
    }

    const submitLogin = (e:any) =>{
        e.preventDefault();

        if(email === VALID_EMAIL && password === VALID_PASSWORD){
            storeUserCredentails(email);  
            history.replace("/");
        }

        else{
            alert("Invalid email and password provided");
        }

    }

    return <div className="login-wrapper">

        <p className="login-header-text">Enter your credentials below to login</p>

        <form onSubmit={submitLogin}>

            <input className="login-input"
                placeholder="Enter email address"
                type="email"
                required
                value={email} onChange={(e) => setEmail(e.target.value)} />

            <input className="login-input"
                placeholder="Enter password"
                type="password"
                required
                value={password} onChange={(e) => setPassword(e.target.value)} />

            <button type="submit" className="login-button">LOGIN</button>

        </form>

    </div>

}

export default LoginPage;