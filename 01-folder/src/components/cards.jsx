import React from 'react'

const Cards = (props) => {
  return (
                <div className="cards">
        <div className="cardtop">
          <img src= {props.logoimg} alt = "card image"/>        
          <div className="topleft">
            <button>Save <span> </span></button>
          </div>
          </div>
        <div className="cardmiddle">
          <div className="companyname"> {props.name} <span className="timestamp"> {props.posted} </span></div>
          <div className="jobtitle">{props.position}</div>
          <div className="jobdetails"> 
            <button>{props.type}</button>
            <button>{props.level}</button>
            </div>
          </div>
        <div className="cardbottom">
          <div className="cardleft">
            <div className="salry">{props.salary}/M</div>
            <div className="joblocation">{props.location}</div>
          </div>
          <div className="cardright"> <button>Apply now</button>
          </div>
        </div>
      </div>
  )
}

export default Cards
