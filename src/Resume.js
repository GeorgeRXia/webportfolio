import React from 'react';
import GeorgeXiaResume from './GeorgeXiaResume.png';
import GeorgeResume from './GeorgeResume.pdf';

var MediaQuery = require('react-responsive');
function Resume(){

 return(
   <div>
    <h2> My Resume </h2>
    <div style={styles.container}>
      <div>
        <a href={GeorgeResume} download="GeorgeResume.pdf" style={{textDecoration: "none", color:"white"}}>Download</a>
      </div>

      <MediaQuery minWidth={485}>
        <img src={GeorgeXiaResume} style={styles.resume} />
      </MediaQuery>

      <MediaQuery minWidth={376} maxWidth={484}>
        <img src={GeorgeXiaResume} style={styles.resumeMobile} />
      </MediaQuery>
      
      <MediaQuery maxWidth={375}>
        <img src={GeorgeXiaResume} style={styles.resumeSmallerMobile} />
      </MediaQuery>
      <div>
        <a href={GeorgeResume} download="GeorgeResume.pdf" style={{textDecoration: "none", color:"white"}}>Download</a>
      </div>
    </div>
  </div>

 )

}

const styles = {
  resume:{
    width: 500,
    height: 700

  },
  resumeMobile:{
    width: 350,
    height: 600
  },
  resumeSmallerMobile:{
    width: 300,
    height: 450

  },
  container:{
    textAlign: "center"


  }

}

export default Resume
