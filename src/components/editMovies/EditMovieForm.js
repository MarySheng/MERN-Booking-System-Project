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
                autofocus
                handleChange={handleChange}
            />

            <MovieInput
                name="price"
                displayName="Movie Price:"
                type="number"
                autofocus
                handleChange={handleChange}
            />
            
            <MovieInput
                name="image"
                displayName="Movie Image:"
                type="file"
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
            <button id="editMovie" className="submit btn-primary d-block btn-sm">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                </svg>
                Edit Movie</button>
    </form>
    );
}

export default EditMovieForm;
