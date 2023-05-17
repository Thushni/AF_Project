import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h5>About Stella Travell</h5>
            <p>
              Stella Travell is a travel agency that provides a wide range of
              travel services for individuals and groups.
            </p>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <p>
              123 Main Street
              <br />
              City, State 12345
              <br />
              Phone: 123-456-7890
              <br />
              Email: info@stellatravell.com
            </p>
          </div>
          <div className="col-md-3">
            <h5>Customer Service</h5>
            <p>
            Phone: 0112=2545750
              <br />
              Email: info@stellatravell.com
            </p>
          </div>
          <div className="col-md-3">
            <h5>Terms and conditions</h5>
            <p>
            Terms and conditions
              <br />
            
            </p>
          
          </div>
          <div className="col-md-6">
            <h5>Follow Us</h5>
            <ul className="social-icons">
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-12">
           <br></br>
            <p className="text-center">
              Copyright&copy; 2023 Stella Travell. All Rights Reserved.
            </p>
            <p className="text-center">
          
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
