import React from 'react';
import MovieInput from './../components/inputs/MovieInput';
import { Link } from 'react-router-dom';
import AdminControl from './AdminControl';

const DisplayMovie = ({movie, withDescription, setRedirect}) => {
    return (
         <>
            <img src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t31.0-8/12593577_1263674986980046_2730109566877685141_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_eui2=AeHn2egSf16BRo9SkR9mcJWFqR7iHnMGBiKpHuIecwYGIq2zpf_WnLB-0XpkuQ9uocmllMaiiMV4Xf-cPIKEWjGy&_nc_ohc=8o7AQXWJlAUAX88gdod&_nc_ht=scontent.fmnl17-1.fna&oh=e366fb306413352d2b81d049a20b1316&oe=5F812ECE" alt=""
                className="w-100" />
            
            <h4>{movie.name}</h4>
            <p>&#8369;{movie.price}</p>
            {
                withDescription ?
                <p>{movie.description}</p>
                : <> </>    
            }
            

            <MovieInput
                type="number"
                name="quantity"
                displayName="Ticket"
                min="1"
            />
            
            <button className="btn btn-success w-100">Book Now</button>
            <Link to={`/movies/${movie._id}`} className="btn btn-primary my-1 w-100">See Details</Link>

            <AdminControl setRedirect={setRedirect} id={movie._id} />
        </>
    );
}

export default DisplayMovie;
