import React, {useState, useEffect} from 'react';
import MovieInput from './../inputs/MovieInput';
import { Redirect } from 'react-router-dom';
import './addMovie.css';
import AlertMessage from './../alertMessage/AlertMessage';


const MovieForm = (props) => {

    const [redirect, setRedirect] = useState({
        latestId: "",
        success: false
    });

    const [movie, setMovie] = useState({
        name: "",
        price: "",
        description: "",
        image: {}
    });

    const [message, setMessage] = useState({
        hasMessage: false,
        color: "",
        message: ""
    })




    if (redirect.success) {
            return <Redirect to={`/movies/${redirect.latestId}`} />
    }

    const handleChange = e => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    };



    const handleChangeFile = e => {
        setMovie({
            ...movie,
            image: e.target.files[0]
        });
    };

    
    const handleSubmit = e => {
        e.preventDefault();

        let formData = new FormData();
        formData.append('name', movie.name)
        formData.append('price', movie.price)
        formData.append('description', movie.description)
        formData.append('image', movie.image)

        fetch('https://booking-movie-backend.herokuapp.com/movies', {
            method: "post",
            body: formData,
            headers: {
                "Authorization": `Bearer ${localStorage['appState']}`
            }
        })
            .then(res => {
                if (res.status == 200) {
                    setMessage({
                        hasMessage: true,
                        color: "success",
                        message: "Added Movie Successfully"
                    })
                }
                return res.json()
            })
            .then(data => {
                if (data._id) {
                    setRedirect({
                        latestId: data._id,
                        success: true
                    })
                }
                console.log(data)
            })
    }



    return (
        <form onSubmit={handleSubmit}>
            {
                message.hasMessage ?
                    <AlertMessage alert={message.color} message={message.message} />
                    : <> </>
            }
            <MovieInput
                name="name"
                displayName="Movie Name:"
                type="text"
                handleChange={handleChange}
            />

            <MovieInput
                name="price"
                displayName="Movie Price:"
                type="number"
                handleChange={handleChange}
            />
            
            <MovieInput
                name="image"
                displayName="Movie Image:"
                type="file"
                handleChange={handleChangeFile}
            />

    	

    <label id="addDesc" htmlFor="description">Description:</label>
    <br />
    <textarea 
    	className="form-control form-control-sm"  
    	name="description" 
    	id="description" 
    	cols="30" 
        rows="10"
        onChange={handleChange}></textarea>
    	<br /> 
            <button id="addMovie" className="submit btn-primary  btn-sm">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                Add Movie</button>
    </form>
    );
}

export default MovieForm;


