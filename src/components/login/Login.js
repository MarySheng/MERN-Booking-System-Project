import React from 'react';
import LoginForm from './LoginForm';

const Login = (props) => {
    return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <h2 className="card-header text-center">Login</h2>
                    <div className="card-body">
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Login;
