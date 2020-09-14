import React, { useState } from 'react';
import MovieInput from './../components/inputs/MovieInput';
import { Link } from 'react-router-dom';
import AdminControl from './AdminControl';
import './movie.css';

const DisplayMovie = ({setMovie, movie, withDescription, setRedirect, setDeletedMovie, props}) => {

    // const [movie, setMovie] => useState({
    //     name: "",
    //     quantity: 0
    // });

const handleSubmit = e => {
    e.preventDefault();
        props.addToBooking(movie)
}
    
const handleChange = e => {
    setMovie({
        ...movie,
        [e.target.id] : e.target.value
    })
}
    
    return (
         <>
            <img src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t31.0-8/12593577_1263674986980046_2730109566877685141_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_eui2=AeHn2egSf16BRo9SkR9mcJWFqR7iHnMGBiKpHuIecwYGIq2zpf_WnLB-0XpkuQ9uocmllMaiiMV4Xf-cPIKEWjGy&_nc_ohc=8o7AQXWJlAUAX88gdod&_nc_ht=scontent.fmnl17-1.fna&oh=e366fb306413352d2b81d049a20b1316&oe=5F812ECE" alt=""
                className="w-100" />
            
            <h5 id="text-white">{movie.name}</h5>
            <p className="text-white">&#8369;{movie.price}</p>
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
                    <button id="bookNow" onClick={handleSubmit} className="btn btn-success">Book Now</button>
                    
                </div>
                <div className="col col-md-6">
                   
                    <Link id="detail" to={`/movies/${movie._id}`} className="btn btn-primary">See Details</Link>
                </div>
            </div>
            
            <AdminControl setDeletedMovie={setDeletedMovie} setRedirect={setRedirect} id={movie._id} />
                
            
            
            
           
            
        </>
    );
}

export default DisplayMovie;
