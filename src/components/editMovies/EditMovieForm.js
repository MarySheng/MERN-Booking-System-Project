import React, {useState, useEffect} from 'react';
import MovieInput from './../inputs/MovieInput';
import {Link, Redirect} from 'react-router-dom';

const EditMovieForm = (props) => {

    const [movie, setmovie] = useState({});

    const [redirect, setRedirect] = useState(false);


    const handleChange = e => {
        setmovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    };


   const handleChangeFile = e => {
        setmovie({
            ...movie,
            image: e.target.files[0]
        });
    };


   const handleSubmit = e => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('name', movie.name);
        formData.append('price', movie.price);
        formData.append('description', movie.description);

        if (movie.image) {
            formData.append('image', movie.image);
        }

        fetch(`https://booking-movie-backend.herokuapp.com/movies/${props.movie._id}`, {
            method: "put",
            headers: {
                "Authorization" : `Bearer ${localStorage['appState']}`
            },
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRedirect(true)
            })
    }


    useEffect(() => {
        setmovie({
            ...movie,
            ...props.movie,
            image: ""
        })
    }, [props.movie])

    if (redirect) {
        return <Redirect to={`/movies/${props.movie._id}`} />
    }


    return (
        <form onSubmit={handleSubmit}>
            <MovieInput
                name="name"
                displayName="Movie Name:"
                type="text"
                value={movie.name}
                required
                autofocus
                handleChange={handleChange}
            />

            <MovieInput
                name="price"
                displayName="Movie Price:"
                type="number"
                required
                autofocus
                handleChange={handleChange}
            />
            
            <MovieInput
                name="image"
                displayName="Movie Image:"
                type="file"
                required
                autofocus
                handleChange={handleChangeFile}
            />

    	

    <label id="text-white" htmlFor="description">Description:</label>
    <br />
    <textarea 
    	className="form-control form-control-sm"  
    	name="description" 
    	id="description" 
    	cols="30" 
        rows="10"
        value={movie.description}
        onChange={handleChange}></textarea>
    	<br />
            <button id="editMovie" className="submit btn-primary d-block btn-sm">Edit Movie</button>
    </form>
    );
}

export default EditMovieForm;
