import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const TableBody = ({ booking, removeToBooking, setMyBooking, updateBooking }) => {
    console.log("booking inside table body=", booking)
    console.log("123 = ", updateBooking)

    const [startDate, setStartDate] = useState(new Date());
    console.log(startDate)

    const [hours, setHours] = useState(0);
    


    // const handleChange = e => {
    //     setMyBooking({
    //         startDate: startDate.toDateString()
    //     })
        
    //   setHours({
    //     [e.target.name] : e.target.value 
    //   })

    // }
    console.log(hours)

    const onDateChange = ( date ) => {
        updateBooking({ ...booking, date })
    //     setHours({
    //     [e.target.name] : e.target.value 
    //   })
    }

    const onQuantityChange = (e) => {
        console.log("quantity = ", e.target.value)
        updateBooking({...booking, quantity: e.target.value})
    }


    return (
        <tr>
            <td scope="row" class="text-white">{booking.name}</td>
            <td>                
            <form>
                <div className="input-group mb-3">    
                 <input 
                    type="number"
                    min="1" 
                    name="quantity" 
                    class="form-control form-control-sm"
                    value={booking.quantity} 
                    onChange={onQuantityChange} 
                    // onDateChange={onDateChange}
                />                 
              </div>
            </form>
            </td>
            <td>
                <DatePicker
    		 		selected={booking.date}
    		 		onChange={onDateChange}
    		 		// timeInputLabel="Time:"
    		 		// dateFormat="MM/dd/yyyy h:mm aa"
                    // showTimeInput
                    showTimeSelect
                    dateFormat="Pp"
                   
    		 	/>
            </td>
            <td class="text-white">&#8369; {booking.price}</td>
            <td class="text-white">&#8369;{booking.price*booking.quantity}</td>
        <td>
            <button onClick={() => removeToBooking(booking.movieId)} id="delete" class="btn btn-sm btn-outline-danger text-white">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg>
                Remove
            </button>
        
        </td>
    </tr>
    );
}

export default TableBody;


