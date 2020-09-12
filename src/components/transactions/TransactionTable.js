import React from 'react';
import TableRow from './TableRow';
import TableFooter from './TableFooter'

const TransactionTable = (props) => {
    return (
        <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        {/* Name */}
                        <th scope="col">Name</th>
                        {/* price */}
                        <th scope="col">Price</th>
                        {/* quantity */}
                        <th scope="col">Quantiy</th>
                        {/* Date */}
                        <th scope="col">Date</th>
                        {/* subtotal */}
                        <th scope="col">Subtotal</th>
                        {/* action */}
                        {/* { 
                            withAction ?   */}
                        <th scope="col">Action</th> 
                            {/* :  <></>
                        } */}
                    </tr>
                </thead>
                <tbody>
                    
                    <TableRow />

                </tbody>
                {/* {
                    withAction ?  */}
                <TableFooter />
                     {/* : <></>
                } */}
            </table>
        </div> 

    );
}

export default TransactionTable;
