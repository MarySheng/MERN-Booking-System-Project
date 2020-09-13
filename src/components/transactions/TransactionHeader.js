import React from 'react';

const TransactionHeader = ({transaction}) => {
    return (
        <table className="table">
            <tbody>
       {/* transaction code */}
            <tr>
                <td>Transaction code</td>
                    <td>{transaction._id}</td>
            </tr>
          

            <tr>
               	<td>Customer Name</td>
                    <td>{transaction.customerId.fullname}</td>
            </tr>
                            

            {/* Booking date */}
            <tr>
                <td>Booking Date</td>
                    <td>{transaction.createdAt}</td>
            </tr>

           {/* status */}
            <tr>
              	<td>Status</td>
                    <td>{transaction.isComplete ? "Complete" : "Pending"}</td>
            </tr>
        </tbody>
    </table>

    );
}

export default TransactionHeader;

