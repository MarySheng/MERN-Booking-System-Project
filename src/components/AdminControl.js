import React from 'react';
import { Link } from 'react-router-dom';


const AdminControl = () => {
    return (
    <>
    	<Link to='/products/${id}/edit' className="btn btn-warning my-1 w-100">Edit</Link>

        <button 
        className="btn btn-danger my-1 w-100"
        // onClick={handleClick}
        >Delete</button>
    </>
    );
}

export default AdminControl;
