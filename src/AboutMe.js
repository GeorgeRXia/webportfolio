import React from "react";
// import './AboutMe.css';
import Blurbs from "./Blurbs";



function AboutMe(){

let contentForIntro = "I graduated from New York Code and Design Academy's Web Intensive course in July 2017 at Philadelphia. At New York Code, my web applications were created with modern developer skills. I am located in Wilmington, Delaware. Right now, I am an intern at Goji Systems. I am seeking new programming opportunities.";
let technology = "HTML, CSS/SASS, Sinatra, JAVA, Javascript, React, React Native, Redux, Angular2+, Ionic Ruby, Node Websockets, Rails, Node.js, MongoDB and SQL"
let quoteForIntro ="";
let contentForInterests = "What drew me to coding was the ability to create applications which to me are like machines that I can tinker with. The thought process in creating these applications is both challenging and very rewarding. The great thing about coding is most projects probably has something new niche to be learned to bring out the unique vision. This makes the experience never routine.";
let quoteForInterests ="";

return( <div>
    <h2> About Me </h2>
    <Blurbs title={"Developer"} content={contentForIntro} technology={technology}/>
    <Blurbs title={"My Story"} content={contentForInterests}/>
  </div>
  )

}

export default AboutMe
