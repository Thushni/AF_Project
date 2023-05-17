// Edit Component for update data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Hotel.css'



const Viewmore = (props) => {

    const { id } = useParams();
    const Navigate = useNavigate()
    const [hotelName, sethotelName] = useState("");
    const [hotelType, sethotelType] = useState("");
    const [location, setlocation] = useState("");
    const [amount, setamount] = useState("");
    const [noOfRoom, setnoOfRoom] = useState("");
    const [description, setdescription] = useState("");
    const [image, setImage] = useState("");
    const [formValues, setFormValues] = useState({

        hotelName: "",
        hotelType: "",
        location: "",
        amount: "",
        noOfRoom: "",
        description: "",
        image: ""
    });





    // Load data from server and reinitialize event form  
    useEffect(() => {
        axios
            .get(
                `http://localhost:8070/hotel/get/${id}`


            )
            .then((res) => {
                const { hotelName, hotelType, location, amount, noOfRoom, description, image } = res.data.hotel;
                console.log(hotelName)
                console.log(hotelType)
                console.log(location)
                console.log(amount)
                console.log(noOfRoom)
                console.log(description)
                console.log(image)
              
                sethotelName(hotelName)
                sethotelType(hotelType)
                setlocation(location)
                setamount(amount)
                setnoOfRoom(noOfRoom)
                setdescription(description)
                setImage(image)


            })
            .catch((err) => console.log(err));
    }, []);
    function sendData(e) {
        e.preventDefault();

        const newhotel = {

            hotelName,
            hotelType,
            location,
            amount,
            noOfRoom,
            description,
            image
        }
        Navigate('/bookEVENT')

    }
    // Return event form
    return (
        <div className="container">
           <h4 className="text-center" style={{color: "black", fontWeight: "bold"}}>
  View More Details
</h4>

          
            <div className="row">

                <div className="col-md-3">
                    <div className="image">
                        <img src={image} className="avatar img-circle img-thumbnail" alt="avatar" />
                    </div>
                    <div className="text-center">

                    </div>
                </div>
                <div className="col-md-9 personal-info">





                    <form className="form" onSubmit={sendData} >
                        <br /><br />

                        <h6 className="user-name border" style={{color: "blue", fontWeight: "bold"}}> {hotelName}</h6>
                        <h6 className="user-name border">{hotelType}</h6>
                        <h6 className="user-name border">{location}</h6>
                        <h6 className="user-name border">Price(Rs): {amount}</h6>
                        <h6 className="user-name border">No Of Room: {noOfRoom}</h6>
                        <h6 className="user-name border">{description}</h6>


                        <div className="d-grid col-8 mx-10">
                            <br /><br />
                            <a href="http://localhost:3000/bookEVENT" >
                                <button className="btn btn-warning" type="submit">Request for Booking</button></a>

                        </div>
                    </form>



                </div>
            </div>

        </div>

    );
}

export default Viewmore;