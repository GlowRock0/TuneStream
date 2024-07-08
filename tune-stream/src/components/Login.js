import React from "react"

const Login = ({ setPage }) => {

    return (
        <div className="Login-container">
            <div className="Title-login">
                Login Page
            </div>
            <div className="Input-container">
                <input placeholder="Email" type="email" className="Text-input"></input>
                <input placeholder="Password" type="password" className="Text-input"></input>
            </div>
            <div className="Input-container">
                <div onClick={() => setPage("home")} className="Login-nav-button">Back</div>
                <div onClick={() => setPage("home")} className="Login-nav-button">Login</div>
            </div>    
        </div>
    );
}

export default Login