import React, {useState, useEffect} from 'react';
import { useParams, Link, Redirect} from 'react-router-dom';


const ViewDetail = ({setDeletedMovie}) => {
    let { id } = useParams();

    const [movie, setMovie] = useState({});
  
    const [isLoading, setIsLoading] = useState(true);

    const [redirect, setRedirect] = useState(false)
    
   

    useEffect(() => {
        fetch(`https://booking-movie-backend.herokuapp.com/movies/${id}`)
            .then(response => response.json())
            .then(data => {
                setMovie(data)
                setIsLoading(false)
            })
    }, []);


    const handleClick = () => {
        fetch(`https://booking-movie-backend.herokuapp.com/movies/${id}`, {
            method: "delete",
            headers: {
                "Authorization": `Bearer ${localStorage["appState"]}`
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

    if (redirect) {
        return <Redirect to='/movies' />
    }


    return (
        <div id="singleContainer" className="container">
            <div className="row">                        
                <div id="movieImg" className="col-12 col-md-6">
                    <img src={`https://booking-movie-backend.herokuapp.com/${movie.image}`}
                        className="w-100" />
                </div>

                {
                    isLoading ?
                        <div className="spinner-border" role="status">
                            <span className="sr-only text-center mx-auto">Loading...</span>
                        </div>
                        :
                        <div className="col-12 col-md-6">
                            <h1 className="movieName" id="text-white">{movie.name}</h1>

                            <div className="row">
                
                                <div id="text-white" className="col-3">Description:</div>
                                <div id="text-white" className="col">{movie.description}</div>
                            </div>
                
                            <div className="row mt-2">
                                <div id="text-white" className="col-2 ">Price:</div>
                                <div id="text-white" className="col">&#8369;{movie.price}</div>
                            </div>
                            <div className="row mt-3">
                                        {/* Book Now */}
                                <button id="bookNow" className="btn btn-success btn-sm w-25 mr-3">Book Now</button>

                                        {/* Edit */}
                                <Link id="edit" to={`/movies/${id}/edit`} className="btn btn-warning btn-sm w-25 mr-3">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                    Edit</Link>
                                
                                     {/* Delete */}
                                <button id="delete" onClick={handleClick} className="btn btn-danger btn-sm w-25">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                    </svg>
                                    Delete</button>
                            </div>

                            <div className="row mt-3">
                                
                                <Link id="back" to="/movies" className="btn btn-warning btn-sm w-25 mx-auto">
                                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-caret-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10 12.796L4.519 8 10 3.204v9.592zm-.659.753l-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
                                    </svg>
                                    Back to Movies</Link>
                            
                            </div>
                        </div>
                }
            </div>                
        </div>
    );
}

export default ViewDetail;
