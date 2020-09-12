import React from 'react';
import { Link } from 'react-router-dom'


const Transaction = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-8 col-lg-6 mx-auto">
                    <ul className="list-group">
                        <li className="list-group-item">
                            <Link to="/transactions/_trasaction.id_">
                                {/* {transaction._id + " "} */}
                                <span className="badge badge-info"> 
                                {/* {
                                    transaction.isComplete ? "Complete" : "Pending"
                                }                    */}
                                </span>
                            </Link>
                         </li>
    		        </ul>
                </div>
            </div>
        </div>
    );
}

export default Transaction;
