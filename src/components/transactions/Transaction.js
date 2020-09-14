import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'


const Transaction = () => {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch("https://booking-movie-backend.herokuapp.com/transactions", {
            headers: {
                "Authorization": `Bearer ${localStorage['appState']}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setTransactions(data)
            })
    }, []);


    const transactionList = transactions.map(transaction => {
        return (
            <li className="list-group-item" key={transaction._id}>
                <Link to={`/transactions/${transaction._id}`}>
                    {transaction._id + " "}
                    <span className="badge badge-info"> 
                    {
                        transaction.isComplete ? "Complete" : "Pending"
                    }                   
                    </span>
                </Link>
                </li>
        )
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8 col-lg-6 mx-auto">
                    <ul className="list-group">
                        {transactionList}
    		        </ul>
                </div>
            </div>
        </div>
    );
}

export default Transaction;
