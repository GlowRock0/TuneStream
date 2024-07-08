import React from "react"

const Signup1 = ({ setPage }) => {

    return (
        <div className="Signup-container">
            <div className="Title-login">
                Sign Up
            </div>
            <div className="Input-container">
                <input placeholder="First Name" type="text" className="Text-input"></input>
                <input placeholder="Last name" type="text" className="Text-input"></input>
            </div>
            <br></br>
            <div className="Input-container">
                <div onClick={() => setPage("home")} className="Login-nav-button">Back</div>
                <div onClick={() => setPage("signup2")} className="Login-nav-button">Next</div>
            </div>
            <br></br>
            <div className="Series-container">
                <div className="Active-circle">1</div>
                <div className="Inactive-circle">2</div>
                <div className="Inactive-circle">3</div>
            </div>  
        </div>
    );
}

export default Signup1