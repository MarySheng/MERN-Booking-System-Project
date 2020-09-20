import React, { useState, useEffect } from 'react';
import {useParams, Redirect} from 'react-router-dom'

const TransactionHeader = ({ transaction, authUser }) => {
    

	const { id } = useParams();

	const [isComplete, setIsComplete] = useState({
		isComplete: false
	})
	
	const [isRedirect, setIsRedirect] = useState(false);


    

    useEffect(() => {
		fetch(`https://booking-movie-backend.herokuapp.com/transactions/${id}`, {
			headers: {
				"Authorization" : `Bearer ${localStorage["appState"]}`
			}
		})
		.then(response => response.json())
		.then( data => {
			setIsComplete(data)
		});
    }, [])
    
    const handleChange = e => {
		if(e.target.value === "true") {
			setIsComplete({
				...isComplete,
				isComplete: true
			})
			
		} else {
			setIsComplete({
				...isComplete,
				isComplete: false
			})
		}
	}
	console.log(isComplete)

 const handleSubmit = e => {
    	e.preventDefault()

    	fetch(`https://booking-movie-backend.herokuapp.com/transactions/${id}`, {
    		method: "put",
    		body: JSON.stringify(isComplete),
    		headers : {
    			"Content-Type" : "application/json",
    			'Authorization' : `Bearer ${localStorage['appState']}`
    		},
    	})
    	.then(res => res.json())
    	.then(data => {
    		if(data._id){
				console.log(data)
				setIsRedirect(true)
               
    		}
    	})
    }	

	  if(isRedirect) {
        return <Redirect to="/transactions" />
    }

	console.log("transaction = ", transaction)


    return (
        <table className="table">
            <tbody>
       {/* transaction code */}
            <tr>
                <td className="font-weight-bold">Transaction code</td>
                    <td>{transaction._id}</td>
            </tr>
          

            <tr>
               	<td className="font-weight-bold">Customer Name</td>
                    <td>{transaction.customerId.fullname}</td>
            </tr>
                            

            {/* Booking date */}
            {/* <tr>
                <td className="font-weight-bold">Booking Date</td>
                    <td>{transaction.updatedAt && transaction.updatedAt.substring(0,10)}</td>
            </tr> */}

           {/* status */}
            <tr>
					<td className="font-weight-bold">Status</td>
						{
							(authUser && authUser.isAdmin) ?
							<td>
								<select onChange={handleChange}>
									<option value={false}>Pending</option>
									<option value={true}>Complete</option>
								</select>
								<button onClick={handleSubmit} className="btn btn-info btn-sm ml-2 text-uppercase">Update</button>
							</td>
							:
							<td>{transaction.isComplete ? "Completed" : "Pending"}</td>
					}
					
            </tr>
        </tbody>
    </table>

    );
}

export default TransactionHeader;

