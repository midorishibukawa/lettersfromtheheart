import React from "react";


class SignInForm extends React.Component {
    render (){
        return (
            <div>
                <p>new here?</p>
                <form className="form">
                    <label for="username">username</label>
                    <input type="text" id="username"></input>
                    <label for="email">email</label>
                    <input type="email" id="email"></input>
                    <label for="password">password</label>
                    <input type="password" id="password"></input>
                    <button className="button">submit</button>
                </form>
            </div>
        )
    }
}

export default SignInForm