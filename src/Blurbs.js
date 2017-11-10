import React from "react";
import './Blurbs.css';


function Blurbs(props){

  return (
      <div>
        {Blurb()}
      </div>

  )

  function Blurb(){
    return(
      <div>
        <div className="blurbContainer">
            <div className="blurbDiv">
                <div className="blurbTitle">
                    {props.title}
                </div>
                {" "}
                <div className="blurbExtra">
                    {props.technology}
                </div>
                <div></div>
                <div className="blurbContent">
                    {props.content}
                </div>
                  {" "}
                <div className="blurbExtra">
                  <a href={props.url} > {props.site} </a>
                  <a href={props.url2} > {props.site2} </a>
                </div>
            </div>
          </div>
      </div>




    )


  }

}

export default Blurbs
