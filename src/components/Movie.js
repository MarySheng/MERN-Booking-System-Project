import React, {useState, useEffect} from 'react';
import DisplayMovie from './DisplayMovie';
import { Redirect } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'

const Movie = ({addToBooking, setMovie, authUser}) => {

    const [movies, setMovies] = useState([]);

    const [redirect, setRedirect] = useState(false);

    const [deletedMovie, setDeletedMovie] = useState({});

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://booking-movie-backend.herokuapp.com/movies")
            .then(response => { return response.json() })
            .then(movies => {
                setMovies(movies)
                 setLoading(false)
            })
    }, []);

    useEffect(() => {
        if (deletedMovie) {
            setMovies(movies.filter(movie => {
                return movie._id !== deletedMovie._id
            }))
        }
    },[deletedMovie])




        
    let movieList = movies.map(movie => {
        return (
            <div id="movieList" className="col-12 col-md-4 mt-5" key={movie._id}>
           
                <DisplayMovie authUser={authUser} setMovie={setMovie} addToBooking={addToBooking} movie={movie} setDeletedMovie={setDeletedMovie} setRedirect={setRedirect} />
            
            </div>
        )
    })
   
       
     

    return (
        <div id="container" className="container">
            <div className="row">
                <div className="col-12 col-md-8 mx-auto" >
                 <h1 className="text-center movie-header">Watch All You Can!</h1>
            </div>
            </div>
            <div className="row mt-5" >
                {
                    loading ?
            
                        <>
                            <Spinner animation="border" size="sm" />
                            <Spinner animation="border" />
                            <Spinner animation="grow" size="sm" />
                            <Spinner animation="grow" />
                        </>
                        :
                        <>
                        {movieList}
                        </>
                }
            </div>
        </div>
    );
}

export default Movie;
