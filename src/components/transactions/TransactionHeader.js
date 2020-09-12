import React from 'react';

const TransactionHeader = () => {
    return (
        <table className="table">
            <tbody>
       {/* transaction code */}
            <tr>
                <td>Transaction code</td>
                <td>_transaction._id_</td>
            </tr>
          

            <tr>
               	<td>Customer Name</td>
                <td>_transaction.customerId.fullname_</td>
            </tr>
                            

            {/* Booking date */}
            <tr>
                <td>Booking Date</td>
                <td>_transaction.createdAt_</td>
            </tr>

           {/* status */}
            <tr>
              	<td>Status</td>
                <td>_transaction.isComplete ? "Complete" : "Pending"_</td>
            </tr>
        </tbody>
    </table>

    );
}

export default TransactionHeader;

