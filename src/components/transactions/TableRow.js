import React from 'react';

const TableRow = ({booking}) => {
    return (
         <tr>
            <td>{booking.movieId.name}</td>
            <td>{booking.date && booking.date.substring(0,10)}</td>
            
        <td>
    <form>
                                   
        <div className="input-group mb-3">
            <input 
                type="number"
                min="1" 
                name="quantity" 
                className="form-control form-control-sm"
                value={booking.quantity}
                />
            </div>
         </form>

            </td>
            <td>&#8369; {booking.price}</td>
            <td>{booking.subtotal}</td>

    </tr>
    );
}

export default TableRow;
