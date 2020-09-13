import React from 'react';

const TableRow = ({booking}) => {
    return (
         <tr>
            <td>{booking.movieId.name}</td>
            <td>&#8369; {booking.price}</td>
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
            <div className="input-group-append">
                <button className="btn btn-outline-secondary btn-sm" type="submit" id="button-addon2"><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pen" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M5.707 13.707a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391L10.086 2.5a2 2 0 0 1 2.828 0l.586.586a2 2 0 0 1 0 2.828l-7.793 7.793zM3 11l7.793-7.793a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 1 0 1.414L5 13l-3 1 1-3z"/>
                    <path fill-rule="evenodd" d="M9.854 2.56a.5.5 0 0 0-.708 0L5.854 5.855a.5.5 0 0 1-.708-.708L8.44 1.854a1.5 1.5 0 0 1 2.122 0l.293.292a.5.5 0 0 1-.707.708l-.293-.293z"/>
                    <path d="M13.293 1.207a1 1 0 0 1 1.414 0l.03.03a1 1 0 0 1 .03 1.383L13.5 4 12 2.5l1.293-1.293z"/>
                    </svg></button>
            </div>
            </div>
         </form>

        </td>
            <td><input type="date" name="date" /></td>
            <td>{booking.subtotal}</td>

    </tr>
    );
}

export default TableRow;
