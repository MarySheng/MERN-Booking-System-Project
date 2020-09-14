import React from 'react';
import LoginForm from './LoginForm';
import {Redirect} from 'react-router-dom';

const Login = (props) => {
    if(props.authUser.isAuth){
		return <Redirect to="/" />
	}

    return (
        <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <h2 className="card-header text-center">Login</h2>
                    <div className="card-body">
                        <LoginForm setAuthUser={props.setAuthUser}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Login;
