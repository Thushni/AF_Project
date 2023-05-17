import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom"
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function ReportHotel() {

    //generate pdf-----------------------------

    let docToPrint = React.createRef();

    const printDocument = () => {
      const input = docToPrint.current;
      html2canvas(input).then(canvas => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "landscape",
          unit: "px",
          format: [600, 900]
        });
        pdf.addImage(imgData, "JPEG", 0, 0);
        pdf.save("Event Report_2021-2-3.pdf");
      });
    };
  
    //end generate pdf-----------------------------

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
              
            }
        })
}    }

return (
        
      <div ref={docToPrint}>
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
                              
                          </tr>
                      )
                  })
              }

          <button className="newCustomer_btn" onClick={printDocument}>
          Download PDF
          </button>

          </tbody>
      </table>
      </div>
    
  )
}

export default ReportHotel;
