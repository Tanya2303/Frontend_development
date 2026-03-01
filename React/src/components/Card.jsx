import React from 'react'
import { Bookmark } from 'lucide-react';

const Card = (props) => {
  return (
    <div className="card">
      
      <div className="top">
        <img
          src={props.brandLogo}
          alt={props.companyName}
          style={{
            width: "45px",
            height: "45px",
            objectFit: "contain"
          }}
          onError={(e) => {
            e.target.src =
              "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
          }}
        />
        <h4>
          Save <Bookmark size={14} />
        </h4>
      </div>

      <div className="center">
        <h3>
          {props.companyName} <span>{props.datePosted}</span>
        </h3>

        <h2>{props.post}</h2>

        <div className="tag">
          <h4>{props.tag2}</h4>
          <h4>{props.tag1}</h4>
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-left">
          <h3>${props.payPerHour}/hr</h3>
          <p>{props.location}</p>
        </div>

        <button>Apply Now</button>
      </div>

    </div>
  )
}

export default Card