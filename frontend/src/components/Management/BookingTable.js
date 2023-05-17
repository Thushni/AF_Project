import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"

//search bookin the hotel
function BookingTable() {

    const [bookingsHOTEL, setBookingsHOTEL] = useState([]);

    useEffect(() => {
        function getBookingsHOTEL() {
            axios.get("http://localhost:8070/BookingHOTEL/").then((res) => {
                setBookingsHOTEL(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getBookingsHOTEL();
    }, [bookingsHOTEL])

     


    const deleteBookingHOTEL = (id) =>{
        // alert(id)
        var answer = window.confirm("Are you sure you want to reject this booking?")

if(answer){
    axios.delete("http://localhost:8070/BookingHOTEL/delete/"+id).then((res)=>{
            if(res.status===200){
                alert("Booking Rejected")
          
            }
        })
}    }

    return (
        <div>
        <center><h3 ><b>Hotels Booking Details</b></h3></center> <br/>
        <table class="table">
            <thead>
                <tr>
                    <th scope='col'>No</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Rooms</th>
                    <th scope="col">Rooms Options</th>
                    <th scope="col">Contact No</th>
                    <th scope="col">Email</th>
                    <th scope="col">Check-in date</th>
                    <th scope="col">Check-out date</th>
                    <th scope="col">Confirm</th>
                    <th scope="col">Cancel</th>
                </tr>
            </thead>
            <tbody>
                {
                    bookingsHOTEL.map((BookingHOTEL , index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{BookingHOTEL.fName}</td>
                                <td>{BookingHOTEL.lName}</td>
                                <td>{BookingHOTEL.room}</td>
                                <td>{BookingHOTEL.ro}</td>
                                <td>{BookingHOTEL.contactNo}</td>
                                <td>{BookingHOTEL.email}</td>
                                <td>{BookingHOTEL.fdate}</td>
                                <td>{BookingHOTEL.ldate}</td>
                                <td> <Link to={"update/"+BookingHOTEL._id}><button  className='btn btn-warning'>Confirm</button></Link> </td>
                                <td> <button onClick={()=>{deleteBookingHOTEL(BookingHOTEL._id)}} className='btn btn-danger'>Reject</button> </td>
                            </tr>
                        )
                    })
                }

            </tbody>
        </table>
        </div>
      
    )
}

export default BookingTable;