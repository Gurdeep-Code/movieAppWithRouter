import React from 'react';
import StarRating from './cardComp/StarRating';
import Favorite from './cardComp/Favorite';
import { useNavigate,useLocation } from 'react-router-dom';
import '../css/DetailsSection.css'

function DetailsSection() {
  const path = "https://image.tmdb.org/t/p/w500";
  const navigate = useNavigate();
  const location = useLocation();//comp is crash when link is share make it independent for fetching details
  const {poster_path,title,vote_average,release_date,overview,id} =location.state;
  
  return (<div className='MovieDetailsContainer'>
      <img className="MovieDetailsImage" src={`${path}${poster_path}`}  />
      <div className="MovieDetailsInfo">
          <span className="MovieDetailsName">{title} <Favorite movieId={id} /></span>
          <StarRating rating={vote_average} numericRating ="true" />
          <div className="MovieSubDetails">{release_date}</div>
          <div className="MovieSubDetails">{overview}</div>
          <button onClick={()=>navigate(`/trailer/${title}/${id}`)}>Watch Trailer</button>
      </div>
  </div>);
}

export default DetailsSection;
