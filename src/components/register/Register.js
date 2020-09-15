import React from 'react';
import RegisterForm from './RegisterForm';
import './register.css';


const Register = (props) => {
    return (
        <>
        <div id="register-container" className="container-fluid">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card">
                        <i class="fas fa-user-plus fa-3x text-center userRegister"></i>
                        <h2 className="card-header text-center">
                            
                            Register</h2>
                <div className="card-body">
                    <RegisterForm />
                </div>
            </div>
            </div>
            </div>
            </div>
        
           

    </>
        
 
    );
}

export default Register;
