import React from 'react';
import InputGroup from './../inputs/InputGroup';

const LoginForm = (props) => {
    return (
        <form>
        <InputGroup
            type="email"
            name="email"
            displayName="Email:"
            placeholder="Email Here"
            required
            autocomplete="email"
            autofocus
        />
        
        <InputGroup
            type="password"
            name="password"
            displayName="Password:"
            placeholder="Password Here"
            required
            autofocus
        />
        <div className="form-group row mb-0">
            <div className="col-md-6 offset-md-4">
                <button type="submit" className="btn btn-primary">
                        Login
                </button>
            </div>
        </div>
        </form>
        
    );
}

export default LoginForm;
