import React from "react";
import Blurbs from "./Blurbs";
import ReactPlayer from 'react-player';
import SimonTurnBased from './simonTurnBased.mp4';
import Paperboy from './paperBoyDemo.mp4';

var MediaQuery = require('react-responsive');

function projects(){
  let paperboyContent = "Using Rails, Ruby, Nokogiri, React, my team made this news aggregator that allows a user to view the latest articles in reverse chronological order from news outlets chosen by them. For more mainstream news, API calls run in Ruby and React. For local and smaller news organizations, a scraper runs when the user logs in. These selected news sources could be saved for a user in the SQL database. With this dynamic way of gathering many news articles from a plethora of sources, the user experience is not slowed down by dividing the API calls and scraping throughout the web application.";
  let paperboyShorterContent = "News aggregator that uses scraping and API calls to collect news articles for a user."
  let paperboyTechnologies = "Ruby, Nokogiri, React, Rails, SQL";
  let paperBoyUrl = "https://ianzolitor.github.io/paperboy_frontend/";

  let simonContent = "This single and multiplayer mobile Simon-says memory game, using React Native, Node websockets, and Rails, lights up a person's phone with a computer decided pattern. Watch as the tiles light up in differing speeds depending on the game mode or when a players presses to match the pattern. With websockets, a player can play against his friend for highest score with real time update of the opponent's score. Also, by implmenting Rails with websockets, a player can play a game mode that is turn-based using the same puzzle for both players with the winner, losers, or tie decided in a game-point scenario. For another dynamic multiplayer experience, players compete for six rounds with each round faster than the last. Highest score wins! ";
  let simonShorterContent  = "This memory game has both single player and multiplayer. Using websockets and rails, this game allows a multitude of multiplayer options."
  let simonTechnologies = " React Native, Node websockets, Rails, SQL";
  let simonBackEndUrl = "https://github.com/GeorgeRXia/simon_backend";
  let simonFrontEndUrl = "https://github.com/GeorgeRXia/react-native-simon";

  return(
    <div>
     <MediaQuery minWidth={490}>
      <h2> My Projects </h2>
      <Blurbs title={"Paperboy: News Aggregator"} content={paperboyContent} technology={paperboyTechnologies} url={paperBoyUrl} site={"Paperboy News"}/>
      <ReactPlayer url={Paperboy} playing loop={true} style={{marginLeft: "auto",marginRight:"auto"}} height={500} width={500} />
      <Blurbs title={"Simon: Mobile Game"} content={simonContent} technology={simonTechnologies} site={"Github Backend"} url={simonBackEndUrl} site2={"Github Frontend"} url2 = {simonFrontEndUrl}/>
      <ReactPlayer url={SimonTurnBased} playing loop={true} style={{marginLeft: "auto",marginRight:"auto", marginTop: 65}} height={500} width={500}/>
     </MediaQuery>

     <MediaQuery maxWidth={489}>
      <h2> My Project </h2>
      <Blurbs title={"Paperboy: News Aggregator"} content={paperboyShorterContent} technology={paperboyTechnologies} url={paperBoyUrl} site={"Paperboy News"}/>
      <ReactPlayer url={Paperboy} playing loop={true} style={{marginLeft: "auto",marginRight:"auto"}} height={350} width={350} />
      <Blurbs title={"Simon: Mobile Game"} content={simonShorterContent} technology={simonTechnologies} site={"Github Backend"} url={simonBackEndUrl} site2={"Github Frontend"} url2 = {simonFrontEndUrl}/>
      <ReactPlayer url={SimonTurnBased} playing loop={true} style={{marginLeft: "auto",marginRight:"auto", marginTop: 65}} height={350} width={350}/>
     </MediaQuery>
    </div>
  )

}



export default projects
