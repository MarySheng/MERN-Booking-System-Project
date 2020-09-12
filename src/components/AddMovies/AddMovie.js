import React from 'react';
import MovieForm from './MovieForm';

const AddMovie = (props) => {
    return (
        <div className="ui container-fluid">
            <div className="row">
                <div className="col-12 col-md-8 col-lg-6 mx-auto mb-5">
                    <h1 className="text-center">Adding Movie</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6 mx-auto">
                    
                    <MovieForm/>
                    
                 </div> 
            </div>
        </div>
    );
}

export default AddMovie;
