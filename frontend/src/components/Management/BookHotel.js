import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function BookHotel() {

    const Navigate = useNavigate()
    const [fName, setfName] = useState("");
    const [lName, setlName] = useState("");
    const [room, setroom] = useState("");
    const [ro, setro] = useState("");
    const [contactNo, setcontactNo] = useState("");
    const [email, setemail] = useState("");
    const [fdate, setfdate] = useState("");
    const [ldate, setldate] = useState("");

    function sendData(e) {
        e.preventDefault();

        const newBookingHOTEL = {

            fName,
            lName,
            room,
            ro,
            contactNo,
            email,
            fdate,
            ldate


        }

        axios.post("http://localhost:8070/bookingHOTEL/bookHOTEL", newBookingHOTEL).then((res) => {
            alert("Booking Added")
            console.log(res.data)
            Navigate('/all-table/bookin')

        }).catch((err) => {
            alert(err)
        })
    }

    return (

        <div ><br />
            <div className="d-grid col-12 mx-10">
                <button className="btn btn-dark" type="submit">Request for Booking</button>
            </div>

            <br />
            <div className="container" style={{ backgroundColor: 'white', border: '4px solid gray', borderRadius: '20px' }}>
                <form className="row g-3 needs-validation" onSubmit={sendData} >
                    <div className="col-md-6">
                        <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>First Name</label>
                        <input type="text" className="form-control" id="validationCustom01" placeholder="Enter first name" onChange={(e) => {

                            setfName(e.target.value);

                        }} required />


                    </div>

                    <div className="col-md-6">
                        <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>Last Name</label>
                        <input type="text" className="form-control" id="validationCustom01" placeholder="Enter last name" onChange={(e) => {

                            setlName(e.target.value);

                        }} required />


                    </div>


                    <div className="col-md-6">
                        <label for="validationCustom04" className="form-label" style={{ fontWeight: 'bold' }}>Select Rooms</label>
                        <select className="form-select" id="validationCustom04" onChange={(e) => {

                            setroom(e.target.value);

                        }} required>
                            <option selected disabled >Select Rooms</option>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>

                    </div>
                    <div className="col-md-6">
                        <label for="validationCustom04" className="form-label" style={{ fontWeight: 'bold' }}>Select Rooms Option</label>
                        <select className="form-select" id="validationCustom04" onChange={(e) => {

                            setro(e.target.value);

                        }} required>
                            <option selected disabled >Select options</option>
                            <option>Premium Triple Room, 1 King Bed
                            </option>
                            <option>Deluxe Twin Room
                            </option>
                            <option>Premium Double Room, Accessible
                            </option>
                            <option>Deluxe Triple Room, 1 Bedroom, Accessible
                            </option>
                            <option>Deluxe Double Room, 1 King Bed, Accessible
                            </option>
                        </select>

                    </div>


                    <div className="col-md-6">
                        <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>Contact No</label>
                        <input type="telephone" maxLength={10} minLength={10} className="form-control" id="validationCustom01" placeholder="Enter contact No" onChange={(e) => {

                            setcontactNo(e.target.value);

                        }} required />

                    </div>

                    <div className="col-md-6">
                        <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>Email</label>
                        <input type="email" className="form-control" id="validationCustom01" placeholder="Enter Email" onChange={(e) => {

                            setemail(e.target.value);

                        }} required />

                    </div>

                    <div className="col-md-6">
                        <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>Check-in date</label>
                        <input type="Date" className="form-control" id="validationCustom01" placeholder="Enter date" onChange={(e) => {

                            setfdate(e.target.value);

                        }} required />

                    </div>
                    <div className="col-md-6">
                        <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>Check-out date</label>
                        <input type="Date" className="form-control" id="validationCustom01" placeholder="Enter date" onChange={(e) => {

                            setldate(e.target.value);

                        }} required />

                    </div>
                    <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold', color: 'red' }}>You'll be taken to the next step
                        Confirmation is immediate
                        No booking or credit card fees!
                        No credit card needed!</label>

                    <div className="col-3">
                        <button className="btn btn-primary" type="submit" >
                            <a href="/all-table/bookin" validate="true" style={{ textDecoration: 'none', color: 'white' }}></a>
                            I'll Reserve</button>
                    </div>

                </form>

            </div>
            <br></br>
            <div className="d-grid col-12 mx-10">
                <button className="btn btn-warning" type="submit">Thank You! Confirmation is immediate</button>
            </div>

        </div>

    )
}