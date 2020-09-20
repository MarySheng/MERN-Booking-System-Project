import React, {useState} from 'react';
import InputGroup from './../inputs/InputGroup';
import { Redirect } from 'react-router-dom';
import AlertMessage from './../alertMessage/AlertMessage';
import { Link } from 'react-router-dom';
import './login.css';

const LoginForm = (props) => {

    const [ credentials, setCredentials ] = useState({
		email: "",
		password: ""
	});

	const [alert, setAlert] = useState({
		hasAlert: false,
		color:"",
		message: ""
	});

	const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.name]:e.target.value
		})
	};

	const [isSuccess, setIsSuccess] = useState(false);

	// setting a loading when user click login button without putting credentials
	const [isLoading, setIsLoading] = useState(false);


	// after user login, it will redirect to home
	if(isSuccess){
		return <Redirect to="/movies" />
	}

	
	const handleSubmit = e => {
		e.preventDefault()
		setIsLoading(true)

		fetch(`https://booking-movie-backend.herokuapp.com/users/login`, {
			method: "post",
			body: JSON.stringify(credentials),
			headers: {
				"Content-Type" : "application/json"
			}
		})
			 .then( response => {
            if(response.status !== 200) {
                setAlert({
                    hasAlert: true,
                    color: "danger",
                    message : "Check your credentials" 
                })
            }else {
            	setIsSuccess(true);	
            }
            return response.json()
        })

			.then(data => {
				// check the token and save to local storage
				if(data.token){
					localStorage["appState"] = data.token
					props.setAuthUser({
						isAuth: true,
						fullname: data.user.fullname,
						email:data.user.email,
						isAdmin: data.user.isAdmin
					})
					setIsSuccess(true)
				}else {
					setIsLoading(false)
				}
				
				console.log(data)
			});

    }
    
    return (
        <form onSubmit={handleSubmit}>
            {
     	alert.hasAlert ? 
    	<AlertMessage color={alert.color} message={alert.message} />
     	: <> </>
     }
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
			<div className="form-group row mb-0">
				<div className="no-account">
                    <small>No Account Yet?</small>
                    <Link to='/register'><small>Sign Up Here</small></Link>
                </div>
            <div className="col-md-6 offset-md-4">
                <button id="login" type="submit" className="btn btn-primary" disabled={isLoading}>
            {
                isLoading ?
                "Login..." :
                "Login"
            }
                </button>
            </div>
        </div>
        </form>
        
    );
}

export default LoginForm;
