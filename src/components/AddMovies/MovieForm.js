import React, {useState, useEffect} from 'react';
import MovieInput from './../inputs/MovieInput';
import { Redirect } from 'react-router-dom';


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

    const [redirectedRoute, setRedirectedRoute] = useState("")

    if (redirect.success) {
        // if (redirectedRoute == "add_movie")
            return <Redirect to={`/movies/${redirect.latestId}`} />
        // else if (redirectedRoute === "booking"")
        //             return <Redirect to={`/booking/${redirect.latestId}`} state: { id: '123'  />

    }

    const handleChange = e => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value
        });
    };

    // const onBooking = e => {
    //     fetch().then()
    //     setRedirectedRoute("booking")
    // }


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
            .then(res => res.json())
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

    	

    <label htmlFor="description">Description:</label>
    <br />
    <textarea 
    	className="form-control form-control-sm"  
    	name="description" 
    	id="description" 
    	cols="30" 
        rows="10"
        onChange={handleChange}></textarea>
    	<br />
            <button className="submit btn-primary d-block btn-sm">Add Movie</button>
    </form>
    );
}

export default MovieForm;


