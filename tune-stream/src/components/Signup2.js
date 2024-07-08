import React from "react"

const Signup2 = ({ setPage }) => {

    return (
        <div className="Signup-container">
            <div className="Title-login">
                Sign Up
            </div>
            <div className="Input-container">
                <input placeholder="Email" type="email" className="Text-input"></input>
                <input placeholder="Password" type="password" className="Text-input"></input>
            </div>
            <br></br>
            <div className="Input-container">
                <div onClick={() => setPage("signup1")} className="Login-nav-button">Back</div>
                <div onClick={() => setPage("signup3")} className="Login-nav-button">Next</div>
            </div>
            <br></br>
            <div className="Series-container">
                <div className="Inactive-circle">1</div>
                <div className="Active-circle">2</div>
                <div className="Inactive-circle">3</div>
            </div>  
        </div>
    );
}

export default Signup2