import React, { Component } from "react";
import './Contact.css'
import './Blurbs.css'

var MediaQuery = require('react-responsive');

function contact(){
return (
  <div>
    <div className="contact">
      <h2> Contact Me </h2>
      <MediaQuery minWidth={600}>
      <div className="blurbDiv">
          <div className="blurbContact">
            <ul>
              <li>E-mail: Georxia@gmail.com </li>
              <li>Phone: (302)722-5943</li>
              <li>Location: Wilmington, DE </li>
              <li>Linkedin: <a href="http://www.linkedin.com/in/georgerxia" style={{color: "black"}} target="_blank"> www.linkedin.com/in/georgerxia </a>	</li>
              <li>GitHub: <a href="http://www.github.com/GeorgeRXia" style={{color: "black"}} target="_blank">www.github.com/GeorgeRXia</a></li>
            </ul>
          </div>
      </div>
      </MediaQuery>
      <MediaQuery maxWidth={599}>
      <div className="blurbDiv">
          <div className="blurbMobileContact">
            <ul>
              <li>E-mail:</li>
              <MediaQuery maxWidth={599} minWidth={420}>
                <li>Georxia@gmail.com </li>
              </MediaQuery>
              <MediaQuery maxWidth={419}>
                <li>Georxia</li>
                <li>@gmail.com </li>
              </MediaQuery>
              <li>Cell:</li>
              <li>(302)494-1274</li>
              <li>Location: </li>
              <li>Wilmington, DE </li>
              <li>Linkedin: </li>
              <li><a href="http://www.linkedin.com/in/georgerxia" style={{color: "black"}} target="_blank"> Site </a>	</li>
              <li>GitHub: </li>
              <li><a href="http://www.github.com/GeorgeRXia" style={{color: "black"}} target="_blank">Site</a></li>
            </ul>
          </div>
      </div>

      </MediaQuery>
    </div>
  </div>
)
}




 export default contact
