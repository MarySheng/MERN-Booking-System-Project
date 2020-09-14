import React, {useState, useEffect} from 'react';
import { useParams, Link, Redirect} from 'react-router-dom';


const ViewDetail = ({setDeletedMovie}) => {
    let { id } = useParams();

    const [movie, setMovie] = useState({});
  
    const [isLoading, setIsLoading] = useState(true);

    const [redirect, setRedirect] = useState(false)
    
   

    useEffect(() => {
        fetch(`https://booking-movie-backend.herokuapp.com/movies/${id}`)
            .then(response => response.json())
            .then(data => {
                setMovie(data)
                setIsLoading(false)
            })
    }, []);


    const handleClick = () => {
        fetch(`https://booking-movie-backend.herokuapp.com/movies/${id}`, {
            method: "delete",
            headers: {
                "Authorization": `Bearer ${localStorage["appState"]}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRedirect(true)
                if (setDeletedMovie) {
                    setDeletedMovie({_id: id})
                }
            })
    }

    if (redirect) {
        return <Redirect to='/movies' />
    }


    return (
        <div className="container">
            <div className="row">                        
                <div id="movieImg" className="col-12 col-md-6">
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
                            <h1 className="movieName" id="text-white">{movie.name}</h1>

                            <div className="row">
                
                                <div id="text-white" className="col-3">Description:</div>
                                <div id="text-white" className="col">{movie.description}</div>
                            </div>
                
                            <div className="row mt-2">
                                <div id="text-white" className="col-2 ">Price:</div>
                                <div id="text-white" className="col">&#8369;{movie.price}</div>
                            </div>
                            <div className="row mt-3">
                                <button id="bookNow" className="btn btn-success btn-sm w-25 mr-3">Book Now</button>
                                <Link id="edit" to={`/movies/${id}/edit`}  className="btn btn-warning btn-sm w-25 mr-3">Edit</Link>
                                <button id="delete" onClick={handleClick} className="btn btn-danger btn-sm w-25">Delete</button>
                            </div>

                            <div className="row mt-3">
                                
                                <Link id="back" to="/movies" className="btn btn-warning btn-sm w-25 mx-auto">
                                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-caret-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M10 12.796L4.519 8 10 3.204v9.592zm-.659.753l-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
                                    </svg>
                                    Back to Movies</Link>
                            
                            </div>
                        </div>
                }
            </div>                
        </div>
    );
}

export default ViewDetail;
