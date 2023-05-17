// Edit Component for update data

// Import Modules
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdateHotel = (props) => {
  const { id } = useParams();
  const Navigate = useNavigate()
  const [hotelName, sethotelName] = useState("");
  const [hotelType, sethotelType] = useState("");
  const [location, setlocation] = useState("");
  const [amount, setamount] = useState("");
  const [noOfRoom, setnoOfRoom] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
  const [formValues, setFormValues] = useState({
    hotelName: "",
    hotelType: "",
    location: "",
    amount: "",
    noOfRoom: "",
    description: "",
    image: ""
  });

  //onSubmit handler
  const onSubmit = (hotelObject) => {
    axios
      .put(
        `http://localhost:8070/event/updateHOTEL/${id}`,
        hotelObject
      )
      .then((res) => {
        if (res.status === 200) {
          alert("hotel successfully updated");
          props.history.push("/AddHotel");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };

  // Load data from server and reinitialize hotel form
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
        setimage(image)
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

    axios.put(`http://localhost:8070/hotel/updateHOTEL/${id}`, newhotel).then((res) => {
      alert("Hotel Updated")
      console.log(res.data)
      Navigate('/allHOTEL-table')

    }).catch((err) => {
      alert(err)
    })

  }

  // Return event form
  return (
    <div className="container"
      style={{
        backgroundImage: "url(https://wallpapercave.com/wp/wp7488228.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}><br /><br />
      <div className="d-grid col-12 mx-10">
        <button className="btn btn-secondary" type="submit">Update Hotel</button>
        <br></br>
      </div>



      <div className="container" style={{ backgroundColor: 'white', border: '20px solid gray', borderRadius: '20px' }}>

        <form className="row g-3 needs-validation" onSubmit={sendData} >

          <div className="col-md-6">
            <br></br>
            <label for="eventName" className="form-label" style={{ fontWeight: 'bold' }}>Hotel Name</label>
            <input value={hotelName} type="text" className="form-control is-invalid" id="eventName" placeholder=" Event Name"

              onChange={(e) => {
                sethotelName(e.target.value);

              }} required />


          </div>


          <div className="col-md-6">
            <br></br>
            <label for="validationCustom04" className="form-label" style={{ fontWeight: 'bold' }}>Accommodation Type</label>
            <select className="form-select" value={hotelType} id="validationCustom04" onChange={(e) => {
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
            <select className="form-select" value={location} id="validationCustom04" onChange={(e) => {

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
            <label for="amount" className="form-label" style={{ fontWeight: 'bold' }}>Price</label>
            <input value={amount} type="text" className="form-control" id="amount" placeholder="Enter amount"

              onChange={(e) => {
                setamount(e.target.value);

              }} required />

          </div>

          <div className="col-md-6">
            <label for="noOfPeople" className="form-label" style={{ fontWeight: 'bold' }}>No Of room</label>
            <input value={noOfRoom} type="text" className="form-control" id="noOfPeople" placeholder="Enter No Of People"

              onChange={(e) => {
                setnoOfRoom(e.target.value);

              }} required />

          </div>

          <div className="col-md-12">
            <label for="description" className="form-label" style={{ fontWeight: 'bold' }}>Hotel Description</label>
            <textarea value={description} className="form-control" id="description" placeholder="Enter description"

              onChange={(e) => {
                setdescription(e.target.value);

              }} required>
            </textarea>

          </div>

          <div className="col-md-12">
            <label for="image" className="form-label" style={{ fontWeight: 'bold' }}>Hotel Image</label>
            <input value={image} type="text" className="form-control" id="image" placeholder="Select Image" onChange={(e) => {

              setimage(e.target.value);

            }} required />
          </div>


          <div className="col-3">
            <button className="btn btn-primary" type="submit" >
              <a href="/" validate="true" style={{ textDecoration: 'none', color: 'white' }}></a>
              Update</button>
            <br></br>
            <br></br>
          </div>
          <br></br>
        </form>
      </div>
      <br></br>
    </div>
  );
};


export default UpdateHotel;
