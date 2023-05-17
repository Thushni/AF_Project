import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import './Hotel.css';

function HotelTable() {

    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        function getHotels() {
            axios.get("http://localhost:8070/Hotel/").then((res) => {
                setHotels(res.data);
            }).catch((err) => {
                alert(err.message);
            })
        }
        getHotels();
    }, [hotels])


    const deleteHotel = (id) =>{
        // alert(id)
        var answer = window.confirm("Are you sure")

if(answer){
    axios.delete("http://localhost:8070/Hotel/delete/"+id).then((res)=>{
            if(res.status===200){
                alert("Hotel deleted")
                // getHotels()
            }
        })
}    }

    return (
        
      <div className="container">

        <a href="http://localhost:3000/"><button class="abc" type="button">Hotels Details</button> </a> <br/> 
        <br/><br/>
       
        <table class="table">
            <thead>
                <tr>
                    <th scope='col'>No.</th>
                    <th scope="col">Hotel Name</th>
                    <th scope="col">Hotel Type</th>
                    <th scope="col">Location</th>
                    <th scope="col">Amount</th>
                    <th scope="col">No Of Room</th>
                    <th scope="col">Description</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    hotels.map((Hotel , index) => {
                        return (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{Hotel.hotelName}</td>
                                <td>{Hotel.hotelType}</td>
                                <td>{Hotel.location}</td>
                                <td>{Hotel.amount}</td>
                                <td>{Hotel.noOfRoom}</td>
                                <td>{Hotel.description}</td>
                                <td> <Link to={"/all-table/updateHOTEL/"+Hotel._id}><button  className='btn btn-warning'>Update</button></Link> </td>
                                <td> <button onClick={()=>{deleteHotel(Hotel._id)}} className='btn btn-danger'>Delete </button> </td>
                            </tr>
                        )
                    })
                }

            <a href="/reportHotel" >
            <button className="gen_btn" type="submit" >
            Generate pdf
            </button></a>

            </tbody>
        </table>
        </div>
    )
}

export default HotelTable;