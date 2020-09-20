import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';


const Transaction = () => {
    const [transactions, setTransactions] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://booking-movie-backend.herokuapp.com/transactions/`, {
            headers: {
                "Authorization": `Bearer ${localStorage['appState']}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setTransactions(data)
                setLoading(false)
            })
    }, []);


    const transactionList = transactions.map(transaction => {
        return (
            <li className="list-group-item" key={transaction._id}>
                <Link to={`/transactions/${transaction._id}`}>
                    {transaction._id + " "}
                    <span className="badge badge-info "> 
                    {
                        transaction.isComplete ? "Complete" : "Pending"
                    }                   
                    </span>
                </Link>
                </li>
        )
    })

    return (
        <div id="transaction-container" className="container">
            <div className="row">
                <div className="col-12 col-md-8 col-lg-6 mx-auto">
                    <ul className="list-group">
                        {
                            loading ?
                                <>
                                    <Spinner animation="border" size="sm" />
                                    <Spinner animation="border" />
                                    <Spinner animation="grow" size="sm" />
                                    <Spinner animation="grow" />
                                </>
                                :
                                <>                         
                                 {transactionList}
                                </>
                        }
    		        </ul>
                </div>
            </div>
        </div>
    );
}

export default Transaction;
