import React  from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TableFooter from './TableFooter'
import './booking.css';
import { Link } from 'react-router-dom';

const Booking = ({myBooking:bookings, removeToBooking, clearAllBookings, setMyBooking, updateBooking}) => {

    console.log("!!! = ", updateBooking)

    console.log(bookings)
    const bookingList = bookings.bookings.map(booking => {
        return (
            <TableBody key={booking._id} booking={booking} setMyBooking={setMyBooking} removeToBooking={removeToBooking} updateBooking={updateBooking}/>
            
        ) 
    })



    return (
        <div id="booking-container" class="container-fluid">
        <div class="row">
            <div id="mybooking" class="col-12">
                    <h1 className="text-center">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-camera-reels-fill mr-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8z"/>
                        <circle cx="3" cy="3" r="3"/>
                        <circle cx="9" cy="3" r="3"/>
                        </svg>
                    My Booking
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-camera-reels-fill ml-3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8z"/>
                        <circle cx="3" cy="3" r="3"/>
                        <circle cx="9" cy="3" r="3"/>
                        </svg>
                </h1>
            </div>
        </div>

        
        {/* TABLE BOOKING */}
        <div class="row">
            <div class="col-12 col-md-9 mx-auto">
                <table class="table table-reponsive">
                     {/* TABLE HEAD */}
                    <thead>
                        <TableHead />
                    </thead>
                        {/* TABLE BODY */}
                    <tbody>
                        {bookingList} 
                           
                    </tbody>
                        
                        {/* TABLE FOOTER */}
                    <tfoot>
                            <TableFooter bookings={bookings} clearAllBookings={clearAllBookings}/>
                    </tfoot>
                </table>

               {/* end booking table */}
            </div>
        </div>

        {/* clear Booking */}
        <div class="row mt-5">
            <div  class="col-12 col-md-4 mt-4">
                 
                <button onClick={clearAllBookings} id="clear" class="btn btn-sm btn-outline-danger text-white">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                    Clear Booking</button>
            </div>
                
            <div className="col-12 col-md-3 mx-auto">
                <Link id="back" to="/movies" className="btn btn-warning w-35 btn-sm">
                    <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-caret-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 12.796L4.519 8 10 3.204v9.592zm-.659.753l-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
                    </svg>
                    Back to Movies</Link>
            </div>
                    
        </div>
        

    </div>

    );
}

export default Booking;
