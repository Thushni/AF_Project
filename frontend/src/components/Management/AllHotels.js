import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
import './Hotel.css'
import { FaStar } from 'react-icons/fa';


function HotelTable() {

    const [hotels, setHotels] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

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


    const deleteHotel = (id) => {
        // alert(id)
        var answer = window.confirm("Are you sure")

        if (answer) {
            axios.delete("http://localhost:8070/Hotel/delete/" + id).then((res) => {
                if (res.status === 200) {
                    alert("Hotel deleted")
                    // getHotels()
                }
            })
        }
    }

    //search

    useEffect(() => {
        setFilteredResults(hotels.filter((hotel) => {
            const nameMatch = hotel.hotelName.toLowerCase().includes(searchInput.toLowerCase());
            const typeMatch = hotel.hotelType.toLowerCase().includes(searchInput.toLowerCase());
            const locationMatch = hotel.location.toLowerCase().includes(searchInput.toLowerCase());
            return (nameMatch || typeMatch || locationMatch);
        }));
    }, [searchInput, hotels]);


    //endsearch



    return (
        <div className='background'>
            <div>





                <div class="d-flex justify-content-center h-50">
                    <a href="http://localhost:3000/addHOTEL"><button class="a" type="button" style={{ color: "#FFFFFF", fontWeight: "bold" }}>Add Hotels </button> </a>
                    <div class="searchbar">
<p><b><i>Destination/Hotel name:</i></b></p>


                        <input class="search_input" type="text" placeholder="Find Hotels" onChange={(e) => setSearchInput(e.target.value)} />
                        <a href="#" class="search_icon"><i class="fa fa-search"></i></a>
                    </div>


                </div>
            </div>

            <div className="container">
                <section className="section about-section gray-bg" id="about">
                    <br>
                    </br>

                    <h6 className="text-center font-italic" class="p-2 mb-6 bg-warning text-dark" >
                        customers can easily find hotels that match their
                        specific needs and preferences by entering the location and hotel name.
                    </h6>
                    {hotels && filteredResults.map(hotel => (

                        <div className="row align-items-center justify-content-around flex-row-reverse" style={{ border: "2px solid ", backgroundColor: "white", color: "gray", borderRadius: "40px" }}>
                            <div className="col-lg-7">
                                <div className="about-text">
                                    <h4></h4>
                                    <button class="f41101cd39" aria-expanded="false" data-testid="wishlist-button" fdprocessedid="ic4fu9"><span data-testid="wishlist-icon" class="b6dc9a9e69 c422d77911 ec1b6253a6" aria-hidden="true"><svg viewBox="0 0 128 128" width="1em" height="1em"><path d="M64 112a3.6 3.6 0 0 1-2-.5 138.8 138.8 0 0 1-44.2-38c-10-14.4-10.6-26-9.4-33.2a29 29 0 0 1 22.9-23.7c11.9-2.4 24 2.5 32.7 13a33.7 33.7 0 0 1 32.7-13 29 29 0 0 1 22.8 23.7c1.3 7.2.6 18.8-9.3 33.3-9.1 13.1-24 25.9-44.2 37.9a3.6 3.6 0 0 1-2 .5z"></path></svg></span></button>
                                    <div>
      <FaStar color="#FDB813" size={20} />
      <FaStar color="#FDB813" size={20} />
      <FaStar color="#FDB813" size={20} />
      <FaStar color="#FDB813" size={20} />
      <FaStar color="#FDB813" size={20} />
    </div>
                                    <h5 style={{color: "blue", fontWeight: "bold"}}>{hotel.hotelName}</h5>


                                    <h6 className="dark-color" style={{ color: "black" }}></h6><h6 class="dark-color"> {hotel.hotelType}</h6>
                                    <h6 className="dark-color">
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrd_R8Bb6nziIEtTiCDiwcamiowhHUfFLN2w&usqp=CAU" alt="Location" style={{ width: '40px', height: '40px' }} />
                                        {hotel.location}
                                    </h6>

                                    <h6 className="dark-color font-weight-bold">Price(Rs): {hotel.amount}</h6>


                                   
                                    <div className="btn-bar">
                                        <td> <Link to={"/viewHOTEL/" + hotel._id}><button className='btn btn-primary'>Show On Map</button></Link> </td>

                                        <td> <Link to={"/viewHOTEL/" + hotel._id}><button className='btn btn-success'>View More</button></Link> </td>
                                        <td>

                                            <a href="http://localhost:3000/bookHOTEL" >
                                                <button className="btn btn-warning" type="submit">Request for Booking</button></a></td>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center ">
                                <div className="about-img">
                                    <img className='photo' src={hotel.image} />

                                </div>
                            </div>
                            <br>
                            </br>
                        </div>


                    ))}
                </section>

            </div>
        </div>
    )
}
export default HotelTable;