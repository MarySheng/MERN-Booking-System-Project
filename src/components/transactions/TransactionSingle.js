import React from 'react';
import TransactionHeader from './TransactionHeader';
import TransactionTable from './TransactionTable';

const TransactionSingle = (props) => {
    return (
         <div className="container">
            <div className="row">
                <div className="col-12">

                {/* {
                    !isLoading ?  */}
                    {/* <TransactionHeader transaction={transaction} /> */}
                    <TransactionHeader />
                   {/* : "Loading..."
                } */}

                </div>
                <div className="col-12">

                {/* {
                    transaction.orders ? */}
                    {/* <TransactionTable orders={transaction.orders} /> */}
                    <TransactionTable />
                    {/* : "Loading..."
                } */}
                </div>
            </div>
        </div>
    );
}

export default TransactionSingle;
