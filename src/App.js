import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';
import AboutMe from './AboutMe';



class App extends Component {
  constructor(){
    super()
    this.state={

    }

  }
  componentWillMount(){
    document.title = "George's Portfolio";

  }
  render() {
    let headline = "George Xia"
    return (

      <div >

        <div style={styles.nav} className="nav">
        <div style={styles.headerOne} > {headline} </div>
        <div style={styles.headerTwo} className="headerTwo"> A Full Stack Developer </div>
        <hr/>
        <BrowserRouter>
            <div>
              <ul style={styles.list}>
                <li style={styles.listItem}>  <Link style={styles.link} to="/webportfolio"> Home</Link> </li>
                <li style={styles.listItem}>  <Link style={styles.link} to="/contact"> Contact</Link> </li>
                <li style={styles.listItem}>  <Link style={styles.link} to="/projects">Projects</Link></li>
                <li style={styles.listItem}>  <Link style={styles.link} to="/resume">Resume</Link></li>
              </ul>
              <Route path="/contact" component={Contact} />
              <Route path="/projects" component={Projects} />
              <Route path="/resume" component={Resume} />
              <Route exact path="/webportfolio" component={AboutMe} />
            </div>
        </BrowserRouter>
        </div>
    </div>

    )
  }
}

const styles = {
  headerOne:{
    textAlign: "center",
    fontSize: 50,


  },
  headerTwo:{
    textAlign: "center",
    fontSize: 25

  },
  link:{
    color: "white",
    textDecoration: 'none'

  },
  nav:{
    backgroundColor: "black",
    color: "white"


  },

  listItem:{
    display:"inline",
    margin: 5,
    listStyle: "none",
    color: "red"

  }

}

export default App;
