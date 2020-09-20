import React from 'react';

const TableHead = (props) => {
    return (
        <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Date</th>
            <th>Price</th>
            <th>Subtotal</th>
            <th>Action</th>
        </tr>
    );
}

export default TableHead;
