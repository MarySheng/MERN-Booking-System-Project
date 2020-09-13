import React, {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';

const Logout = ({ setAuthUser }) => {

    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        localStorage.removeItem("appState")
        setAuthUser({
            isAuth: false,
            _id: "",
            fullname: "",
            email: ""
        })
        setRedirect(true);
    }, [])

    if (redirect) {
        return <Redirect to='/' />
    }

    return (
        <div>
            Please wait a moment...
        </div>
    );
}

export default Logout;


