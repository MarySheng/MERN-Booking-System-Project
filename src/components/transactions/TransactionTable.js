import React from 'react';
import TableRow from './TableRow';
import TableFooter from './TableFooter'

const TransactionTable = ({ bookings}) => {
    
    let bookingList = bookings.map(booking => {
        return <TableRow key={booking._id} booking={booking} />
    })


    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        {/* Name */}
                        <th scope="col" className="text-dark">Name</th>
                        {/* price */}
                        <th scope="col" className="text-dark">Price</th>
                        {/* quantity */}
                        <th scope="col" className="text-dark">Quantiy</th>
                        {/* subtotal */}
                        <th scope="col" className="text-dark">Subtotal</th>
                           
                    </tr>
                </thead>
                <tbody>
                    
                    {bookingList}

                </tbody>

                <TableFooter bookings={bookings} />
                   
            </table>
        </div> 

    );
}

export default TransactionTable;
