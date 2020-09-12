import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';


const ViewDetail = (props) => {
    let { id } = useParams();

    const [movie, setMovie] = useState({});

    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        fetch(`https://booking-movie-backend.herokuapp.com/movies/${id}`)
            .then(response => response.json())
            .then(data => {
                setMovie(data)
                setIsLoading(false)
            })
    }, []);


    return (
        <div className="container">
            <div className="row">                        
                <div className="col-12 col-md-6">
                    <img src="https://scontent.fmnl17-1.fna.fbcdn.net/v/t31.0-8/12593577_1263674986980046_2730109566877685141_o.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_eui2=AeHn2egSf16BRo9SkR9mcJWFqR7iHnMGBiKpHuIecwYGIq2zpf_WnLB-0XpkuQ9uocmllMaiiMV4Xf-cPIKEWjGy&_nc_ohc=8o7AQXWJlAUAX88gdod&_nc_ht=scontent.fmnl17-1.fna&oh=e366fb306413352d2b81d049a20b1316&oe=5F812ECE"
                        className="w-100" />
                </div>

                {
                    isLoading ?
                        <div className="spinner-border" role="status">
                            <span className="sr-only text-center mx-auto">Loading...</span>
                        </div>
                        :
                        <div className="col-12 col-md-6">
                            <h1>{movie.name}</h1>

                            <div className="row">
                
                                <div className="col-2">Description:</div>
                                <div className="col">{movie.description}</div>
                            </div>
                
                            <div className="row mt-2">
                                <div className="col-1">Price:</div>
                                <div className="col">&#8369;{movie.price}</div>
                            </div>
                            <div className="row mt-3">
                                <button className="btn btn-success btn-sm w-25 mr-3">Book Now</button>
                                <button className="btn btn-warning btn-sm w-25 mr-3">Edit</button>
                                <button className="btn btn-danger btn-sm w-25">Delete</button>
                            </div>
                        </div>
                }
            </div>                
        </div>
    );
}

export default ViewDetail;
