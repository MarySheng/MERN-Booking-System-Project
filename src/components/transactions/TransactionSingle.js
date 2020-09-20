import React, {useState, useEffect} from 'react';
import TransactionHeader from './TransactionHeader';
import TransactionTable from './TransactionTable';
import {useParams} from 'react-router-dom';

const TransactionSingle = ({authUser}) => {

    const { id } = useParams();

    const [transaction, setTransaction] = useState({
        _id: "",
        customerId: {
            fullname: ""
        }
    });


    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://booking-movie-backend.herokuapp.com/transactions/${id}`, {
            headers: {
                "Authorization": `Bearer ${localStorage['appState']}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data._id) {
                    setLoading(false)
                } 
                setTransaction(data)
            })
    }, []);

    return (
         <div id="trans-container" className="container">
            <div className="row">
                <div className="col-12">

                {
                    !loading ? 
                    <TransactionHeader authUser={authUser} transaction={transaction} /> 
        
                    : "Loading..."
                } 

                </div>
                <div className="col-12">

                {
                    transaction.bookings ?
                    <TransactionTable bookings={transaction.bookings} />
                
                    : "Loading..."
                } 
                </div>
            </div>
        </div>
    );
}

export default TransactionSingle;
