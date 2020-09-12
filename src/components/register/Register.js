import React from 'react';
import RegisterForm from './RegisterForm';

const Register = (props) => {
    return (
        <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <h2 className="card-header text-center">Register</h2>
                    <div className="card-body">
                        <RegisterForm />
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
}

export default Register;
