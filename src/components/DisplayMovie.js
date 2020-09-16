import React, { useState } from 'react';
import MovieInput from './../components/inputs/MovieInput';
import { Link, useParams} from 'react-router-dom';
import AdminControl from './AdminControl';
import './movie.css';

const DisplayMovie = ({movie, withDescription, setRedirect, setDeletedMovie, addToBooking }) => {
    


    const [quantity, setQuantity] = useState(0);

    
    const handleChange = e => {
        setQuantity(e.target.value)
    }
    
    

     const onBooking = () => {
     addToBooking(movie._id, quantity, movie.name, movie.price)
     setRedirect(true)
    }
   
  
      
    return (
         <>
            <img src={`https://booking-movie-backend.herokuapp.com/${movie.image}`}
                className="w-100" />
            
            <h5 id="text-white">{movie.name}</h5>
            <p>&#8369;{movie.price}</p>
            {
                withDescription ?
                <p id="text-white">{movie.description}</p>
                : <> </>    
            }
            
            
            <MovieInput
                type="number"
                name="quantity"
                displayName="Ticket"
                min="1"
                handleChange={handleChange}
                id="qty"            
                />          
            
            <div className="row">
                <div className="col col-md-6">
                    <Link id="bookNow" to='booking'  onClick={onBooking} className="btn btn-success">Book Now</Link>
                    
                </div>
                <div className="col col-md-6">
                   
                    <Link id="detail" to={`/movies/${movie._id}`} className="btn btn-primary">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-eye" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.134 13.134 0 0 0 1.66 2.043C4.12 11.332 5.88 12.5 8 12.5c2.12 0 3.879-1.168 5.168-2.457A13.134 13.134 0 0 0 14.828 8a13.133 13.133 0 0 0-1.66-2.043C11.879 4.668 10.119 3.5 8 3.5c-2.12 0-3.879 1.168-5.168 2.457A13.133 13.133 0 0 0 1.172 8z"/>
                        <path fill-rule="evenodd" d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                        </svg>
                        Details</Link>
                </div>
            </div>
            
            <AdminControl setDeletedMovie={setDeletedMovie} setRedirect={setRedirect} id={movie._id} />
            
        </>
    );
}

export default DisplayMovie;
