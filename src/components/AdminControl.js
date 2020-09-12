import React from 'react';
import { Link, Redirect } from 'react-router-dom';


const AdminControl = ({ id, setRedirect, setDeletedMovie }) => {
    
    const handleClick = () => {
        fetch(`https://booking-movie-backend.herokuapp.com/movies/${id}`, {
            method: "delete",
            headers: {
                "Authorization": `Bearer ${localStorage['appState']}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRedirect(true)
                if (setDeletedMovie) {
                    setDeletedMovie({_id: id})
                }
            })
    }

    return (
    <>
    	<Link to={`/movies/${id}/edit`} className="btn btn-warning my-1 w-100">Edit</Link>

        <button 
        className="btn btn-danger my-1 w-100"
        onClick={handleClick}
        >Delete</button>
    </>
    );
}

export default AdminControl;
