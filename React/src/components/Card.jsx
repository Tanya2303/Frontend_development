import React from 'react'

const Card = (props) => {
  return (
    <div className="card">
        <img src={props.img} alt="" />
        <h2>{props.user}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugiat deleniti ea autem facilis. Eveniet, quas quo? Rerum, voluptatibus? Quia, delectus ut. Ex provident magnam quam numquam quae, corrupti sapiente?</p>
        <button>View Profile</button>
    </div>
  )
}

export default Card