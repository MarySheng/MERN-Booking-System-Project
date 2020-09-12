import React from 'react';
import MovieInput from './../inputs/MovieInput';

const MovieForm = (props) => {
    return (
        <form>
            <MovieInput
                name="name"
                displayName="Movie Name:"
                type="text"
            />

            <MovieInput
                name="price"
                displayName="Movie Price:"
                type="number"
            />
            
            <MovieInput
                name="image"
                displayName="Movie Image:"
                type="file"
            />

    	

    <label htmlFor="description">Description:</label>
    <br />
    <textarea 
    	className="form-control form-control-sm"  
    	name="description" 
    	id="description" 
    	cols="30" 
    	rows="10"></textarea>
    	<br />
            <button className="submit btn-primary d-block btn-sm">Add Movie</button>
    </form>
    );
}

export default MovieForm;


