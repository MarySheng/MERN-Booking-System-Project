import React, {useState, useEffect} from 'react';
import DisplayMovie from './DisplayMovie';
import {Redirect} from 'react-router-dom';

const Movie = () => {

    const [movies, setMovies] = useState([]);

    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        fetch("https://booking-movie-backend.herokuapp.com/movies")
            .then(response => { return response.json() })
            .then(movies => { setMovies(movies) })
    });




        
    let movieList = movies.map(movie => {
        return(
        <div className="col-12 col-md-3 mt-5" key={movie._id}>
            <DisplayMovie movie={movie} setRedirect={setRedirect} />
        </div>
        )
    })
   
       
     

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-3 mx-auto" >
                 <h1 className="text-center ">Movie Time</h1>
            </div>
            </div>
            <div className="row mt-5">
               {movieList}                 
            </div>
        </div>
    );
}

export default Movie;
