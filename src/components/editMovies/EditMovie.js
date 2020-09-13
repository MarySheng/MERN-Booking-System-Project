import React, {useState, useEffect} from 'react';
import EditMovieForm from './EditMovieForm';
import {useParams} from 'react-router-dom';

const EditMovie = (props) => {

    const { id } = useParams();

    const [movie, setMovie] = useState({
        name: "",
        image: "",
        price: "",
        description: ""
    });

    useEffect(() => {
        fetch(`https://booking-movie-backend.herokuapp.com/movies/${id}`)
            .then(res => res.json())
            .then(data => {
                setMovie(data)
            })
    },[])


    return (
        <div className="ui container-fluid">
            <div className="row">
                <div className="col-12 col-md-8 col-lg-6 mx-auto mb-5">
                    <h1 className="text-center">Edit Movie</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 mx-auto">
                    
                    <EditMovieForm movie={movie}/>
                    
                 </div> 
            </div>
        </div>
    );
}

export default EditMovie;
