import React from 'react';
import InputGroup from './../inputs/InputGroup';

const RegisterForm = () => {
    return (
        <form>
            <InputGroup
                type="text"
                name="fulname"
                placeholder="Enter Name Here"
                displayName="Fullname:"
                required
                autocomplete="name"
                autofocus         
            /> 

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

            <InputGroup
                type="password"
                name="confirmPassword"
                displayName="Confirm Password:" 
                placeholder="Password Here"
                required
                autofocus
            />
            
            <div className="form-group row mb-0">
                <div className="col-md-6 offset-md-4">
                    <button type="submit" className="btn btn-primary">
                        Register
                    </button>
                </div>
            </div>
        </form>                                           
    );
}                   
           
    
                
                  
                    
                      
                        
                  
                    
                        
                
                 
                       
   

export default RegisterForm;
