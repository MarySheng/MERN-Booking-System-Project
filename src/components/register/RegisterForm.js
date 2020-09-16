import React, {useState} from 'react';
import InputGroup from './../inputs/InputGroup';
import AlertMessage from './../alertMessage/AlertMessage';
import { Link } from 'react-router-dom';

const RegisterForm = (props) => {

    const [user, setUser] = useState({
        fullname: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState({
        hasError: false,
        color: "danger",
        message: "Please Check Your Credentials"
    });

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = e => {
        e.preventDefault();
        fetch('https://booking-movie-backend.herokuapp.com/users/register', {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                console.log(response.status)
                if (response.status === 400) {
                    setError({
                        ...error,
                        hasError: true
                    })
                } else {
                    setError({
                        hasError: true,
                        color: "success",
                        message: "Please login to continue"
                    })
                    return response.json()
                }
            })
            .then(data => {
                console.log(data)
            })
    };

    return (
        <form onSubmit={handleSubmit}>
            {
                error.hasError ?
                <AlertMessage 
                color= { error.color }
                message={error.message} />
            : <> </>
                
            }

            <InputGroup
                type="text"
                name="fullname"
                placeholder="Enter Name Here"
                required
                autocomplete="name"
                autofocus  
                handleChange={handleChange}
            /> 

            <InputGroup
                type="email"
                name="email"
                placeholder="Email Here"
                required
                autocomplete="email"
                autofocus
                handleChange={handleChange}
            />
            
            <InputGroup
                type="password"
                name="password"
                placeholder="Password Here"
                required
                autofocus
                handleChange={handleChange}
            />

            <InputGroup
                type="password"
                name="confirmPassword" 
                placeholder="Confirm Password Here"
                required
                autofocus
                handleChange={handleChange}
            />
            
            <div className="form-group row mb-0">
                <div className="col-md-6 offset-md-4">
                    <Link to='login' id="register" type="submit" className="btn btn-primary">
                        Register
                    </Link>
                </div>
            </div>
        </form>                                           
    );
}                   
                             
   

export default RegisterForm;
