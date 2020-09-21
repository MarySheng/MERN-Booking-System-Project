import React from 'react';

const About = () => {
    return (
        <>
        <div className="container" id="about">
            <div className="row">
                <div className="col-12 text-center mx-auto">
                    <h1>About Us</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <h3>What is WatchItNow?</h3>
                    <p>We, WatchItNow, are a team to provide you with your One Stop Entertainment Solution - With the passion of giving the best , deriving innovation for your ease , inculcating the new trends to let you stay connected with everything happening around.</p>
                </div>
                <div className="col-12 col-md-6">
                    <h3>What we do - because we love what we do:</h3>
                    <p>Online portal that has made buying tickets online easy with simple steps without any unnecessary frills:</p>
                    <ul className="order">
                        <li>Choose your movie</li>
                        <li>Order</li>
                        <li>Pay online or COD and you will get your ticket !</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="movieFooter" className="container">
            <div className="row">
    		<div  className="container d-block d-md-flex">
	    		<div id="latestMovie" className="col-12 col-md-4">
	    			<div className="container text-left text-md-center">
                        <img src="https://icon-library.com/images/movie-png-icon/movie-png-icon-27.jpg" />
                                <h6>Latest Movies</h6> 
                            <hr></hr>    
                        <p className="text-secondary text-center">
                            With the busy life we understand you cannot keep track of which movie is
                            in the cinemas and that’s why WatchItNow is here to serve you. Latest movies ,
                            upcoming movies, show times all over the world, trailers and ticket booking.
                        </p>
		    		</div>
	    		</div>
	    		<div className="col-12 col-md-4">
	    			<div className="container text-left text-md-center">
                        <img src="https://i.pinimg.com/736x/fb/45/ba/fb45baac1eed3c1b19d4aad23b054fa8.jpg" />
                                <h6>Upcoming Movies</h6> 
                            <hr></hr>    
                        <p className="text-secondary text-center">
                            Stay connected with what’s happening around to plan your evenings and weekends.
                            WatchItNow is your one stop solution for staying updated and 
                            buying tickets to be a part of the movie of your choice.
                        </p>
		    		</div>
	    		</div>
	    		<div id="bookTicket" className="col-12 col-md-4">
                    <div className="container text-left text-md-center">
                        <img src="https://c7.uihere.com/files/205/691/757/ticket-logo-burlesque-font-dance-lottery-ticket-icon.jpg" />
                                <h6>Book Tickets</h6> 
                            <hr></hr>    
                        <p className="text-secondary text-center">
                            Booking tickets has never been easy to save time with this fast
                            paced life routine.Choose the movie of your choice , 
                            order the tickets.
                            Want to plan a movie without the hassle of standing in the 
                            queue and taking a risk to check availability – let us bring the 
                            cinema seating to you – log in , choose the movie
                            and pay online to buy your ticket !
                        </p>
		    		</div>
	    	</div>
    	</div>
    	</div>

        </div>
    </>
    );
}

export default About;

