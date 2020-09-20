import React from 'react';

const TableFooter = ({bookings}) => {
    const total = bookings.reduce((result, booking) => result + booking.price * booking.quantity, 0)
    return (
        <tfoot>
        <tr>
       		<td colspan="3" className="text-right">Total:</td>
                <td>{total}</td>
        </tr>   
    </tfoot>
    );
}

export default TableFooter;
