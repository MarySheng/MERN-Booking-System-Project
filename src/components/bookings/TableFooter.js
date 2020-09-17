import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TableFooter = ({ bookings, clearAllBookings}) => {
    const total = bookings.bookings.reduce((result, booking) => result + booking.price * booking.quantity, 0)
    
    console.log("bookings=", bookings)
    const onCheckout = () => {
        fetch('https://booking-movie-backend.herokuapp.com/transactions', {
            method: "post",
            body: JSON.stringify(bookings),
            headers: {
                "Authorization": `Bearer ${localStorage['appState']}`,
                  "Content-Type": "application/json"
            }
        })
            .then(response => {
                  console.log(response.status)
                if (response.status === 400) {
                    console.log("some error occur")
                } else {
                     
                    clearAllBookings()
                }
               return response.json()
            })
            .then(data => {
                console.log(data)
            })
            
    }


    return (
        <tr>
            <td colspan="3" className="text-right" id="total">Total</td>
            <td id="total"><strong>&#8369;{total}</strong></td>
            <td>
                <Link onClick={onCheckout} to ='/transactions' className="btn btn-sm w-100 btn-success">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-camera-reels" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M0 8a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8zm11.5 5.175l3.5 1.556V7.269l-3.5 1.556v4.35zM2 7a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2z"/>
                    <path fill-rule="evenodd" d="M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    <path fill-rule="evenodd" d="M9 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                    Checkout
                </Link>
            </td>
        </tr>
    );
}

export default TableFooter;
