import React from 'react';
import LoginForm from './LoginForm';
import { Redirect } from 'react-router-dom';


const Login = (props) => {
    if(props.authUser.isAuth){
		return <Redirect to="/movies" />
	}

    return (
        <>
        <div id="login-container" className="container-fluid">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card">
                    <h2 className="mx-auto chain"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-lock-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 9a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V9z"/>
                        <path fill-rule="evenodd" d="M4.5 4a3.5 3.5 0 1 1 7 0v3h-1V4a2.5 2.5 0 0 0-5 0v3h-1V4z"/>
                        </svg></h2>
                    <h2 className="card-header text-center">Login</h2>
                    <div className="card-body">
                        <LoginForm setAuthUser={props.setAuthUser}/>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>        
    );
}

export default Login;
