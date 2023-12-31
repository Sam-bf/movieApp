import ReactStars from "react-stars";
import React from 'react';
import { Link } from "react-router-dom";

const MovieCard=({el})=>{
    return (
        <div className="screen-2">
        <div className="top-image">
          <img src={el.image} alt="poster" />
        </div>
  
        <div className="main-heading">
          <h1 className="title">{el.name}</h1>
          <div className="row">
          <ReactStars
  count={5}
  size={24}
  color2={'#ffd700'} 
  edit={false}
  value={el.rating}/>
  
            <span>{el.date}</span>
            <span className="r">R</span>
            <span>{el.season}</span>
            <span className="hd">HD</span>
          </div>
        </div>
  
        <div className="categories">
          <a href="#" className="active">
          <Link to = "/Profile">Description </Link> 
          </a>
          <a href="#">Episodes</a>
          <a href="#">Reviews</a>
        </div>
  
        <p className="description">{el.description}</p>
        <div className="btn-play">
          <span>
            {" "}
            <ion-icon className="icon" name="play"></ion-icon>{" "}
          </span>
          Play 
        </div>
      </div>
    );
}
export default MovieCard