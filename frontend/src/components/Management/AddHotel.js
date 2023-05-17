import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddHotel() {

  const Navigate = useNavigate()
  const [hotelName, sethotelName] = useState("");
  const [hotelType, sethotelType] = useState("");
  const [location, setlocation] = useState("");
  const [amount, setamount] = useState("");
  const [noOfRoom, setnoOfRoom] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newHotel = {

      hotelName,
      hotelType,
      location,
      amount,
      noOfRoom,
      description,
      image

    }

    axios.post("http://localhost:8070/hotel/addHOTEL", newHotel).then((res) => {
      alert("Hotel Added")
      console.log(res.data)
      Navigate('/allHOTEL-table')

    }).catch((err) => {
      alert(err)
    })
  }

  return (

    <div className="container"
      style={{
        backgroundImage: "url(https://wallpapercave.com/wp/wp7488228.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}><br />


      <br />
      <div className="d-grid col-12 mx-10">
      
        <br></br>
      </div>
      <div className="container" style={{ backgroundColor: 'white', border: '10px solid gray', borderRadius: '20px' }}>

        <form className="row g-3 needs-validation" onSubmit={sendData} >

          <div className="col-md-6">
            <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>Hotel Name</label>
            <input type="text" className="form-control" id="validationCustom01" placeholder="Enter hotel name" onChange={(e) => {

              sethotelName(e.target.value);

            }} required />


          </div>


          <div className="col-md-6">
            <label for="validationCustom04" className="form-label" style={{ fontWeight: 'bold' }}>Accommodation Type</label>
            <select className="form-select" id="validationCustom04" onChange={(e) => {

              sethotelType(e.target.value);

            }} required>
              <option selected disabled >Choose...</option>
              <option>Superior Double or Twin Room with Mountain View</option>
              <option>Luxury Cottage with Mountain View</option>
              <option>Superior Villa</option>
              <option>Tent with a Night Walk</option>
              <option>Double Room with Garden View</option>
            </select>

          </div>


          <div className="col-md-6">
            <label for="validationCustom04" className="form-label" style={{ fontWeight: 'bold' }}>Location</label>
            <select className="form-select" id="validationCustom04" onChange={(e) => {

              setlocation(e.target.value);

            }} required>
              <option selected disabled >Choose...</option>
              <option>Colombo</option>
              <option>Hikkaduwa</option>
              <option>Galle</option>
              <option>Ella</option>
              <option>Dehiwala</option>
              <option>Mirissa</option>
              <option>Adam's Peak</option>
            </select>

          </div>

          <div className="col-md-6">
            <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>Price</label>
            <input type="text" className="form-control" id="validationCustom01" placeholder="Enter price" onChange={(e) => {

              setamount(e.target.value);

            }} required />

          </div>

          <div className="col-md-12">
            <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>No of room</label>
            <input type="text" className="form-control" id="validationCustom01" placeholder="Enter No Of room" onChange={(e) => {

              setnoOfRoom(e.target.value);

            }} required />

          </div>

          <div className="col-md-12">
            <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>Hotel Description</label>
            <textarea className="form-control" id="validationCustom01" rows="2" cols="100" placeholder="Enter here..." onChange={(e) => {

              setdescription(e.target.value);

            }} required>
            </textarea>

          </div>

          <div className="col-md-12">
            <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}>Hotel Image</label>
            <input type="text" className="form-control" id="validationCustom01" placeholder="Select Image" onChange={(e) => {

              setimage(e.target.value);

            }} required />


          </div>

          
          
          <div className="col-md-3">
            <button className="btn btn-primary" type="submit" style={{ width: '200px' }} >
              <a href="/allHOTEL-table" validate="true" style={{ textDecoration: 'none', color: 'white' }}></a>
              Submit</button>
              <br></br>
          </div>
          <div className="col-md-3">
            <button className="btn btn-primary" type="submit" style={{ width: '200px' }} >
              <a href="/allHOTEL-table" validate="true" style={{ textDecoration: 'none', color: 'white' }}></a>
              Cancle</button>
              <br></br>
          </div>
          <div className="col-md-12">
            <label for="validationCustom01" className="form-label" style={{ fontWeight: 'bold' }}></label>
          

          </div>
        </form>
      </div>
      <br></br>
      <div className="d-grid col-12 mx-10">
      
      </div>
      <br></br>
    </div>
  )
}